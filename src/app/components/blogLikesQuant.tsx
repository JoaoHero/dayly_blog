'use client'

import { useState } from "react"
import BlogLikesBy from "./BlogLikesBy"

interface BlogLikesQuantProps {
    likesQuant: number
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

export default function BlogLikesQuant({ likesQuant, likes }: BlogLikesQuantProps) {



    return (
      <>
        <div>
          <p>{likesQuant}</p>
        </div>

        <div>
          <BlogLikesBy likes={likes} />
        </div>
      </>

    )
}