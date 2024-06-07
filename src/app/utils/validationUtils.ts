'use server'

function validateEmail(email: string) {
    // Validando se o e-mail segue o padrão correto
    const re = /\S+@\S+\.\S+/;

        // Caso encontre o padrão de e-mail correto
        if(re.test(email) === true) {

            const result = {
                error: false,
                message: "Email validado"
            }

            // Parar o processamento e retornar um código de sucesso
            return result

        }else {

            const result = {
                error: true,
                message: "Email Invalido!"
            }

            return result
        };
}

function validatePassword(password: string) {
    const regex = {
        length: /^.{8,}$/,
        uppercase: /[A-Z]/,
        lowercase: /[a-z]/,
        digit: /\d/,
        sequence: /123|234|345|456|567|678|789|012/
    };

    if (!regex.length.test(password)) {
        return { error: true, message: "Necessário ter 8 caracteres" };
    }
    if (!regex.uppercase.test(password)) {
        return { error: true, message: "Precisa ter pelo menos uma letra maiúscula" };
    }
    if (!regex.lowercase.test(password)) {
        return { error: true, message: "Precisa ter pelo menos uma letra minúscula" };
    }
    if (!regex.digit.test(password)) {
        return { error: true, message: "Precisa ter pelo menos um número" };
    }
    if (regex.sequence.test(password)) {
        return { error: true, message: "Não é permitido números em sequências" };
    }

    return { error: false, message: "Senha validada!" };
}

export {
    validateEmail,
    validatePassword
}