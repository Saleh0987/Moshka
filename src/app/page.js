"use client";
import Image from "next/image";
import Link from "next/link";

// Google Drive file ID for the PDF
const pdfFileId = "1XLVHTFSIj27NUrFUxKcbRD5thrbKSqUY";
const viewLink = `https://drive.google.com/file/d/${pdfFileId}/view?usp=sharing`;
const directDownloadLink = `https://drive.google.com/uc?export=download&id=${pdfFileId}`;

export default function Home() {
  const handleDownloadAndView = () => {
    // Open PDF in a new tab for viewing
    window.open(viewLink, "_blank", "noopener,noreferrer");

    // Trigger automatic download
    const link = document.createElement("a");
    link.href = directDownloadLink;
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background with Darker Colors */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-900 to-red-900 animate-gradient bg-[length:400%_400%]"></div>
      {/* Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/70 bg-opacity-30"></div>
      {/* Content */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center gap-4">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-red-600 drop-shadow-lg animate-pulse"
          style={{fontFamily: "'Dancing Script', cursive"}}
        >
          Moshka
        </h1>

        {/* Buttons for PDFs */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleDownloadAndView}
            className="px-6 py-3 bg-red-600 text-white font-semibold 
            cursor-pointer rounded-lg shadow-md hover:bg-red-700 transition duration-300"
          >
            View Menu 1
          </button>
          <button
            onClick={handleDownloadAndView}
            className="px-6 py-3 bg-red-600 text-white font-semibold 
            cursor-pointer rounded-lg shadow-md hover:bg-red-700 transition duration-300"
          >
            View Menu 2
          </button>
        </div>
      </main>
    </div>
  );
}
