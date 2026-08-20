import { NextResponse } from 'next/server'
import { getServiceSupabase } from '../../../lib/supabase.server'

export async function GET() {
  try {
    const supabase = getServiceSupabase()
    const { data, error } = await supabase.from('app_meta').select('key').limit(1)
    return NextResponse.json({ ok: true, data, error })
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 })
  }
}
