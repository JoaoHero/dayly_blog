'use server'

import { authOptions } from "@/app/lib/auth";
import { db } from "@/app/lib/prisma"
import { getServerSession } from "next-auth";

export default async function like(blogID: string) {

    const session = await getServerSession(authOptions)
    
    if(!session) {
        return { success: false, message: 'Necessário estar logado' };
    }

    const likes = await db.like.findMany({
        where: {
            userId: String(session.user.githubProfile.id),
            blogId: blogID
        }
    })

    if(likes.length > 0) {
        await db.like.delete({
            where: {
                id: likes[0].id
            }
        })

        return { success: true, message: 'Like removido' };
    }

    await db.like.create({
        data: {
            userId: String(session.user.githubProfile.id),
            blogId: blogID,
            userName: String(session.user.githubProfile.name),
            userImg: session.user.githubProfile.avatar_url
        }
    })

    return { success: true, message: 'Blog curtido!' };
}

export async function VerifyLike(blogID: string) {

    const session = await getServerSession(authOptions)
    
    if(!session) {
        return { success: false, message: 'Necessário estar logado' };
    }

    const likes = await db.like.findMany({
        where: {
            userId: String(session.user.githubProfile.id),
            blogId: blogID
        }
    })

    if(likes.length > 0) {
        return { success: true, message: 'Post já curtido!' };
    }

    return { success: true, message: 'Post sem curtida' };
}