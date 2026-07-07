import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json(
    {
      message: 'AI API endpoint - Placeholder voor toekomstige AI workflow',
      status: 'not_implemented',
    },
    { status: 501 }
  );
}

export async function GET() {
  return NextResponse.json(
    {
      message: 'AI API endpoint - Placeholder voor toekomstige AI workflow',
      status: 'not_implemented',
    },
    { status: 501 }
  );
}
