import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

// export async function middleware(request: NextRequest) {
// 	const response = createMiddleware(routing);

// 	// A `response` can now be passed here
// 	return await updateSession(request, response);
// }

export const config = {
	matcher: [
		// Match all public routes except:
		// - API routes (/api/*)
		// - Next.js internal routes (/_next/*)
		// - Vercel internal routes (/_vercel/*)
		// - Files with extensions (e.g. /favicon.ico, /image.png)
		'/((?!api|_next|_vercel|.*\\..*).*)',

		// Additionally match all routes under /users
		// Examples:
		// - /users/profile
		// - /en/users/settings
		// - /fr/users/dashboard
		'/([\\w-]+)?/users/(.+)'
	]
};