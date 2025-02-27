import type { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'

const githubId = process.env.GITHUB_ID
const githubSecret = process.env.GITHUB_SECRET

const facebookId = process.env.FACEBOOK_ID
const facebookSecret = process.env.FACEBOOK_SECRET

const googleId = process.env.GOOGLE_ID2
const googleSecret = process.env.GOOGLE_SECRET

if (!githubId || !githubSecret) {
  throw new Error('Missing GitHub client ID or secret in environment variables')
}
if (!facebookId || !facebookSecret) {
  throw new Error('Missing Facebook client ID or secret in environment variables')
}
if (!googleId || !googleSecret) {
  throw new Error('Missing Google client ID or secret in environment variables')
}

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: githubId,
      clientSecret: githubSecret,
    }),
    FacebookProvider({
      clientId: facebookId,
      clientSecret: facebookSecret,
    }),
    GoogleProvider({
      clientId: googleId,
      clientSecret: googleSecret,
    }),
  ],
}
