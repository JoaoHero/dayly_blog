import { AuthOptions, Session } from 'next-auth'
import  GithubProvider from 'next-auth/providers/github'
import { GithubProfile } from 'next-auth/providers/github'
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from 'next-auth/jwt';
import { db } from './prisma';
import { compareSync } from 'bcrypt-ts';

export const authOptions: AuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
            profile(profile: GithubProfile) {
                return {
                    id: profile.id.toString(),
                    name: profile.name,
                    email: profile.email,
                    image: profile.avatar_url,
                    gitHubProfile: profile
                }
            }
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const email = credentials?.email
                const password = credentials?.password

                if(!email || !password) {
                    return null
                }

                const user = await db.user.findUnique({
                    where: {
                        email: email
                    }
                })

                if(!user) {
                    return null
                }

                const matches = compareSync(password, user.password ?? '')

                if(matches) {
                    return {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        image: user.img
                    }
                }

            },
        }),
    ],
    callbacks: {
        async jwt({ token, account, profile}) {
            if(account) {
                token.gitHubProfile = profile as GithubProfile
            }

            return token
        },
        async session({ session, token }: {session: Session, token: JWT}) {
            session.user.githubProfile = token.gitHubProfile as GithubProfile;
            return session;
        }
    }
}