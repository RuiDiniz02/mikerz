import React from "react";

export default function Homepage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100 flex items-center justify-center p-6">
      <section className="w-full max-w-2xl text-center">
        {/* Imagem pequena por cima */}
        <div className="flex justify-center mb-6">
          <img
            src="/af.png" // imagem dentro da pasta "public"
            alt="Logo"
            className="w-16 h-16 object-contain"
          />
        </div>

        {/* Faixa de aviso */}
        <div className="relative mb-8">
          <div className="absolute inset-0 -skew-x-6 bg-yellow-400/20 rounded-2xl blur-sm" />
          <div className="relative rounded-2xl ring-1 ring-white/10 overflow-hidden">
            <div className="bg-[repeating-linear-gradient(45deg,#facc15_0_14px,#111827_14px_28px)] p-4" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          <span className="mr-2">🚧</span>Em construção
        </h1>

        <p className="mt-3 text-zinc-400">
          Os Mikerz estão cooking. Fica atento!
        </p>

        {/* Barra de progresso animada */}
        <div className="mt-8">
          <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full w-1/2 bg-yellow-400 animate-[progress_2.2s_ease-in-out_infinite]"
              style={{ borderRadius: 9999 }}
            />
          </div>
          <p className="mt-2 text-sm text-zinc-500">A montar os andaimes…</p>
        </div>

        {/* Rodapé pequeno */}
        <p className="mt-10 text-xs text-zinc-500">
          © {new Date().getFullYear()} — em breve.
        </p>
      </section>

      {/* Keyframes inline */}
      <style>{`
        @keyframes progress {
          0% { transform: translateX(-60%); width: 35%; }
          50% { transform: translateX(10%); width: 60%; }
          100% { transform: translateX(110%); width: 35%; }
        }
      `}</style>
    </main>
  );
}
