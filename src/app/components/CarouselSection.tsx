"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

const carouselImages = [
  { image: "/images/watch1.png" },
  { image: "/images/watch1.png" },
  { image: "/images/watch1.png" },
];

export default function CarouselSection() {
  return (
    <section className="relative bg-[#111124] px-6 overflow-hidden">
      {/* Fundo lilás fixo na base */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-[#b5a9e3] z-0" />

      {/* Conteúdo acima do fundo */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center gap-10 md:flex-row md:justify-between md:items-center">
        {/* Texto à esquerda */}
        <div
          className="md:w-1/3 text-center md:text-left space-y-4"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-snug text-white">
            Um novo padrão de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              tecnologia e estilo
            </span>
          </h2>
        </div>

        {/* Carrossel central com glow */}
        <div className="md:w-1/3 w-full relative flex justify-center">
          {/* Glow atrás do carrossel */}
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <div className="w-60 h-60 rounded-full bg-purple-600 blur-3xl opacity-30" />
          </div>

          {/* Carrossel acima do glow */}
          <div
            className="relative z-10 w-full"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <Swiper loop={true} className="w-full">
              {carouselImages.map((slide, i) => (
                <SwiperSlide key={i}>
                  <Image
                    src={slide.image}
                    alt={`Slide ${i + 1}`}
                    width={350}
                    height={350}
                    className="object-contain mx-auto"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Imagem fixa à direita */}
        <div
          className="md:w-1/3 -mb-6 flex justify-center relative z-10"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <Image
            src="/images/boneco1.png"
            alt="Personagem"
            width={600}
            height={600}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
