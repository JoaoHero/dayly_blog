import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full flex items-center justify-center mt-5 pl-8 sm:justify-between">
            <div className="w-[150px] hidden sm:flex">
                <Link href={"/"}>
                    <Image 
                        src="/images/logoText.png" 
                        alt="Imagem logo do site" 
                        width={0}
                        height={0}
                        sizes="100vw"
                        priority={true}
                        className="w-full h-auto"
                    />
                </Link>
            </div>

            <ul className="flex gap-3 pr-8 text-[1.2rem] text-[--color-white-200]">
                <li className="hover:text-[--color-primary] transition-colors duration-500"><Link href={"/"}>Inicio</Link></li>
                <li className="hover:text-[--color-primary] transition-colors duration-500"><Link href={"/"}>Sobre</Link></li>
                <li className="hover:text-[--color-primary] transition-colors duration-500"><Link href={"/login"}>Login</Link></li>
                <li><Link href={`/myProfile`}><span className="text-[--color-primary]">&lt;/<span className="text-[--color-white-200] hover:text-[--color-primary] transition-colors duration-500">Profile</span>&gt;</span></Link></li>
            </ul>
        </nav>
    )
}