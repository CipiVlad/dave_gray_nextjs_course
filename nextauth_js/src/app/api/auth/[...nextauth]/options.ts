import type { NextAuthOptions } from "next-auth";
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "your username"
                },
            },
            async authorize(credentials) {
                //This is where you need to retrieve user data
                //to verify with credentials
                //Docs: https://next-auth.js.org/configurations/provider/credentials
                const user = { id: "42", name: "Johnny", password: "nextauth" }
            }
        })
    ],

}