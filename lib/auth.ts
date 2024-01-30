import NextAuth, { NextAuthConfig } from "next-auth";
import { authOptions } from "./auth.config";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authOptions,
  callbacks: {
    jwt({ token, profile, account }) {
      if (account?.provider === "google" && profile) {
        token.fullname = profile?.name;
        token.image = profile?.picture;
        token.email = profile?.email;
        token.role = {
          name: "Google User",
          permissions: ["Read Dosen"],
        };
      }

      if (account?.provider === "github" && profile) {
        token.fullname = profile?.name;
        token.image = profile?.picture;
        token.email = profile?.email;
        token.role = {
          name: "Github User",
          permissions: ["Read Dosen"],
        };
      }
      return token;
    },

    //@ts-ignore
    session({ session, token }) {
      session.user = token;
      return session;
    },
  },
} satisfies NextAuthConfig);
