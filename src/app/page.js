"use client";
import Image from "next/image";
import {motion} from "framer-motion";

const pdfFileId = "1XLVHTFSIj27NUrFUxKcbRD5thrbKSqUY";
const viewLink = `https://drive.google.com/file/d/${pdfFileId}/view?usp=sharing`;
const directDownloadLink = `https://drive.google.com/uc?export=download&id=${pdfFileId}`;

export default function Home() {
  const handleDownloadAndView = () => {
    window.open(viewLink, "_blank", "noopener,noreferrer");
    const link = document.createElement("a");
    link.href = directDownloadLink;
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/cover.png')",
          backgroundSize: "120px 120px",
        }}
      ></div>
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-10"></div>

      {/* Content */}
      <main className="relative z-20 flex flex-col items-center justify-center text-center gap-8">
        <Image
          src="/cover.png"
          alt="Moshka Logo"
          width={280}
          height={100}
          className="drop-shadow-[0_0_30px_rgba(255,0,100,0.4)] hover:scale-105 transition-transform duration-500"
          priority
        />

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 mt-4">
          <motion.button
            whileHover={{scale: 1.08, y: -3}}
            whileTap={{scale: 0.95}}
            className="relative px-10 py-4 font-semibold text-lg text-white rounded-2xl 
            bg-gradient-to-r from-pink-600 via-red-600 to-orange-500 
            shadow-[0_4px_20px_rgba(255,80,80,0.4)]
            hover:shadow-[0_0_30px_rgba(255,80,100,0.8)]
            transition-all duration-300 ease-in-out overflow-hidden"
            style={{fontFamily: "'Poppins', sans-serif"}}
          >
            <span className="relative z-10">Moshka Menu</span>
            <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-pink-700 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl"></span>
          </motion.button>

          <motion.button
            onClick={handleDownloadAndView}
            whileHover={{scale: 1.08, y: -3}}
            whileTap={{scale: 0.95}}
            className="relative px-10 py-4 font-semibold text-lg text-white rounded-2xl 
            bg-gradient-to-r from-pink-600 via-red-600 to-orange-500 
            shadow-[0_4px_20px_rgba(255,80,80,0.4)]
            hover:shadow-[0_0_30px_rgba(255,80,100,0.8)]
            transition-all duration-300 ease-in-out overflow-hidden"
            style={{fontFamily: "'Poppins', sans-serif"}}
          >
            <span className="relative z-10">Moshka Offers</span>
            <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-pink-700 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl"></span>
          </motion.button>
        </div>
      </main>
    </div>
  );
}
