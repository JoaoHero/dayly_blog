import { db } from "@/app/lib/prisma"

import Image from "next/image"
import Comments from "@/app/components/Comments"
import AddComment from "../components/addComment"
import AddLike from "../components/addLike"

interface PostsProps {
    params: {
        id: string
    }
}

export default async function Posts({ params: {id} }: PostsProps) {

    const post = await db.blog.findUnique({
        where: {
            id: id
        },
        include: {
            comments: true
        }
    })

    return (
        <main className="max-w-[800px] mx-auto p-3 sm:p-10 flex flex-col">
            <h1 className="mt-[2rem] text-[--color-primary] text-[2rem] font-bold text-center">{post?.title}</h1>

            <p className="mt-[3rem] text-justify text-[--color-white-100]">{post?.fullDescription}</p>

            <div className="w-full h-[20rem] border mt-[3rem] relative">
                <Image 
                    src={`${post?.imageUrl}`} 
                    alt="Imagem ilustrativa HTML" 
                    width={0}
                    height={0} 
                    fill
                    priority={true}
                    sizes="100vw"
                    style={{objectFit:"cover"}}
                    className="w-full h-full"
                />
            </div>

            <AddLike blogID={id} />

            <div className="mt-[5rem] relative">
                <div className="w-full flex justify-between">
                    <h2 className="text-[1.5rem]">Comentários</h2>
                </div>

                <div className="w-full min-h-[10rem] mt-[3rem] border-2 border-[--color-dark-400] flex flex-col items-center justify-center gap-[1rem]">
                    <Comments blogID={id} />
                </div>


                <AddComment blogID={id} />
            </div>
        </main>
    )
}