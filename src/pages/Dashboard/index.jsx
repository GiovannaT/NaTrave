export const Dashboard = () => (
  <div className="">
    <header className="bg-red-500 text-white p-4">
      <div className="container max-w-3xl p-4 flex justify-between">
        <img
          src="src/assets/logo/logo-fundo-vermelho.svg"
          alt="NaTrave"
          className="w-28 md:w-40"
        />
        <a href="/profile" className="">
            <img src="src/assets/icones/profile.svg" alt="Profile" className="stroke-white w-15 md:w-10" />
          </a>
      </div>
    </header>
    <main>
      <section id="header" className="space-y-6 bg-red-500 text-white p-4">
        <div className="container max-w-3xl items-center p-4">
          <span className="">Olá Giovanna!</span>
          <h3 className="text-2xl font-bold">Qual é o seu palpite?</h3>
        </div>
      </section>
      <section id="content"></section>
    </main>
  </div>
);
