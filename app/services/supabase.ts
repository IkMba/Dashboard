import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://wfihorlidbwjqyxuepaf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndmaWhvcmxpZGJ3anF5eHVlcGFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMzNTc0OTksImV4cCI6MjAyODkzMzQ5OX0.Yw2H4ykA27D_8Ty-WQKnx7d6F1K8Wf16QMfCPKGJPsY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
