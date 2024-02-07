import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://abhmleehngupqjxbgsez.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiaG1sZWVobmd1cHFqeGJnc2V6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYxOTMzNjYsImV4cCI6MjAyMTc2OTM2Nn0.HdBwhCEfdx4sMhysMRO2q9UGrOH8MEZR7IUWkK1bBEQ"
);

export default supabase;
