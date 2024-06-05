import Image from "next/image"
import Link from "next/link"

export default function Login() {
    return (
        <>
            <main className="max-w-[800px] mx-auto flex flex-col items-center justify-center">
                <div className="w-full flex flex-col p-10 mt-[8rem] items-center justify-center">
                    <h1 className="text-[--color-white] font-bold text-2xl">Logue na sua conta</h1>

                    <p className="text-[--color-white] mt-5 text-center">Acompanhe e ajude meu desenvolvimento, curtindo e comentando</p>
                </div>

                <div className="w-full flex">
                    <div className="w-[50%] flex flex-col">
                        <form className="p-5 flex flex-col items-center" action="">
                            <input className="bg-[#535253] h-[3.2rem] w-full rounded-lg mb-5 p-4" type="text" placeholder="Email / Phone number" />
                            <input className="bg-[#535253] h-[3.2rem] w-full rounded-lg mb-5 p-4" type="password" placeholder="Minimo 6 digitos" />

                            <button className="text-[--color-dark-200] font-bold flex items-center justify-center gap-3 bg-gradient-to-r from-[#A9A5FD] to-[#EBD75D] h-[3rem] rounded-lg p-3 w-full">Logar na sua conta <Image src={"/images/arrow-Button.png"} alt="Icone de seta no botao de login" width={25} height={25} /></button>
                            <p className="pt-3 text-[--color-white-200]">Não tem conta? <span className="text-[--color-white] font-bold"><Link href={"/register"}>Cadastre-se agora</Link></span></p>
                        </form>
                    </div>

                    <div className="flex items-center">
                        <Image 
                            src={"/images/login-divisor.png"} 
                            alt="Imagem do divisor entre login e-mail e senha e oAuth"
                            width={20} 
                            height={5}
                            sizes="100vw"
                            priority={true}
                            className="w-full h-auto"
                        />
                    </div>

                    <div className="w-[50%] flex flex-col">
                        <form className="p-5 flex flex-col gap-5" action="">
                            <button className="text-[--color-dark-200] font-bold flex items-center justify-center gap-3 bg-gradient-to-r from-[#A9A5FD] to-[#EBD75D] h-[3rem] rounded-lg p-3 w-full"><Image src={"/images/icons8-github-50.png"} alt="Icone de seta no botao de login" width={25} height={25} />Logar na sua conta GitHub</button>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}