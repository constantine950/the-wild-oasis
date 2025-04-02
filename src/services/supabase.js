import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://cjralhghckwvnrtwjwmz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqcmFsaGdoY2t3dm5ydHdqd216Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNDk2OTIsImV4cCI6MjA1ODcyNTY5Mn0.KK8M8tpmwSmvi6RNIUY6dIFNQg3iv_u5a7D3_yNlB6E";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
