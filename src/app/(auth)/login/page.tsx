'use client'

import Image from "next/image"
import Link from "next/link"
import login from "./_actions/login"
const Cookies = require('js-cookie');
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export default function Login() {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        
        const result = await login(formData);

        if (result.success) {
            Cookies.set('Session', result.token, { expires: 1, path: '/', httpOnly: true, secure: true, sameSite: 'strict' });

            toast.success(result.message, { position: "top-right" });

            return setTimeout(() => {
                window.location.href = "/";
            }, 3000)

        } else {
            toast.error(result.message, { position: "top-right" });
        }
    };

    return (
        <div className="h-[calc(100vh-52px)] flex items-center justify-center overflow-hidden">
            <main className="max-w-[800px] mx-auto flex flex-col items-center justify-center w-full">

                <div className="sm:hidden sm:mx-auto sm:w-full sm:max-w-sm mt-4">
                    <img
                        className=" mx-auto h-10 w-auto "
                        src="/images/logoText.png"
                        alt="Your Company"
                    />
                </div>

                <div className="w-full flex flex-col items-center">
                    <h1 className="text-[--color-white] font-bold text-2xl">Logue na sua conta</h1>

                    <p className="text-[--color-white] mt-5 text-center">Acompanhe e ajude meu desenvolvimento, curtindo e comentando</p>
                </div>

                <div className="w-full flex flex-wrap sm:flex-nowrap">
                    <div className="w-full sm:w-[50%] flex flex-col">
                        <form action={login} className="p-5 flex flex-col items-center" onSubmit={handleSubmit}>
                            <input className="bg-[#535253] h-[3.2rem] w-full rounded-lg mb-5 p-4" name="email" type="text" placeholder="Email / Phone number" />
                            <input className="bg-[#535253] h-[3.2rem] w-full rounded-lg mb-5 p-4" name="password" type="password" placeholder="Minimo 6 digitos" />

                            <button className="text-[--color-dark-200] font-bold flex items-center justify-center gap-3 bg-gradient-to-r from-[#A9A5FD] to-[#EBD75D] h-[3rem] rounded-lg p-3 w-full">Logar na sua conta<Image src={"/images/arrow-Button.png"} alt="Icone de seta no botao de login" width={28} height={22} /></button>
                            <p className="pt-3 text-[--color-white-200]">Não tem conta? <span className="text-[--color-white] font-bold hover:text-[#A9A5FD] transition-colors duration-500"><Link href={"/register"}>Cadastre-se agora</Link></span></p>
                        </form>
                        
                        <ToastContainer />
                    </div>

                    <div className="flex items-center justify-center w-full sm:w-auto ">
                        <Image 
                            src={"/images/login-divisor.png"} 
                            alt="Imagem do divisor entre login e-mail e senha e oAuth"
                            width={24} 
                            height={42}
                            // sizes="100vw"
                            priority={true}
                            // className="w-full h-auto"
                        />
                    </div>

                    <div className="w-full sm:w-[50%] flex flex-col">
                        <form className="p-5 flex flex-col gap-5" action="">
                            <button className="text-[--color-dark-200] font-bold flex items-center justify-center gap-3 bg-gradient-to-r from-[#A9A5FD] to-[#EBD75D] h-[3rem] rounded-lg p-3 w-full"><Image src={"/images/icons8-github-50.png"} alt="Icone de seta no botao de login" width={30} height={30} />Logar na sua conta GitHub</button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}