import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mqsjjrglblvlfyjdmzyb.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xc2pqcmdsYmx2bGZ5amRtenliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3Nzk2OTIsImV4cCI6MjA4NTM1NTY5Mn0.aD7yEtu26KSOlMkIBeHF2Gi20Ch9QuEcNsjixgGEB4A';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
