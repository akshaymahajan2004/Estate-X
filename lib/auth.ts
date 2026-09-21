import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email) return null;
        
        // Demo credentials check for testing
        if (credentials.email === "admin@estatex.luxury" && credentials.password === "admin123") {
          return {
            id: "user-admin",
            name: "Alexander Vance (Admin)",
            email: "admin@estatex.luxury",
            role: "ADMIN",
          };
        }

        if (credentials.email === "user@estatex.luxury") {
          return {
            id: "user-client",
            name: "Genevieve Rothschild",
            email: "user@estatex.luxury",
            role: "USER",
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role || "USER";
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/admin",
  },
  secret: process.env.NEXTAUTH_SECRET || "estatex-luxury-secret-key-2026-super-secure",
});
