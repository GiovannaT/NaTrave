import { useState, useEffect } from "react";
import { addDays, subDays, format, } from "date-fns";
import { ptBR } from "date-fns/locale";

export const DateSelect = () => {
  const [currentDate, setCurrentDate] = useState(new Date('2022-11-20T00:00:00Z'));

  const previousDay = () => {
    const previousDate = subDays(currentDate, 1);

    setCurrentDate(previousDate);
  };

  const nextDay = () => {
    const nextDate = addDays(currentDate, 1);
    setCurrentDate(nextDate);
  };

  return (
    <div className="flex justify-center items-center p-4">
      <button onClick={previousDay} className="p-2 flex">
        <span class="material-symbols-rounded text-red-300">chevron_left</span>
      </button>
      <span>{format(currentDate, "d 'de' MMMM", {locale: ptBR})}</span>
      <button onClick={nextDay} className="p-2 flex">
        <span class="material-symbols-rounded text-red-300">chevron_right</span>
      </button>
    </div>
  );
};
