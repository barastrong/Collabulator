import React from 'react';
import { Link } from 'react-router-dom';

const HomePage:React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-white to-slate-100 px-10 text-center">
      <main className="flex flex-col items-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
          Selamat Datang di Task Collabulator
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Ini adalah kumpulan tugas-tugas yang telah diselesaikan menggunakan React, TypeScript, dan Tailwind CSS. Jelajahi setiap tugas melalui navigasi di atas.
        </p>
        <Link
          to="/task10"
          className="mt-8 transform rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-slate-700"
        >
          Mulai Kerjakan Task →
        </Link>
      </main>
    </div>
  );
};

export default HomePage;