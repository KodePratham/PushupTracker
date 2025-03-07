import { withClerkMiddleware, getAuth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// Define public routes that don't require authentication
const publicPaths = ['/', '/sign-in*', '/sign-up*', '/api/clerk*'];

const isPublic = (path) => {
  return publicPaths.find(publicPath => {
    return path.match(new RegExp(`^${publicPath}$`.replace('*', '.*')));
  });
};

export default withClerkMiddleware((request) => {
  const { pathname } = request.nextUrl;
  
  // If the path is public or the user is authenticated, allow the request
  if (isPublic(pathname) || getAuth(request).userId) {
    return NextResponse.next();
  }

  // Redirect to sign-in if not authenticated and path is not public
  const signInUrl = new URL('/sign-in', request.url);
  signInUrl.searchParams.set('redirect_url', pathname);
  return NextResponse.redirect(signInUrl);
});

// Stop Middleware running on static files
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.png$).*)",
  ],
};
