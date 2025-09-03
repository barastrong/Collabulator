import React, { useState } from 'react';

const Task10Page: React.FC = () => {
  // Saya mengubah nama state agar lebih mudah dibaca: isImageVisible
  const [isImageVisible, setIsImageVisible] = useState(false);

  const handleToggleImage = () => {
    setIsImageVisible(prev => !prev);
  };

  const buttonText = isImageVisible ? 'Hide Image' : 'Show Image';

  return (
    // Container utama untuk menengahkan konten
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      
      {/* Konten yang akan berada di tengah */}
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Show/Hide Image
        </h1>
        
        <button 
          onClick={handleToggleImage}
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {buttonText}
        </button>

        {/* Gambar akan muncul dengan transisi halus */}
        {isImageVisible && (
          <div className="mt-8">
            <img 
              src="/vite.svg" // Path yang benar untuk file di folder public
              className="w-32 h-32 mx-auto animate-pulse" 
              alt="Vite logo" 
            />
          </div>
        )}

      </div>

    </div>
  );
};

export default Task10Page;