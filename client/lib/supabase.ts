import { createClient } from '@supabase/supabase-js'

// Get environment variables with fallbacks
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsYWNlaG9sZGVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDA5OTUyMDAsImV4cCI6MTk1NjU3MTIwMH0.placeholder-key'

// Validate URLs
let validUrl: string
let validKey: string

try {
  // Test if URL is valid
  new URL(supabaseUrl)
  validUrl = supabaseUrl
  validKey = supabaseAnonKey
} catch {
  // Use safe fallback
  validUrl = 'https://placeholder.supabase.co'
  validKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsYWNlaG9sZGVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDA5OTUyMDAsImV4cCI6MTk1NjU3MTIwMH0.placeholder-key'
  console.warn('⚠️ Invalid Supabase URL, using placeholder for development')
}

console.log('Supabase URL:', validUrl)
console.log('Supabase Key (first 20 chars):', validKey.substring(0, 20) + '...')

export const supabase = createClient(validUrl, validKey)
