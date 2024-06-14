'use client'

import Image from "next/image"
import like, { VerifyLike } from "../_actions/like"
import { useEffect, useState } from "react"

import 'react-toastify/dist/ReactToastify.css'

interface addLikeProps {
    blogID: string
}


export default function AddLike({ blogID }: addLikeProps) {

    const [likeImage, setLikeImage] = useState("like-icon-disable.png")
    const [phrase, setPhrase] = useState("Curtir")

    useEffect(() => {
        const fetchData = async () => {
            const result = await VerifyLike(blogID)

            if(result.message === "Post já curtido!") {
                setPhrase("Já curtido!")
                return setLikeImage("like-icon-liked.png")
            }

            setPhrase("Curtir")
            return setLikeImage("like-icon-disable.png")
        }

        fetchData();
    },[])

    async function handleClick() {
        const result = await like(blogID)

        if (result.success) {
            if(result.message === "Blog curtido!") {
                setPhrase("Já curtido!")
                return setLikeImage("like-icon-liked.png")
            }

            setPhrase("Curtir")
            return setLikeImage("like-icon-disable.png")

        } else {
            setLikeImage("like-icon-disable.png")

            return window.location.href = "/login";
        }
    }

    return (
        <div className="flex gap-2 mt-3">
            <p>{phrase}</p>

            <div onClick={handleClick} className="cursor-pointer">
                
                <Image 
                    src={`/images/${likeImage}`} 
                    alt="Icone de curtir o post" 
                    width={25} 
                    height={25}
                />
            </div>
        </div>
    )
}