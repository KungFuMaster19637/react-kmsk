import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://efplzlxnuvklhsiggdge.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmcGx6bHhudXZrbGhzaWdnZGdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE3NjY2NjgsImV4cCI6MjAwNzM0MjY2OH0.vH9X0Q8wqlNFo8DlPFNBXINA2KWEvbACJ9w9oF3_5Qg";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
