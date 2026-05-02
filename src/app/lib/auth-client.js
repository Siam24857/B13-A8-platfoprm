import { createAuthClient } from "better-auth/react";

const baseURL =
  typeof window !== "undefined"
    ? "" // browser → same origin
    : process.env.BETTER_AUTH_URL; // server → full URL

export const authClient = createAuthClient({
  baseURL,
});

export const { signIn, signUp, useSession } = authClient;