'use server'

import { db } from "@/app/lib/prisma";
import { hashSync } from "bcrypt-ts";

export default async function register(FormData: FormData) {
    const name = FormData.get("name") as string;
    const email = FormData.get("email") as string;
    const password = FormData.get("password") as string;

    if(!name || !email || !password) {
        return { success: false, message: 'Necessário preencher todos os campos.' };
    }

    const user = await db.user.findUnique({
        where: {
            email: email
        }
    })

    if(user) {
        return { success: false, message: 'Email já cadastrado.' };
    }

    await db.user.create({
        data: {
            name: name,
            email: email,
            password: hashSync(password)
        }
    })

    return { success: true, message: 'Registrado com sucesso.' };
}