import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://cjralhghckwvnrtwjwmz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqcmFsaGdoY2t3dm5ydHdqd216Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEzNzgzMzAsImV4cCI6MjA1Njk1NDMzMH0.ySRmofOBpQ3tbyFkaYXrxVzdvXCwyjG9JP6WEwuuOsg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
