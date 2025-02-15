import 'next-auth'

declare module 'next-auth' {
  interface User {
    allowedRoute?: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    allowedRoute?: string
  }
}
