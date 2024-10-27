import type { NextAuthOptions } from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';

declare module 'next-auth' {
  interface Session {
    accessToken?: string;
  }
}

if (!process.env.CLIENT_ID || !process.env.CLIENT_SECRET || !process.env.NEXTAUTH_SECRET) {
  throw new Error('Missing environment variables for authentication');
}

export const options: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    DiscordProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      authorization: { params: { scope: 'identify email guilds guilds.join' } }, // Add required scopes
    }),
  ],
  pages: {
    signIn: '/login?redirect=true',
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account?.access_token) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.accessToken) {
        session.accessToken = token.accessToken as string;
      }
      return session;
    },
  },
}
