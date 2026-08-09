import { BookOpen, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-800 py-16">
      <div className="container-max">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600 text-white">
              <BookOpen className="h-6 w-6" />
            </div>
            <span className="font-display text-lg font-bold text-white">
              Kit Bíblico Infantil
            </span>
          </div>

          <p className="mt-6 max-w-md text-sm text-slate-400">
            Aprender a Palavra de Deus. Material 100% digital em PDF para imprimir em casa,
            na escola ou na igreja.
          </p>

          <nav className="mt-8 flex flex-wrap items-center justify-center gap-6">
            <a href="#inicio" className="text-sm text-slate-400 transition-colors hover:text-white">Início</a>
            <a href="#beneficios" className="text-sm text-slate-400 transition-colors hover:text-white">Benefícios</a>
            <a href="#como-funciona" className="text-sm text-slate-400 transition-colors hover:text-white">Como Funciona</a>
            <a href="#conteudo" className="text-sm text-slate-400 transition-colors hover:text-white">Conteúdo</a>
            <a href="#faq" className="text-sm text-slate-400 transition-colors hover:text-white">Perguntas</a>
          </nav>

          <div className="mt-10 h-px w-full max-w-md bg-slate-700" />

          <p className="mt-8 text-sm text-slate-500">
            &copy; 2026 Kit Bíblico Infantil Completo &mdash; Material 100% digital em PDF para imprimir em casa.
          </p>
          <p className="mt-2 flex items-center gap-1 text-xs text-slate-600">
            Feito com <Heart className="h-3 w-3 fill-rose-500 text-rose-500" /> para famílias cristãs
          </p>
        </div>
      </div>
    </footer>
  );
}
