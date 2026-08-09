import { Check, Download, Shield, Clock, Zap, BadgeCheck } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export default function Pricing() {
  const { ref, visible } = useReveal();

  const features = [
    '12 livros digitais completos em PDF',
    'Mais de 400 atividades para crianças de 3 a 10 anos',
    'Histórias bíblicas ilustradas e adaptadas',
    'Atividades de colorir, jogos e quebra-cabeças',
    'Exercícios de alfabetização com temas bíblicos',
    'Acesso imediato após a confirmação do pagamento',
    'Imprima quantas vezes quiser, em casa ou na gráfica',
    'Garantia incondicional de 7 dias',
  ];

  return (
    <section id="comprar" className="bg-white py-20 lg:py-28">
      <div ref={ref} className={`container-max reveal ${visible ? 'visible' : ''}`}>
        <div className="mx-auto max-w-3xl">
          {/* Card */}
          <div className="relative overflow-hidden rounded-3xl border-2 border-primary-200 bg-gradient-to-b from-cream-50 to-white shadow-2xl shadow-slate-900/10">
            {/* Badge */}
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary-600 to-primary-500 py-3 text-center">
              <span className="font-display text-sm font-semibold uppercase tracking-wider text-white">
                Oferta especial por tempo limitado
              </span>
            </div>

            <div className="px-6 pt-16 pb-8 sm:px-12">
              <h2 className="text-center font-display text-3xl font-bold text-slate-800 sm:text-4xl">
                Assegure o Kit Bíblico por R$ 9,90
              </h2>
              <p className="mt-4 text-center text-slate-500">
                Pagamento único sem mensalidades. Acesso imediato a 12 livros digitais em PDF com garantia incondicional de 7 dias.
              </p>

              {/* Price */}
              <div className="mt-8 flex flex-col items-center justify-center gap-2">
                <div className="flex items-baseline gap-3">
                  <span className="text-xl text-slate-400 line-through">R$ 97,00</span>
                  <span className="font-display text-5xl font-bold text-primary-600">R$ 9,90</span>
                </div>
                <span className="rounded-full bg-success-100 px-4 py-1 text-sm font-semibold text-success-700">
                  Economia de 69%
                </span>
              </div>

              {/* Features */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success-100">
                      <Check className="h-3.5 w-3.5 text-success-600" />
                    </div>
                    <span className="text-sm text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a href="https://app.kirvano.com/dashboard" className="btn-cta mt-10 w-full">
                <Download className="h-6 w-6" />
                Quero o Kit Bíblico Agora
              </a>

              {/* Guarantee seal */}
              <div className="mt-8 flex items-center justify-center gap-3 rounded-2xl border-2 border-success-200 bg-success-50 px-6 py-4">
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
              <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Shield className="h-5 w-5 text-success-500" />
                  Compra 100% segura
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Clock className="h-5 w-5 text-primary-500" />
                  Acesso imediato
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Zap className="h-5 w-5 text-accent-500" />
                  Pagamento único
                </div>
              </div>
            </div>
          </div>

          {/* Info note */}
          <p className="mt-6 text-center text-sm text-slate-400">
            Obrigado por adquirir o Kit Bíblico Infantil! Assim que o pagamento for confirmado,
            você receberá as instruções para acessar o material. Em caso de dúvida, entre em
            contato com nosso suporte.
          </p>
        </div>
      </div>
    </section>
  );
}
