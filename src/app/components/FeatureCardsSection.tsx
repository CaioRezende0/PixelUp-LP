"use client";
import { Star, ShieldCheck, Zap, Book } from "lucide-react";

const features = [
  {
    title: "Editor visual intuitivo",
    text: "Construa páginas incríveis com um editor drag-and-drop que acelera sua produtividade.",
    icon: <Book size={18} className="text-purple-500" />,
  },
  {
    title: "Performance impecável",
    text: "Seu site otimizado com as melhores práticas de SEO, carregamento rápido e responsividade total.",
    icon: <Star size={18} className="text-purple-500" />,
  },
  {
    title: "Segurança garantida",
    text: "Arquitetura moderna com autenticação, criptografia e proteção contra falhas.",
    icon: <ShieldCheck size={18} className="text-purple-500" />,
  },
  {
    title: "Resultados visíveis",
    text: "Conversão, retenção e impacto. Tudo mensurável com integração de métricas reais.",
    icon: <Zap size={18} className="text-purple-500" />,
  },
];

export default function FeatureCardsSection() {
  return (
    <section className="bg-[#0f0f1a] px-6 py-24 relative z-10">
      <div className="max-w-6xl mx-auto text-center">
        {/* Título */}
        <h2
          className="text-3xl md:text-5xl font-bold text-white leading-snug mb-16"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          Tudo o que você precisa{" "}
          <span className="text-purple-500">para lançar rápido</span>{" "}
          <span className="text-blue-500">e com impacto</span>
        </h2>

        {/* Grade de cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {features.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="800"
              className="group rounded-xl bg-[#1b1b2a]/80 border border-white/10 px-6 py-5 text-left text-white backdrop-blur-md transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-purple-500/20 hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-md bg-white/5">{item.icon}</div>
                <div>
                  <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-snug">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botão final com hover scale suave */}
        <button
          data-aos="zoom-in"
          data-aos-delay="300"
          className="px-6 py-3 rounded-full text-sm font-semibold text-white border border-transparent bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ease-in-out hover:scale-105 hover:opacity-90"
        >
          Comece agora mesmo
        </button>
      </div>
    </section>
  );
}
