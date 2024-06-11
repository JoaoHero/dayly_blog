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
        <section className="max-w-[1200px] mx-auto flex flex-col gap-10 relative">
          <Link href={`/posts/${id}`} key={id}>
              <div  className="w-full border-2 border-[--color-dark-400] bg-[--color-dark-200] hover:bg-[--color-dark-100] transition-colors duration-500 p-4">
                <h2 className="text-xl text-white font-bold">{title}</h2>
                <p className="text-[--color-white-200] mt-5 text-justify">{shortDescription}</p>
                <p className="text-[1.2rem] uppercase text-[--color-primary] text-justify flex mt-5">{tag}</p>
              </div>
            </Link>

            <div className="flex items-end justify-between h-[5rem] absolute bottom-5 right-5 cursor-pointer">
                <BlogLikes blogId={id} />
            </div>
        </section>
    )
}