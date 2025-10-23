"use client";
import Image from "next/image";
import {motion} from "framer-motion";

const pdfMenuId = "1xHOl__kTf7PmQkWquwQ7veT4bs6goYJv"; // أول PDF
const pdfOffersId = "1Dx59p3T6fZsGG6pu0V8AVxINA6PHq3CA";

// لينكات التحميل والمعاينة
const menuViewLink = `https://drive.google.com/file/d/${pdfMenuId}/view?usp=sharing`;
const menuDownloadLink = `https://drive.google.com/uc?export=download&id=${pdfMenuId}`;

const offersViewLink = `https://drive.google.com/file/d/${pdfOffersId}/view?usp=sharing`;
const offersDownloadLink = `https://drive.google.com/uc?export=download&id=${pdfOffersId}`;

// لينك الموقع (استبدله باللينك بتاعك من Google Maps)
const locationLink = "https://maps.app.goo.gl/9Z5MzZgBgLCrVuBx9";

export default function Home() {
  // دالة التحميل والمعاينة
  const handleDownloadAndView = (viewLink, downloadLink) => {
    window.open(viewLink, "_blank", "noopener,noreferrer");
    const link = document.createElement("a");
    link.href = downloadLink;
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // دالة فتح الموقع
  const handleOpenLocation = () => {
    window.open(locationLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* الخلفية */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/cover.png')",
          backgroundSize: "120px 120px",
        }}
      ></div>
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-10"></div>

      {/* المحتوى */}
      <main className="relative z-20 flex flex-col items-center justify-center text-center gap-8">
        <Image
          src="/cover.png"
          alt="Moshka Logo"
          width={280}
          height={100}
          className="drop-shadow-[0_0_30px_rgba(255,0,100,0.4)] hover:scale-105 transition-transform duration-500"
          priority
        />

        {/* الأزرار */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-5 mt-4 justify-center">
          {/* زرار المنيو */}
          <motion.button
            onClick={() =>
              handleDownloadAndView(menuViewLink, menuDownloadLink)
            }
            whileHover={{scale: 1.08, y: -3}}
            whileTap={{scale: 0.95}}
            className="relative px-10 py-4 font-semibold text-lg text-white rounded-2xl 
              bg-gradient-to-r from-pink-600 via-red-600 to-orange-500 
              shadow-[0_4px_20px_rgba(255,80,80,0.4)]
              hover:shadow-[0_0_30px_rgba(255,80,100,0.8)]
              transition-all duration-300 ease-in-out overflow-hidden animate-bounce cursor-pointer"
            style={{fontFamily: "'Poppins', sans-serif"}}
          >
            <span className="relative z-10">Moshka Menu</span>
            <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-pink-700 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl"></span>
          </motion.button>

          {/* زرار العروض */}
          <motion.button
            onClick={() =>
              handleDownloadAndView(offersViewLink, offersDownloadLink)
            }
            whileHover={{scale: 1.08, y: -3}}
            whileTap={{scale: 0.95}}
            className="relative px-10 py-4 font-semibold text-lg text-white rounded-2xl 
              bg-gradient-to-r from-pink-600 via-red-600 to-orange-500 
              shadow-[0_4px_20px_rgba(255,80,80,0.4)]
              hover:shadow-[0_0_30px_rgba(255,80,100,0.8)]
              transition-all duration-300 ease-in-out overflow-hidden animate-pulse cursor-pointer"
            style={{fontFamily: "'Poppins', sans-serif"}}
          >
            <span className="relative z-10">Moshka Offers</span>
            <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-pink-700 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl"></span>
          </motion.button>

          {/* زرار اللوكيشن */}
          <motion.button
            onClick={handleOpenLocation}
            whileHover={{scale: 1.08, y: -3}}
            whileTap={{scale: 0.95}}
            className="relative px-10 py-4 font-semibold text-lg text-white rounded-2xl 
              bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 
              shadow-[0_4px_20px_rgba(80,180,255,0.4)]
              hover:shadow-[0_0_30px_rgba(80,200,255,0.8)]
              transition-all duration-300 ease-in-out overflow-hidden cursor-pointer"
            style={{fontFamily: "'Poppins', sans-serif"}}
          >
            <span className="relative z-10">Find Us 📍</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-sky-700 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl"></span>
          </motion.button>
        </div>
      </main>
    </div>
  );
}
