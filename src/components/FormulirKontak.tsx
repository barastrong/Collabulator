import React, { useState } from "react";

interface Pesan {
  nama: string;
  pesan: string;
}

const FormulirKontak: React.FC = () => {
  const [nama, setNama] = useState<string>("");
  const [pesan, setPesan] = useState<string>("");
  const [listPesan, setListPesan] = useState<Pesan[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (nama.trim() === "" || pesan.trim() === "") return;

    const dataBaru: Pesan = { nama, pesan };
    setListPesan([...listPesan, dataBaru]);

    setNama("");
    setPesan("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-6">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-4">
          Formulir Kontak
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Nama:
            </label>
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Masukkan nama..."
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Pesan:
            </label>
            <textarea
              value={pesan}
              onChange={(e) => setPesan(e.target.value)}
              placeholder="Tulis pesan kamu..."
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Kirim
          </button>
        </form>
      </div>

      <div className="mt-8 w-full max-w-md">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Daftar Pesan
        </h3>
        <ul className="space-y-3">
          {listPesan.map((item, index) => (
            <li
              key={index}
              className="bg-white shadow-md rounded-xl p-4 border border-gray-200"
            >
              <p className="text-sm text-gray-500">Nama:</p>
              <p className="font-semibold text-indigo-700">{item.nama}</p>
              <p className="text-sm text-gray-500 mt-2">Pesan:</p>
              <p className="text-gray-800">{item.pesan}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FormulirKontak;