import { db } from "../lib/prisma"
import PostsItem from "./Posts-Item"

export default async function PostsList() {

    const posts = await db.blog.findMany({
        include: {
            likes: {
                select: {
                    id: true
                }
            }
        },
        orderBy: {
            createdAt: "asc"
        }
    })

    return (
        <div className="flex flex-col gap-5 p-3 sm:p-10">
            {posts.map((post) => (
                <>
                    <PostsItem key={post.id} id={post.id} title={post.title} shortDescription={post.shortDescription} tag={post.tag} />
                </>
            ))}
        </div>
    )
}