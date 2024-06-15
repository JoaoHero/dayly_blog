'use client'

import { useState } from "react";
import Image from "next/image";

interface BlogLikesByProps {
    likes: Likes[]
}

interface Likes {
    id: string,
    userId: string,
    createdAt: Date,
    userName: string,
    userImg: string,
    blogId: string
}

export default function BlogLikesBy({ likes }: BlogLikesByProps) {

    const [isModalVisible, setIsModalVisible] = useState('hidden');

    const showModal = () => {
      if(isModalVisible === "hidden") {
        setIsModalVisible("")
      }else {
        setIsModalVisible("hidden")
      }
    };

    return (
        <div>
            <div className={`z-10 w-full sm:w-[30rem] h-[20rem] overflow-auto border-2 border-[--color-dark-400] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[--color-dark-200] rounded-xl ${isModalVisible} cursor-default`}>
                <p onClick={showModal} className="absolute right-5 top-3 cursor-pointer">X</p>

                <div className="mt-[2rem] mb-[2rem] flex flex-col gap-4 items-center justify-center">
                    <h2 className="text-[--color-primary] mb-[1rem]">Lista de curtidas</h2>

                    {likes.map((element) => (
                        <div key={element.id} className="flex gap-3 items-center text-center">
                            <Image src={element.userImg} alt="Imagem do usuário" width={40} height={40} sizes="100vw" className="rounded-full" />
                            <p>{element.userName}</p>
                        </div>
                    ))}
                </div>

            </div>

            <p onClick={showModal} className="text-[13px] text-[--color-primary] underline">Curtidas</p>
        </div>

    )
}