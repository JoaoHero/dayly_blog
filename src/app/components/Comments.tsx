import { db } from "../lib/prisma"

import Image from "next/image"

interface CommentsProps {
    blogID: string
}

export default async function Comments({ blogID }: CommentsProps) {

    const comments = await db.comment.findMany({
        where: {
            blogId: blogID
        }
    })

    return (
        <section className="flex flex-col gap-10 w-full p-[3rem]">
            {comments.map((comments) => (
                <div className="">
                    <div className="flex items-center gap-3">
                            <Image 
                                src={`${comments.userImg}`}
                                alt="Imagem do usuário"
                                width={60}
                                height={60}
                                priority={true}
                                sizes="100vw"
                                className="rounded-full"
                            />

                        <div className="w-full flex flex-col">
                            <p className="text-[--color-primary] text-[1.2rem]">{comments.userName}</p>
                        </div>
                    </div>

                    <div className="mt-3 ml-[1rem]">
                        <p>{comments.content}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}