import { db } from "../lib/prisma"

import Image from "next/image"

interface CommentsProps {
    blogID: string
}

export default async function Comments({ blogID }: CommentsProps) {

    const comments = await db.comment.findMany({
        where: {
            blogId: blogID
        },
        include: {
            author: true
        }
    })

    return (
        <section className="flex flex-col gap-10 w-full p-[3rem]">
            {comments.map((comments) => (
                <div className="">
                    <div className="flex items-center gap-3">
                        <Image 
                            src={`${comments.author.img}`}
                            alt="Imagem do usuário"
                            width={30}
                            height={30}
                            priority={true}
                            className="rounded-full"
                        />

                        <div className="w-full flex flex-col">
                            <p className="text-[--color-primary]">{comments.author.name}</p>
                        </div>
                    </div>

                    <div className="mt-3">
                        <p>{comments.content}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}