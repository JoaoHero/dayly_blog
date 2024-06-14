'use client'

import { useState } from "react"
import comment from "@/app/posts/_actions/comments"

import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

interface CommentsProps {
    blogID: string
}

export default function AddComment({ blogID }: CommentsProps) {
    const [display, setDisplay] = useState('hidden');
    const [loading, setLoading] = useState("Enviar")

    async function handleClick() {
        await setDisplay("block")
        
        return window.scroll(0, document.documentElement.scrollHeight)
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading("Enviando...")

        const formData = new FormData(event.currentTarget);
    
        const result = await comment(formData, blogID);

        if (result.success) {
            toast.success(result.message, { position: "top-right" });
            setLoading("Enviado")

            return setTimeout(() => {
                setLoading("Enviar")
                return window.location.reload();
              }, 3000)

        }else if (result.message === "Necessário estar logado") {
            setLoading("Enviar")
            toast.error(result.message, { position: "top-right" });

            return setTimeout(() => {
                return window.location.href = "/login";
              }, 2000)

        }else {
            setLoading("Enviar")
            toast.error(result.message, { position: "top-right" });
        }
    }

    return (
        <section>
            <div className={`mt-[3rem] ${display}`}>
                <h2 className="text-[1.5rem] text-[--color-primary]">Deixe uma resposta</h2>

                <form onSubmit={handleSubmit} className="mt-5 mb-[5rem] flex flex-col items-center">
                    <textarea name="comment" id="comment" placeholder="Comentário*" required className="p-3 text-[black] w-full h-[10rem] border-2 border-[--color-dark-400] outline-none resize-none" />

                    <button
                        type="submit"
                        className="mt-10 w-[18rem] p-3 rounded-lg bg-[#673DE6] hover:bg-[white] transition-colors duration-500 hover:text-[black] hover:font-bold"
                        disabled={loading !== 'Enviar'}
                        >
                            {loading}
                    </button>
                </form>

                <ToastContainer />
            </div>

            <button onClick={handleClick} className="text-[--color-primary] border border-[--color-primary] p-2 rounded-xl font-bold hover:bg-[white] transition-colors duration-500 absolute top-0 right-0">Comentar</button>
        </section>
    )
}
