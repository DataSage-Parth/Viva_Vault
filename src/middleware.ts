import { NextResponse, type NextRequest } from 'next/server';
import { updateSession } from '@/lib/supabase/middleware';

const MAINTENANCE_MODE = true;

// Keep these sections available while the rest of VivaVault is paused.
const PUBLIC_DURING_MAINTENANCE = ['/most-asked', '/coding-questions'];

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const isPublicDuringMaintenance = PUBLIC_DURING_MAINTENANCE.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`)
  );

  if (
    MAINTENANCE_MODE &&
    pathname !== '/maintenance' &&
    !isPublicDuringMaintenance
  ) {
    return NextResponse.rewrite(new URL('/maintenance', request.url));
  }

  return await updateSession(request);
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
