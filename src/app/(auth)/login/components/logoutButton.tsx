'use client'

import Image from "next/image"
import { signOut } from "next-auth/react"

export default function LogoutButton() {
    function handleClick() {
        signOut()
    }

    return(
        <div className="absolute top-0 right-1">
            <button onClick={handleClick}>
                <Image src={"/images/logout.png"} alt="Imagem de logout" height={40} width={40} />
            </button> 
        </div>
    )
}