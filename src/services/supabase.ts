import { createClient } from '@supabase/supabase-js'

const { NEXT_PUBLIC_SUPA_URL, NEXT_PUBLIC_SUPA_KEY } = process.env as Record<
  string,
  string
>
const supabaseUrl = NEXT_PUBLIC_SUPA_URL || ''
const supabaseKey = NEXT_PUBLIC_SUPA_KEY || ''

console.log('CREDENTIALS: ', { KEY: supabaseKey, URL: supabaseUrl })

export const client = createClient(supabaseUrl ?? '', supabaseKey ?? '')
