import PostsList from "./components/Posts-list";

export default function Home() {
  return (
    <>
      <main className="max-w-[800px] mx-auto">
        <section className="max-w-[1200px] mx-auto p-3 sm:p-10">
          <h1 className="text-white font-bold text-2xl mt-5 mb-3">Olá, sou João Ramos 👋🏼</h1>
          <span className="text-[--color-white-200] font-bold">Zona Sul, São Paulo</span>
          <p className="text-white mt-5 text-justify">
            Olá! Sou um freelancer dedicado, atuando como Frontend Developer e UI Designer, 
            apaixonado por criar experiências digitais incríveis. Como estudante ávido nessas áreas, 
            estou constantemente aprimorando minhas habilidades e explorando novas tendências. 
            Este blog é meu espaço para compartilhar minha jornada de aprendizado com qualquer pessoa interessada em acompanhar. 
            Além disso, como um entusiasta do café, você pode esperar algumas postagens sobre minhas descobertas e experiências 
            com diferentes tipos de grãos e métodos de preparo. Junte-se a mim enquanto mergulho no mundo do desenvolvimento 
            front-end, design de interface e, é claro, apreciação de café!
          </p>
        </section>

        <PostsList />
      </main>
    </>
  );
}
