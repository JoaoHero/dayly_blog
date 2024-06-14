'use server'

import { authOptions } from "@/app/lib/auth";
import { db } from "@/app/lib/prisma";
import { getServerSession } from "next-auth";

export default async function comments(FormData: FormData, blogID: string) {

    const session = await getServerSession(authOptions)

    if(!session) {
        return { success: false, message: 'Necessário estar logado' };
    }

    const comment = FormData.get("comment") as string;

    if(!comment) {
        return { success: false, message: 'Necessário preencher todos os campos.' };
    }

    await db.comment.create({
        data: {
            content: comment,
            authorId: String(session.user.githubProfile.id),
            blogId: blogID
        }
    })

    return { success: true, message: 'Comentário adicionado.' };
}