#!/usr/bin/env node
require('dotenv').config()
const { createClient } = require('@supabase/supabase-js')

const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
const key = process.env.SUPABASE_SERVICE_KEY

if (!url || !key) {
  console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_KEY in environment')
  process.exit(1)
}

const supabase = createClient(url, key)

;(async () => {
  try {
    const { data, error } = await supabase.from('app_meta').select('key').limit(1)
    console.log('Supabase connection check result:')
    console.log({ data, error })
    process.exit(0)
  } catch (e) {
    console.error('Connection check failed', e)
    process.exit(2)
  }
})()
