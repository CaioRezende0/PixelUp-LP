"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-[#0f0f1a] px-6 py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative">
        {/* Personagem à esquerda */}
        <div
          className="md:w-1/2 flex justify-center relative z-10"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <Image
            src="/images/boneco2.png"
            alt="Personagem"
            width={500}
            height={500}
            className="object-contain max-w-full h-auto"
          />

          {/* Bloco 1 flutuando - posição e tamanho mantidos */}
          <Image
            src="/images/pix.png"
            alt="Bloco 1"
            width={200}
            height={200}
            className="absolute top-[150px] left-[40px] animate-float z-0"
          />

          {/* Bloco 2 flutuando - posição e tamanho mantidos */}
          <Image
            src="/images/pix2.png"
            alt="Bloco 2"
            width={200}
            height={200}
            className="absolute bottom-10 right-[48px] animate-float-delay z-0"
          />
        </div>

        {/* Texto e botão */}
        <div
          className="md:w-1/2 text-center md:text-left space-y-6"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="800"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug text-white">
            <span className="text-blue-500">Visual de alto impacto</span>{" "}
            <span className="text-purple-500">com resultados reais.</span>
          </h1>

          <p className="text-gray-400 max-w-md mx-auto md:mx-0 text-sm sm:text-base">
            Construa experiências digitais que encantam e convertem. Nossa
            plataforma combina design moderno, performance e facilidade de uso
            para você se destacar no digital.
          </p>

          <button className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full shadow-lg transition-transform duration-300 hover:scale-105 hover:opacity-90">
            COMEÇAR AGORA <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
