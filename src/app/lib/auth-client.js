import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    
    baseURL: "https://b13-a8-platfoprm-1597.vercel.app/"
})

export const { signIn, signUp, useSession } = createAuthClient()



