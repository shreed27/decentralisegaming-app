// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://fovawvpyhomebvctbkga.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvdmF3dnB5aG9tZWJ2Y3Ria2dhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0ODI4NDQsImV4cCI6MjA1MzA1ODg0NH0.IXzbMYSYojKjr6ShSSsBtvU6nbC4oO9fY1qBt6yI0uE";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);