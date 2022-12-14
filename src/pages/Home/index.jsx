export function Home() {
  return (
    <div className="h-full md:h-screen p-4 bg-red-700 text-white flex flex-col items-center space-y-6">

      <header className="container flex justify-center max-w-5xl p-4">
        <img
          src="./src/assets/logo/logo-fundo-vinho.svg"
          alt="NaTrave"
          className="w-40"
        />
      </header>

      <div className="container max-w-5xl flex flex-1 flex-col p-4 justify-center items-center space-y-6 md:flex-row md:space-y-0 md:space-x-6">
        
        <div className="md:flex-1 flex justify-center">
          <img
            src="./src/assets/image/img.png"
            alt="teste2"
            className="w-full max-w-md"
          />
        </div>

        <div className="flex flex-col space-y-6 md:flex-1">
          <h1 className="text-3xl text-center md:text-left font-bold">
            Dê o seu palpite na Copa do Mundo do Catar 2022!
          </h1>

          <a href="/signup" className="text-center text-red-700 bg-white text-xl px-8 py-4 rounded">
            Criar minha conta
          </a>
          <a href="/login" className="text-center text-white border border-white text-xl px-8 py-4 rounded">
            Fazer login
          </a>

        </div>
      </div>
    </div>
  );
}
