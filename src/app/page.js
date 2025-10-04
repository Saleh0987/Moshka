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
      <div
        className="absolute inset-0 "
        style={{
          backgroundImage: "url('/cover.png')", // Replace with your logo path
          backgroundSize: "100px 100px", // Adjust size of the repeating logo
        }}
      ></div>
      {/* Repeating Logo Background */}
      <div className="absolute inset-0 bg-repeat opacity-30"></div>
      {/* Blur Overlay */}
      <div className="absolute inset-0  bg-black/40 bg-opacity-30 z-10"></div>
      {/* Content */}
      <main className="relative z-20 flex flex-col items-center justify-center text-center gap-4">
        <Image
          src="/cover.png" // Replace with your logo path
          alt="Moshka Logo"
          width={300} // Adjust width for desired size
          height={100} // Adjust height for desired size
          className="sm:w-64 md:w-80 lg:w-96 h-auto drop-shadow-lg animate-pulse"
          priority // Load image eagerly for above-the-fold content
        />

        {/* Buttons for PDFs */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <button
            className="px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold text-lg 
            rounded-xl shadow-lg hover:from-red-700 hover:to-pink-700 hover:scale-105 hover:shadow-xl 
            transition-all duration-300 ease-in-out transform focus:outline-none focus:ring-4 
            focus:ring-red-500/50 animate-pulse hover:animate-none"
            style={{fontFamily: "'Poppins', sans-serif"}}
          >
            Moshka Menu
          </button>
          <button
            onClick={handleDownloadAndView}
            className="px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold text-lg 
            rounded-xl shadow-lg hover:from-red-700 hover:to-pink-700 hover:scale-105 hover:shadow-xl 
            transition-all duration-300 ease-in-out transform focus:outline-none focus:ring-4 
            focus:ring-red-500/50 animate-pulse hover:animate-none"
            style={{fontFamily: "'Poppins', sans-serif"}}
          >
            Moshka Offers
          </button>
        </div>
      </main>
    </div>
  );
}
