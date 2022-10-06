import { Match } from "../../components/Match";
import { DateSelect } from "../../components/Date";

export const Profile = () => (
  <>
    <header className="bg-red-500 text-white p-2">
      <div className="container max-w-3xl p-2 flex justify-between">
        <img
          src="src/assets/logo/logo-fundo-vermelho.svg"
          alt="NaTrave"
          className="w-28 md:w-40"
        />
        <div>
        <a href="/dashboard" title="Dashboard" className="px-2">
          <span class="material-symbols-rounded">grid_view</span>
        </a>
        <a href="/" title="Logout" className="px-2">
          <span className="material-symbols-rounded text-white">
            <span class="material-symbols-rounded">power_settings_new</span>
          </span>
        </a>
        </div>
      </div>
    </header>

    <main>
      <section id="header" className="space-y-6 bg-red-500 text-white p-2">
        <div className="container max-w-3xl justify-center p-4">
          <h3 className="text-2xl font-bold">Giovanna Trigueiro</h3>
        </div>
      </section>

      <section
        id="content"
        className="container max-w-3xl p-2 space-y-4 items-center"
      >
        <h2 className="text-red-300 font-bold text-2xl pt-4">Seus palpites</h2>
        
        <DateSelect></DateSelect>

        <div className="space-y-4">
          <Match
            teamA={{ slug: "sui" }}
            teamB={{ slug: "cam" }}
            match={{ time: "7:00" }}
          ></Match>

          <Match
            teamA={{ slug: "sui" }}
            teamB={{ slug: "cam" }}
            match={{ time: "7:00" }}
          ></Match>

          <Match
            teamA={{ slug: "sui" }}
            teamB={{ slug: "cam" }}
            match={{ time: "7:00" }}
          ></Match>
        </div>
      </section>
    </main>
  </>
);
