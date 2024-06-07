'use client'

import { useState } from "react"
import Image from "next/image"

interface BlogLikesByProps {
    quantLikes: number;
    likes: Like[];
}

interface Like {
    id: string;
    userId: string;
    user: {
        name: string | null;
        img: string | null;
    };
}

export default function BlogLikesBy({ quantLikes, likes }: BlogLikesByProps) {

    const [mostrarDiv, setMostrarDiv]: any = useState(false)

    let noLikeWarning = ""
    if (likes.length === 0) {
        noLikeWarning = "Seja o primeiro a curtir :)"
    }

    function handleClick() {
        console.log("Clicou");
    }

    return (
        <div className="relative" onMouseEnter={() => setMostrarDiv(true)} onMouseLeave={() => setMostrarDiv(false)} onClick={handleClick}>
            <p>{quantLikes}</p>

            {noLikeWarning && (
                <div className={`${mostrarDiv ? 'flex' : 'hidden'} flex z-10 h-[10rem] bg-[--color-dark] absolute top-[-12rem] left-[-9rem] rounded-lg gap-3 flex-col border-2 border-[--color-dark-400]`}>
                    <p className="h-full text-center w-[10rem] items-center flex">{noLikeWarning}</p>
                </div>
            )}

            <div className={`${mostrarDiv ? 'flex' : 'hidden'} h-[10rem] p-[3rem] bg-[--color-dark] absolute top-[-12rem] left-[-8rem] rounded-lg items-center justify-center gap-3 flex-col border-2 border-[--color-dark-400]`}>

                {likes.map((likes) => (
                    <div key={likes.id} className="flex gap-3 items-center justify-center">
                        <Image 
                            src={`${likes.user.img}`}
                            alt="Icone do gitHub do Usuário"
                            width={30} 
                            height={30}
                            priority={true}
                            className="rounded-full"
                        />

                        <p>{likes.user.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}