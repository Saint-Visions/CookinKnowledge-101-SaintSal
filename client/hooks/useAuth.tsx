import { createContext, useContext, useEffect, useState } from 'react'
import { User, Session } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase'
import { getFeatureAccess, getFreeMessageLimit, getUpgradePrompt } from '@/utils/pricingTiers'

interface AuthContextType {
  user: User | null
  session: Session | null
  loading: boolean
  userTier: 'free' | 'unlimited' | 'core' | 'pro' | 'fullPro' | 'custom'
  messageCount: number
  hasAccess: (feature: string) => boolean
  incrementMessageCount: () => boolean
  getUpgradeMessage: (feature: string) => string
  signIn: (email: string, password: string) => Promise<{ error?: any }>
  signUp: (email: string, password: string, name: string) => Promise<{ error?: any }>
  signOut: () => Promise<void>
  signInWithGoogle: () => Promise<{ error?: any }>
  signInWithGitHub: () => Promise<{ error?: any }>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const [userTier, setUserTier] = useState<'free' | 'unlimited' | 'core' | 'pro' | 'fullPro' | 'custom'>('free')
  const [messageCount, setMessageCount] = useState(0)

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setUser(session?.user ?? null)
      // Extract tier from user metadata or default to free
      const tier = session?.user?.user_metadata?.subscription_tier || 'free'
      setUserTier(tier)
      // Load message count from localStorage for free users
      if (tier === 'free' && session?.user?.id) {
        const savedCount = localStorage.getItem(`messageCount_${session.user.id}`) || '0'
        setMessageCount(parseInt(savedCount))
      }
      setLoading(false)
    })

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session)
        setUser(session?.user ?? null)
        // Extract tier from user metadata or default to free
        const tier = session?.user?.user_metadata?.subscription_tier || 'free'
        setUserTier(tier)
        // Load message count from localStorage for free users
        if (tier === 'free' && session?.user?.id) {
          const savedCount = localStorage.getItem(`messageCount_${session.user.id}`) || '0'
          setMessageCount(parseInt(savedCount))
        }
        setLoading(false)

        // Note: Redirect will be handled by components, not here
        if (event === 'SIGNED_IN') {
          console.log('User signed in:', session?.user?.email, 'Tier:', tier)
        }
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    return { error }
  }

  const signUp = async (email: string, password: string, name: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
      },
    })
    return { error }
  }

  const signOut = async () => {
    await supabase.auth.signOut()
    setUserTier('free')
    setMessageCount(0)
  }

  // Access control function based on tier
  const hasAccess = (feature: string): boolean => {
    const accessMap = getFeatureAccess(userTier)
    return accessMap[feature]?.includes(userTier) || false
  }

  // Increment message count for free users - returns true if limit exceeded
  const incrementMessageCount = (): boolean => {
    if (userTier !== 'free') return false
    
    const newCount = messageCount + 1
    setMessageCount(newCount)
    
    if (user?.id) {
      localStorage.setItem(`messageCount_${user.id}`, newCount.toString())
    }
    
    return newCount >= getFreeMessageLimit()
  }

  // Get upgrade message for specific feature
  const getUpgradeMessage = (feature: string): string => {
    return getUpgradePrompt(userTier, feature)
  }

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/warroom`,
      },
    })
    return { error }
  }

  const signInWithGitHub = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${window.location.origin}/warroom`,
      },
    })
    if (error) {
      console.error('GitHub OAuth error:', error)
    }
    return { error }
  }

  const value = {
    user,
    session,
    loading,
    userTier,
    messageCount,
    hasAccess,
    incrementMessageCount,
    getUpgradeMessage,
    signIn,
    signUp,
    signOut,
    signInWithGoogle,
    signInWithGitHub,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
