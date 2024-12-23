import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Password',
      credentials: {
        password: { label: '', type: 'password' },
      },
      async authorize(credentials, req) {
        if (credentials?.password === 'chagi') {
          const user = { id: '1', name: 'User' }
          return user
        }

        return null
      },
    }),
  ],
})

export { handler as GET, handler as POST }
