import React, { useState } from "react";
import ThemeToggle from "../components/ThemeToggle"; 

type Theme = "light" | "dark";

const Task15Page: React.FC = () => {
  const [currentPageTheme, setCurrentPageTheme] = useState<Theme>('light');

  const handleThemeChange = (newTheme: Theme) => {
    setCurrentPageTheme(newTheme);
  };
  
  const isDark = currentPageTheme === 'dark';

  return (
    <div 
      className={`
        grid min-h-screen place-items-center p-6 transition-colors duration-200
        ${isDark ? 'bg-slate-950 text-slate-200' : 'bg-white text-slate-900'}
      `}
    >
      <main className="grid w-full max-w-3xl gap-3 text-center">
        <h1 className="text-3xl font-bold">Tema Toggle React 🌗</h1>
        <p className="opacity-80">
          Klik tombol untuk ganti Light / Dark. Pilihan tersimpan.
        </p>
        
        <div className="my-4 flex justify-center">
          <ThemeToggle onThemeChange={handleThemeChange} />
        </div>

        <section 
          className={`
            mt-2 rounded-xl border p-3.5 text-left
            ${isDark ? 'border-slate-700 bg-slate-900' : 'border-gray-200 bg-gray-100'}
          `}
        >
          <p>
            Contoh konten: teks, card, background — semuanya akan berubah sesuai tema.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Task15Page;