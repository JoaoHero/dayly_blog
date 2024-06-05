import Link from "next/link"
import BlogLikes from "./BlogLikes"

interface PostsItemProps {
    id: string,
    title: string,
    shortDescription: string,
    tag: string
}

export default function PostsItem({ id, title, shortDescription, tag }: PostsItemProps ) {
    return (
        <section className="max-w-[1200px] mx-auto flex flex-col gap-10">
          <Link href={`/blogPosts/${id}`} key={id}>
              <div  className="w-full border-2 border-[--color-dark-400] bg-[--color-dark-200] hover:bg-[--color-dark-100] transition-colors duration-500 p-4">
                <h2 className="text-xl text-white font-bold">{title}</h2>
                <p className="text-[--color-white-200] mt-5 text-justify">{shortDescription}</p>

                <div className="flex items-end justify-between h-[5rem]">
                    <p className="text-[1.2rem] uppercase text-[--color-primary] text-justify flex">{tag}</p>
                    <BlogLikes blogId={id} />
                </div>
                
              </div>
          </Link>
        </section>
    )
}