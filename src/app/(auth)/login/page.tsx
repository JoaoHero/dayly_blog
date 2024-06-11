import Image from "next/image"

import 'react-toastify/dist/ReactToastify.css'
import LoginGitHubButton from "@/app/(auth)/login/components/LoginGitHubButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import { redirect } from "next/navigation";

export default async function Login() {
    const session = await getServerSession(authOptions);
    
    if(session) {
        redirect("/")
    }

    return (
        <div className="h-[calc(100vh-52px)] flex items-center justify-center overflow-hidden">
            <main className="max-w-[800px] mx-auto flex flex-col items-center justify-center w-full bg-[--color-dark-200] border-2 border-[--color-dark-400] pt-[5rem] pb-[5rem] rounded-lg ">

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

                <div className="w-full flex items-center justify-center mt-[3rem]">
                    <LoginGitHubButton />
                </div>
                

            </main>
        </div>
    )
}