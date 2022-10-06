export const Match = ({ teamA, teamB, match }) => (
  <div className="rounded-xl border border-gray-300 p-4 text-center space-y-4">
    <span className="text-sm md:text-base text-gray-700 font-bold">
      {match.time}
    </span>
    <div className="flex space-x-5 justify-center items-center">
      <span className="uppercase">{teamA.slug}</span>
      <img src={`src/assets/flags/${teamA.slug}.png`} alt="Suíça" />

      <input
        type="number"
        className="bg-red-300/[0.2] w-[55px] h-[55px] text-red-700 text-xl text-center"
      />
      <span className="text-red-500 font-bold">X</span>
      <input
        type="number"
        className="bg-red-300/[0.2] w-[55px] h-[55px] text-red-700 text-xl  text-center"
      />

      <span className="uppercase">{teamB.slug}</span>
      <img src={`src/assets/flags/${teamB.slug}.png`} alt="Suíça" />
    </div>
  </div>
);
