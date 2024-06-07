'use server'

import { db } from "@/app/lib/prisma";
import { compareSync } from "bcrypt-ts";
import { redirect } from "next/navigation";

export default async function login(formData: FormData) {
    const { email, password } = Object.fromEntries(formData.entries());

    if(!email || !password) {
        return { success: false, message: 'Necessário preencher todos os campos' };
    }

    const user = await db.user.findUnique({
        where: {
            email: email as string
        }
    })

    if(!user) {
        return { success: false, message: 'Email ou senha inválidos.' };
    }

    const passwordMatch = compareSync(password as string, user.password ?? '');

    if(!passwordMatch) {
        return { success: false, message: 'Email ou senha inválidos.' };
    }

    return { success: true, message: 'Login bem-sucedido.' };
}