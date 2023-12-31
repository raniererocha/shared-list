import { createClient } from '@supabase/supabase-js'

const { SUPA_URL, SUPA_KEY } = process.env as Record<string, string>

export const client = createClient(
  'https://xvaiutmgijfsshkhxppl.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh2YWl1dG1naWpmc3Noa2h4cHBsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQwNTAxMDcsImV4cCI6MjAxOTYyNjEwN30.E605Noeq8Dsr89XYlFzREhrKzBJvDYof2yGVb_5Q1AU',
)
