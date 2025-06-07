"use client";
import { LogIn, UserPlus, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ once: true }); // Anima apenas uma vez
  }, []);

  return (
    <header className="bg-gradient-to-b from-[#1c1c2b] to-[#0f0f1a] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className="text-xl font-bold text-blue-500"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          PixelUp
        </div>

        {/* Toggle Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Botões Desktop */}
        <div className="hidden md:flex gap-3">
          <Link
            href="/login"
            className="flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 transition-transform"
            data-aos="fade-down"
            data-aos-duration="500"
          >
            Entrar <LogIn size={16} />
          </Link>
          <Link
            href="/register"
            className="flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium text-white bg-[#3A3A50] hover:bg-[#4b4b6a] hover:scale-105 transition-transform"
            data-aos="fade-down"
            data-aos-duration="300"
          >
            Criar Conta <UserPlus size={16} />
          </Link>
        </div>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-2 bg-[#1c1c2b]">
          <Link
            href="/login"
            className="flex items-center justify-center gap-1 px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 transition-transform"
          >
            Entrar <LogIn size={16} />
          </Link>
          <Link
            href="/register"
            className="flex items-center justify-center gap-1 px-4 py-2 rounded-full text-sm font-medium text-white bg-[#3A3A50] hover:bg-[#4b4b6a] hover:scale-105 transition-transform"
          >
            Criar Conta <UserPlus size={16} />
          </Link>
        </div>
      )}
    </header>
  );
}
