import { Input } from "./../../components/Input";

export const Login = () => {
  return (
    <>
      <header className="p-4 border-b border-red-300">
        <div className="flex justify-center container max-w-5xl">
          <img
            src="./src/assets/logo/logo-fundo-branco.svg"
            alt="NaTrave"
            className="w-32 md:w-40"
          />
        </div>
      </header>
      <main className="container max-w-2xl p-4">
        <div className="flex flex-row items-center">
          <a href="/" className="flex ">
            <span class="material-symbols-rounded">arrow_back</span>
          </a>
          <div className="p-4">
            <h2 className="text-xl font-bold">Entre na sua conta</h2>
          </div>
        </div>

        <form className="p-4 space-y-6">
          <Input
            type="text"
            name="email"
            label="Seu e-mail"
            placeholder="Digite seu e-mail"
          ></Input>

          <Input
            type="password"
            name="password"
            label="Sua senha"
            placeholder="Digite sua senha"
          ></Input>

          <a
            href="/dashboard"
            className="block w-full bg-red-500 text-white text-center px-6 py-3 rounded-xl"
          >
            Entrar
          </a>
        </form>
      </main>
    </>
  );
};
