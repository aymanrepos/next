import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  // Get the pathname of the request (e.g. /, /login)
  const path = req.nextUrl.pathname;
  
  // Get the token from the request
  const token = await getToken({ 
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // Create full URLs for redirects
  const loginUrl = new URL('/login', req.url);
  const dashboardUrl = new URL('/dashboard', req.url);

  // Define public paths that don't require authentication
  const isPublicPath = path === '/login' || path === '/register';
  
  // If the user is logged in and trying to access login page
  if (token && isPublicPath) {
    return NextResponse.redirect(dashboardUrl);
  }

  // If the user is not logged in and trying to access protected route
  if (!token && !isPublicPath) {
    // Store the original path to redirect back after login
    loginUrl.searchParams.set('callbackUrl', path);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// Update the matcher configuration
export const config = {
  matcher: [
    '/login',
    '/register',
    '/dashboard',
    '/dashboard/:path*'
  ]
};
