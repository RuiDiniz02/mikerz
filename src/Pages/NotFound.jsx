import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-zinc-100 p-6">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-3 text-lg text-zinc-400">Página não encontrada.</p>
      <Link
        to="/"
        className="mt-6 px-5 py-3 rounded-xl bg-yellow-400 text-zinc-900 font-semibold hover:bg-yellow-300 transition"
      >
        Voltar ao início
      </Link>
    </main>
  );
}