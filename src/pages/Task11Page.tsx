import React from 'react';
import KartuSiswa from '../components/KartuSiwa';

const Task11Page: React.FC = () => {
  const dataSiswa = [
    { nama: 'Kayla Reyvani', jurusan: 'SIJA' },
    { nama: 'Raffi Akbar', jurusan: 'SIJA' },
    { nama: 'Bima Aji', jurusan: 'SIJA' }
  ];

  return (
    <div className="flex min-h-screen flex-wrap items-center justify-center bg-gray-100 p-4">
      {dataSiswa.map((siswa, index) => (
        <KartuSiswa
          key={index}
          nama={siswa.nama}
          jurusan={siswa.jurusan}
        />
      ))}
    </div>
  );
}

export default Task11Page;