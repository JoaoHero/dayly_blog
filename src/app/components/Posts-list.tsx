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
        }
    })

    // console.log(posts[1].likes.length)

    // const likes = await db.like.findUnique({
    //     where: {
    //         id: posts[1].id
    //     }
    // })

    // console.log(likes)

    // console.log(posts[1].likes.length)
    // const likeId: string = posts[1].likes[0].id

    return (
        <div className="flex flex-col gap-5 p-10">
            {posts.map((post) => (
                <>
                    <PostsItem id={post.id} title={post.title} shortDescription={post.shortDescription} tag={post.tag} />
                </>
            ))}
        </div>
    )
}