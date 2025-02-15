import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const pagePasswords: Record<string, string> = {
  '/private/ujo-uvsot-24': 'chagi',
  '/blog/algorithmic-trading/*': 'stonks',
}

const getPasswordForRoute = (requestUrl: string): string | null => {
  for (const [route, password] of Object.entries(pagePasswords)) {
    if (route.includes('*') && requestUrl.startsWith(route.replace('/*', ''))) {
      return password
    }
    if (requestUrl.includes(route)) {
      return password
    }
  }
  return null
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Password',
      credentials: {
        password: { label: '', type: 'password' },
      },
      async authorize(credentials, req) {
        const callbackUrl =
          new URL(req.headers?.referer || '').searchParams.get('callbackUrl') || null

        if (callbackUrl === null) {
          return null
        }

        const expectedPassword = getPasswordForRoute(callbackUrl)

        if (expectedPassword === null) {
          return null
        }

        if (credentials?.password === expectedPassword) {
          const user = { id: '1', name: 'User' }
          return user
        }

        return null
      },
    }),
  ],
})

export { handler as GET, handler as POST }
