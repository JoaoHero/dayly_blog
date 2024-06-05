import Image from "next/image";
import { db } from "../lib/prisma";
import BlogLikesBy from "./BlogLikesBy";

interface BlogLikesProps {
    blogId: string,
}

export default async function BlogLikes({ blogId }: BlogLikesProps) {

    const likes = await db.like.findMany({
        where: {
            blogId: blogId
        }
    })

    return (
        <div className="flex items-center gap-3">
            <Image src={"/images/like-icon.png"} alt="Icone de curtidas dos posts" width={25} height={25} />

            <BlogLikesBy quantLikes={likes.length} likes={likes} />
        </div>
    )
}