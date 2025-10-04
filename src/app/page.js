import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background with Darker Colors */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-900 to-red-900 animate-gradient bg-[length:400%_400%]"></div>
      {/* Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-md bg-black bg-opacity-30"></div>
      {/* Content */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center gap-4">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg animate-pulse"
          style={{fontFamily: "'Dancing Script', cursive"}}
        >
          Coming Soon
        </h1>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-red-600 drop-shadow-lg animate-pulse"
          style={{fontFamily: "'Dancing Script', cursive"}}
        >
          Moshka
        </h1>
        <h1
          className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg animate-pulse"
          style={{fontFamily: "'Noto Kufi Arabic', sans-serif"}}
        >
          قــــــريـــبـــاً
        </h1>
      </main>
    </div>
  );
}
