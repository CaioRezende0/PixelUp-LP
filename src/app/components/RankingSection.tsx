"use client";
import Image from "next/image";

export default function RankingSection() {
  return (
    <section className="bg-[#0f0f1a] px-6 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center md:items-end justify-center">
        {/* Texto à esquerda */}
        <div
          className="md:w-1/3 text-center md:text-left space-y-6"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            Estamos no topo
          </h2>
          <div className="text-white space-y-2 text-sm sm:text-base">
            <p className="font-semibold text-lg">Ranking de performance</p>
            <p className="text-gray-400">
              Sites mais rápidos e otimizados da categoria.
            </p>
            <p className="text-gray-400">
              Layouts com maior retenção de visitantes.
            </p>
            <p className="text-gray-400">
              Experiência do usuário avaliada como excelente.
            </p>
          </div>
        </div>

        {/* Pódio */}
        <div className="flex gap-10 items-end justify-center text-center relative">
          {/* 2º lugar */}
          <div className="space-y-2" data-aos="fade-up" data-aos-duration="900">
            <Image
              src="/images/ranking2.png"
              alt="2º lugar"
              width={100}
              height={100}
              className="mx-auto"
            />
          </div>

          {/* 1º lugar com glow */}
          <div
            className="space-y-2 relative flex justify-center items-center"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            {/* Glow atrás */}
            <div className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 blur-2xl opacity-40 z-0" />
            <Image
              src="/images/ranking1.png"
              alt="1º lugar"
              width={100}
              height={100}
              className="z-10 relative mx-auto"
            />
          </div>

          {/* 3º lugar */}
          <div
            className="space-y-2"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <Image
              src="/images/ranking3.png"
              alt="3º lugar"
              width={100}
              height={100}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
