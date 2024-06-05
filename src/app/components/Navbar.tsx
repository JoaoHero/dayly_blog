import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full flex items-center justify-between mt-5 pl-8">
            <div className="">
            <Link href={"/"}>
                <Image src="/images/logoText.png" alt="Imagem logo do site" width={150} height={0} priority={true} />
            </Link>
            </div>

            <ul className="flex gap-3 pr-8 text-[1.2rem] text-[--color-white-200]">
                <li className="hover:text-[--color-primary] transition-colors duration-500"><Link href={"/"}>Inicio</Link></li>
                <li className="hover:text-[--color-primary] transition-colors duration-500"><Link href={"/"}>Sobre</Link></li>
                <li className="hover:text-[--color-primary] transition-colors duration-500"><Link href={"/"}>Setup</Link></li>
                <li className="hover:text-[--color-primary] transition-colors duration-500"><Link href={"/"}>Login</Link></li>
            </ul>
        </nav>
    )
}