import { authOptions } from "@/app/lib/auth"
import { getServerSession } from "next-auth"
import Image from "next/image"
import { redirect } from "next/navigation"
import LogoutButton from "../(auth)/login/components/logoutButton"


export default async function Profile() {
    const session = await getServerSession(authOptions);

    if(!session) {
        redirect("/login")
    }

    const user = session.user

    return (
        <main className="max-w-[800px] mx-auto p-2">
            <div className="w-full border mt-[5rem] gap-3 items-center justify-around rounded-sm relative flex flex-wrap sm:flex-nowrap sm:justify-around  ">

                <LogoutButton />

                <div className="flex items-center justify-center w-full sm:w-[10rem] p-2">
                    <div className="w-[7rem] h-[7rem] rounded-full overflow-hidden">
                        <Image src={`${user?.githubProfile.avatar_url}`} alt="Imagem de perfil" width={0} height={0} sizes="100vw" priority={true} className="w-full h-auto" />
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <h2>{user?.name}</h2>
                    <p className="mt-1 text-[--color-white-200]">{user.githubProfile.login}</p>
                </div>

                <div className="flex flex-col items-center">
                    <h2>Repositórios</h2>
                    <p className="mt-1">{user.githubProfile.public_repos}</p>
                </div>

                <div className="flex flex-col items-center">
                    <h2>Total Gits</h2>
                    <p className="mt-1">{user?.githubProfile.public_gists}</p>
                </div>
            </div>

            <div className="mt-[1rem]">
                <h2 className="text-[--color-primary]">Informações:</h2>

                <div className="flex gap-3 mt-3">
                    <h3>Email:</h3>
                    <p>{user.email}</p>
                </div>

                <div className="flex gap-3 mt-3">
                    <h3>localização:</h3>
                    <p>{ user.githubProfile.location ? user.githubProfile.location : "Não informado"}</p>
                </div>

                <div className="flex gap-3 mt-3">
                    <h3>Seguidores:</h3>
                    <p>{user?.githubProfile.followers}</p>
                </div>

                <div className="flex gap-3 mt-3">
                    <h3>Seguindo:</h3>
                    <p>{user?.githubProfile.following}</p>
                </div>
            </div>

            <div className="mt-[3rem]">
                <h2 className="text-[--color-primary]">Biografia:</h2>

                <p className="mt-5 text-justify">{user?.githubProfile.bio ? user?.githubProfile.bio : "Não informado"}</p>
            </div>
        </main>
    )
}