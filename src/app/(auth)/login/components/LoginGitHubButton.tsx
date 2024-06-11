'use client'

import Image from "next/image"
import { signIn } from "next-auth/react"

export default function LoginGitHubButton() {

    function handleClick() {
        signIn('github')
    }
    
    return (
        <div  className="w-full sm:w-[50%] flex flex-col p-5">
            <button onClick={handleClick} className=" text-[--color-dark-200] font-bold flex items-center justify-center gap-3 bg-gradient-to-r from-[#A9A5FD] to-[#EBD75D] h-[3rem] rounded-lg p-3 w-full"><Image src={"/images/icons8-github-50.png"} alt="Icone de seta no botao de login" width={30} height={30} />Logar na sua conta GitHub</button>
        </div>
    )
}