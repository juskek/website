import { withAuth } from 'next-auth/middleware'

export default withAuth({
  callbacks: {
    authorized: ({ req, token }) => {
      if (!token?.allowedRoute) return false

      const currentPath = req.nextUrl.pathname

      return currentPath.startsWith(token.allowedRoute.replace('/*', ''))
    },
  },
})

export const config = {
  matcher: ['/blog/hidden', '/blog/algorithmic-trading/:path*', '/private/ujo-uvsot-24'],
}
