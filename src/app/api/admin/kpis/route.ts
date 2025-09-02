import { NextResponse } from 'next/server';
import { NEXT_PUBLIC_API_URL } from '@/lib/config';

const API = NEXT_PUBLIC_API_URL?.replace(/\/$/, '');

export async function GET() {
  try {
    const res = await fetch(`${API}/orders/admin/kpis`, { cache: 'no-store' });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      return NextResponse.json({ message: 'Upstream API error', details: err }, { status: 502 });
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: 'Failed to fetch KPIs', error: String(error) }, { status: 500 });
  }
}
