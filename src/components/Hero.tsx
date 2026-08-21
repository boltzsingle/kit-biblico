import { BookOpen, Download, Printer, Shield, Star, Check, Users, BadgeCheck } from 'lucide-react';
import ProductCarousel from "./ProductCarousel";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-cream-100 via-cream-50 to-white pt-14 pb-6 sm:pt-28 lg:pt-36"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary-200/40 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -left-20 h-64 w-64 rounded-full bg-accent-200/40 blur-3xl" />

      <div className="container-max relative grid items-center gap-4 lg:grid-cols-2 lg:gap-12">
        {/* Text */}
        <div className="animate-fade-in-up text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-success-100 px-4 py-2 text-sm font-semibold text-success-700">
            <Check className="h-4 w-4" />
            DOWNLOAD IMEDIATO · GARANTIA DE 7 DIAS
          </span>

          <div className="mt-4 hidden items-center gap-2 rounded-full bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700 ring-1 ring-primary-200 lg:inline-flex">
          <Users className="h-4 w-4" />
             Mais de 1297 famílias atendidas
         </div>

          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-slate-800 sm:text-5xl lg:mt-6 lg:text-6xl">
            Kit Bíblico Infantil{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary-600">Completo</span>
              <span className="absolute bottom-1 left-0 z-0 h-4 w-full rounded bg-accent-300/60" />
            </span>
          </h1>

           {/* Mobile product image */}

<div className="mt-3 lg:hidden">
  <div className="mx-auto max-w-[290px] overflow-hidden rounded-2xl shadow-xl ring-4 ring-white">
    <img
      src="/img1.png"
      alt="Kit Bíblico Infantil"
      className="w-full object-cover"
      loading="eager"
    />
  </div>
</div>

          <p className="mt-4 text-lg leading-relaxed text-slate-600 lg:text-xl">
            Ensine a Palavra de Deus de forma divertida, educativa e longe das telas.
            Receba <strong className="text-slate-800">12 livros digitais</strong> com mais de{' '}
            <strong className="text-slate-800">400 atividades</strong> para crianças de 3 a 15 anos.
          </p>

          {/* Price */}
          <div className="mt- flex items-center justify-center gap-4 lg:justify-start">
            <span className="text-lg text-slate-400 line-through">De R$ 57,90</span>
            <span className="text-lg text-slate-500">por apenas</span>
            <span className="font-display text-4xl font-bold text-primary-600">R$ 9,90</span>
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a href="https://pay.cakto.com.br/drgosnv_1034015" className="btn-cta w-full sm:w-auto">
              <Download className="h-5 w-5" />
              Quero o Kit Agora
            </a>
            <a href="#beneficios" className="text-sm font-semibold text-slate-600 underline-offset-4 hover:text-primary-600 hover:underline">
              Conhecer os benefícios
            </a>
          </div>

          {/* Guarantee seal */}
          <div className="mt-8 flex items-center justify-center gap-3 rounded-2xl border-2 border-success-200 bg-success-50 px-6 py-4 lg:justify-start">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-success-500 text-white shadow-lg shadow-success-500/30">
              <BadgeCheck className="h-8 w-8" />
            </div>
            <div className="text-left">
              <p className="font-display text-base font-bold text-success-700">
                Garantia de 7 dias
              </p>
              <p className="text-xs text-success-600">
                Risco zero &mdash; não gostou? Devolvemos seu dinheiro
              </p>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Shield className="h-5 w-5 text-success-500" />
              Compra segura
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Download className="h-5 w-5 text-primary-500" />
              Acesso imediato
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Printer className="h-5 w-5 text-accent-500" />
              Imprima quantas vezes quiser
            </div>
          </div>
        </div>

        {/* Product carousel */}
        <ProductCarousel />
        
      </div>
    </section>
  );
}
