
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">
        Selamat Datang di Halaman Home
      </h1>
      <p className="text-xl text-gray-600">
        Ini adalah halaman utama dari aplikasi React dengan Tailwind CSS.
      </p>
    </div>
  );
};

export default HomePage;