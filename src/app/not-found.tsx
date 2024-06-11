import Image from "next/image"
import Link from "next/link"

export default function NotFound() {
    return (
        <main className="max-w-[800px] mx-auto">
            <div className="p-10 w-full h-[calc(100vh-52px)] flex-wrap flex items-center justify-center">
                <div className="w-[100%] sm:w-[50%] flex flex-col items-center justify-center">
                    <h1 className="text-[2rem] sm:text-[3rem]">Erro - 404</h1>

                    <h2 className="text-[1.5rem] sm:text-[2rem] text-center">Página não encontrada</h2>

                    <p className="text-[--color-white-200] mt-2 text-center">Acabou se perdendo... Não se preocupe</p>

                    <Link href={"/"} className="border border-[--color-primary] p-2 rounded-lg mt-10 hover:bg-[--color-dark-100] transition-colors duration-500">Voltar para Home</Link>
                </div>

                <div className="w-[50%] relative">
                    <div className="w-full h-full">
                        <Image 
                            src={"/images/Ellipse 33.png"} 
                            alt="Imagem fundo da pagina de não encontrado" 
                            width={0} 
                            height={0} 
                            sizes="100vw"
                            priority={true}
                            className="w-full h-auto"
                        />
                    </div>

                    <div className="w-full h-full absolute top-0">
                        <Image 
                            src={"/images/Astroneer.png"} 
                            alt="Imagem fundo da pagina de não encontrado" 
                            width={0} 
                            height={0} 
                            sizes="100vw"
                            priority={true}
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}