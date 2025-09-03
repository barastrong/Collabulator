import React from 'react';

interface KartuSiswaProps {
  nama: string;
  jurusan: string;
}

const KartuSiswa: React.FC<KartuSiswaProps> = ({ nama, jurusan }) => {
  return (
    <div className="m-3 w-52 rounded-lg border border-gray-200 bg-white p-4 text-center shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <h3 className="mb-1 text-xl font-bold text-gray-800">{nama}</h3>
      <p className="text-sm text-gray-600">Jurusan: {jurusan}</p>
    </div>
  );
};

export default KartuSiswa;