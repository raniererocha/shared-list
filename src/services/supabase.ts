import { createClient } from '@supabase/supabase-js'

const { NEXT_PUBLIC_SUPA_URL, NEXT_PUBLIC_SUPA_KEY } = process.env as Record<
  string,
  string
>

export const client = createClient(NEXT_PUBLIC_SUPA_URL, NEXT_PUBLIC_SUPA_KEY)
