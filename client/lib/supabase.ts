import { createClient } from "@supabase/supabase-js";

// 🔐 REAL SUPABASE CREDENTIALS - PRODUCTION READY
const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL ||
  "https://nivrmhkdgtmmbtswyvey.supabase.co";
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pdnJtaGtkZ3RtbWJ0c3d5dmV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1MTA1MjEsImV4cCI6MjA2MjA4NjUyMX0.Y0lx7FA97zV3GkKAmu_5aV8Bz98AYyqvHdHEau6Tvfc";

// Validate URL format to prevent crashes
function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return (
      url.startsWith("https://") &&
      !url.includes("your_") &&
      !url.includes("_here")
    );
  } catch {
    return false;
  }
}

const isValidConfig =
  isValidUrl(supabaseUrl) &&
  supabaseAnonKey &&
  supabaseAnonKey.length > 20 &&
  !supabaseAnonKey.includes("your_");

if (isValidConfig) {
  console.log("🔐 Supabase URL:", supabaseUrl);
  console.log(
    "🔐 Supabase Key (first 20 chars):",
    supabaseAnonKey.substring(0, 20) + "...",
  );
} else {
  console.warn(
    "⚠️ Invalid Supabase configuration detected - using fallback mode",
  );
}

export const supabase = isValidConfig
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createClient("https://placeholder.supabase.co", "placeholder_key");
