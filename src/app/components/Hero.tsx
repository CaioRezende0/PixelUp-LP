"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="bg-[#0f0f1a] text-white py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Texto */}
        <div
          className="flex-1 space-y-6 text-center md:text-left"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-blue-500">Crie páginas</span>{" "}
            <span className="text-purple-500">que brilham</span>{" "}
            <span className="text-blue-300">como seu conteúdo</span>
            <br />e convertem como nunca.
          </h1>

          <p className="text-gray-300 max-w-md mx-auto md:mx-0">
            O PixelUp é a plataforma que une design impressionante, performance
            e usabilidade. Ideal para criadores, marcas e profissionais que
            querem impressionar seus visitantes e aumentar seus resultados
            online.
          </p>

          <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-semibold hover:scale-105 transition-transform mx-auto md:mx-0">
            COMEÇAR AGORA <ArrowRight size={16} />
          </button>
        </div>

        {/* Imagem com flutuação */}
        <div
          className="relative flex-1 w-full h-[300px] md:h-[400px] flex items-center justify-center"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-purple-700 blur-3xl opacity-30 z-0" />

          <div className="relative z-10 w-full h-full max-w-sm mx-auto animate-float">
            <Image
              src="/images/foguete.png"
              alt="Imagem de destaque"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
