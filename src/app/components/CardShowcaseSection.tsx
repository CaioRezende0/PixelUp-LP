"use client";
import { ImageIcon } from "lucide-react";

export default function CardShowcaseSection() {
  return (
    <section className="bg-[#0f0f1a] px-6 py-24 border-b border-violet-900/20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Texto à esquerda */}
        <div
          className="md:w-1/2 text-center md:text-left"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
            <span className="text-blue-500">Design que encanta.</span> <br />
            <span className="text-purple-500">Tecnologia que entrega.</span>
            <br />
            <span className="text-white">Tudo no mesmo lugar.</span>
          </h2>
        </div>

        {/* Cards sobrepostos responsivos */}
        <div
          className="relative flex items-center justify-center md:justify-start w-full md:w-1/2 h-[320px]"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-72 w-72 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl flex items-center justify-center absolute transition-transform duration-300 hover:scale-105"
              style={{
                left: `${i * 40}px`,
                zIndex: i,
              }}
            >
              <ImageIcon size={40} className="text-white/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
