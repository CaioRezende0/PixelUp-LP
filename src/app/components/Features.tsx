"use client";

import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      title: "Design Incrível",
      subtitle: "Landing pages que encantam",
      text: "Crie páginas com visual moderno e animações suaves que deixam sua marca na mente do visitante.",
      glow: false,
    },
    {
      title: "Alta Conversão",
      subtitle: "Pensado para resultados",
      text: "Componentes otimizados para gerar mais leads, cliques e vendas, sem precisar de código.",
      glow: true,
    },
    {
      title: "Velocidade e SEO",
      subtitle: "Performance que impulsiona",
      text: "Carregamento rápido, nota alta no Google e estrutura SEO pronta para ranquear no topo.",
      glow: false,
    },
  ];

  return (
    <section className="bg-[#0f0f1a] text-white px-6 py-24">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
          Funcionalidades que{" "}
          <span className="text-purple-500">fazem diferença</span>
        </h2>
      </div>

      <div className="space-y-10 max-w-2xl mx-auto">
        {features.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className={`
              relative rounded-2xl border border-white/10 
              bg-gradient-to-br from-white/5 to-white/0 
              p-6 backdrop-blur-md transform transition 
              hover:scale-105 
              ${item.glow ? "shadow-[0_0_60px_0_rgba(168,85,247,0.25)]" : ""}
            `}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500">
                {item.title}
              </span>
              <h3 className="font-semibold text-white/90">{item.subtitle}</h3>
            </div>
            <p className="text-gray-400 text-sm">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Botão com hover */}
      <div className="mt-16 flex justify-center">
        <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold shadow-lg transition-transform transform hover:scale-105 hover:opacity-90">
          Quero saber mais
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
