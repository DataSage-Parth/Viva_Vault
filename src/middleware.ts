import { NextResponse, type NextRequest } from 'next/server';
import { updateSession } from '@/lib/supabase/middleware';

const MAINTENANCE_MODE = true;

export async function middleware(request: NextRequest) {
  if (MAINTENANCE_MODE && request.nextUrl.pathname !== '/maintenance') {
    return NextResponse.rewrite(new URL('/maintenance', request.url));
  }

  return await updateSession(request);
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
