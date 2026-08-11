import { BookOpen, Download, Printer, Shield, Star, Check, Users, BadgeCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-cream-100 via-cream-50 to-white pt-24 pb-20 sm:pt-28 lg:pt-36"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary-200/40 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -left-20 h-64 w-64 rounded-full bg-accent-200/40 blur-3xl" />

      <div className="container-max relative grid items-center gap-12 lg:grid-cols-2">
        {/* Text */}
        <div className="animate-fade-in-up text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-success-100 px-4 py-2 text-sm font-semibold text-success-700">
            <Check className="h-4 w-4" />
            DOWNLOAD IMEDIATO · GARANTIA DE 7 DIAS
          </span>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700 ring-1 ring-primary-200">
            <Users className="h-4 w-4" />
            Mais de 1297 famílias atendidas
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-slate-800 sm:text-5xl lg:text-6xl">
            Kit Bíblico Infantil{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary-600">Completo</span>
              <span className="absolute bottom-1 left-0 z-0 h-4 w-full rounded bg-accent-300/60" />
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-600 lg:text-xl">
            Ensine a Palavra de Deus de forma divertida, educativa e longe das telas.
            Receba <strong className="text-slate-800">12 livros digitais</strong> com mais de{' '}
            <strong className="text-slate-800">400 atividades</strong> para crianças de 3 a 10 anos.
          </p>

          {/* Price */}
          <div className="mt-8 flex items-center justify-center gap-4 lg:justify-start">
            <span className="text-lg text-slate-400 line-through">De R$ 97,00</span>
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

        {/* Image */}
        <div className="relative animate-fade-in">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Main image */}
            <div className="overflow-hidden rounded-3xl shadow-2xl shadow-slate-900/20 ring-8 ring-white">
              <img
                src="/img1.png"
                alt="Crianças lendo livros bíblicos"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>

            {/* Floating card 1 */}
            <div className="absolute -left-3 top-[400x] animate-float rounded-2xl bg-white p-2 shadow-xl shadow-slate-900/10 sm:-left-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-100">
                  <BookOpen className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <p className="font-display text-x1 font-bold text-slate-800">12</p>
                  <p className="text-xs text-slate-500">Livros digitais</p>
                </div>
              </div>
            </div>

            {/* Floating card 2 */}
            <div className="absolute -bottom-20 -right-4 animate-float rounded-2xl bg-white p-2 shadow-xl shadow-slate-900/10 sm:-right-8" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 translate-x-1 items-center justify-center rounded-xl bg-accent-100">
                  <Star className="h-4 w-4 text-accent-500" />
                </div>
                <div>
                  <p className="font-display text-x1 font-bold text-slate-800">+400</p>
                  <p className="text-xs text-slate-500">Atividades</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
