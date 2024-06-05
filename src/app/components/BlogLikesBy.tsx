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
}

export default function BlogLikesBy({ quantLikes, likes }: BlogLikesByProps) {

    const [mostrarDiv, setMostrarDiv ]: any = useState(false)

    return (
        <div className="relative" onMouseEnter={() => setMostrarDiv(true)} onMouseLeave={() => setMostrarDiv(false)}>
            <p>{quantLikes}</p>

            <div className={`${mostrarDiv ? 'flex' : 'hidden'} h-[10rem] w-[10rem] bg-[--color-dark] absolute top-[-12rem] left-[-5rem] rounded-lg items-center justify-center gap-3 flex-col border-2 border-[--color-dark-400]`}>
                {likes.map((likes) => (
                    <div key={likes.id} className="flex gap-3 items-center justify-center">
                        <Image 
                            src={"https://avatars.githubusercontent.com/u/101435425?v=4"}
                            alt="Icone do gitHub do Usuário"
                            width={30} 
                            height={30}
                            sizes="100vw"
                            priority={true}
                            className="rounded-full"
                        />

                        <p>{likes.userId}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}