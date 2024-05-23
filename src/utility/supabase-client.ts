import { createClient } from "@refinedev/supabase";

const SUPABASE_URL = "https://usfyipcplxyqrrbeaiwl.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzZnlpcGNwbHh5cXJyYmVhaXdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYzNDEwOTIsImV4cCI6MjAzMTkxNzA5Mn0.1EiujZPvcU7whQORhqngBuBu63s-QT2_qBSndtGtA2s";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
  db: {
    schema: "public",
  },
  auth: {
    persistSession: true,
  },
});
