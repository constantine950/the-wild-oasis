import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://cjralhghckwvnrtwjwmz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqcmFsaGdoY2t3dm5ydHdqd216Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MzE0OTY5MiwiZXhwIjoyMDU4NzI1NjkyfQ._hbGozjQgIlmy4_SiJcBHNJ9S4HzcFSmNpvQ4OC1qMg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
