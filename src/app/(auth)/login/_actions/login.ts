'use server'

import { db } from "@/app/lib/prisma";
import { compareSync } from "bcrypt-ts";
const jwt = require('jsonwebtoken');

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

    const tokenPayload = {
        userId: user.id,
        name: user.name,
        userImg: user.img
    };

    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, { expiresIn: '1h' });

    return { success: true, message: 'Login bem-sucedido.', token };
}