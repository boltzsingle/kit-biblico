import { CreditCard, FileText, Printer } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export default function HowItWorks() {
  const { ref, visible } = useReveal();

  const steps = [
    {
      number: '1',
      icon: CreditCard,
      title: 'Acesso Imediato',
      description:
        'Conclua seu pedido com total segurança. A liberação do material ocorre logo após a confirmação do pagamento.',
    },
    {
      number: '2',
      icon: FileText,
      title: 'Arquivos em PDF',
      description:
        'Receba os 12 livros organizados em formato digital PDF para visualizar no celular, tablet ou computador.',
    },
    {
      number: '3',
      icon: Printer,
      title: 'Imprima Quantas Vezes Quiser',
      description:
        'Imprima em casa ou em uma gráfica de sua preferência para usar com seus filhos, alunos ou na igreja.',
    },
  ];

  return (
    <section id="como-funciona" className="bg-cream-50 py-20 lg:py-28">
      <div ref={ref} className={`container-max reveal ${visible ? 'visible' : ''}`}>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-500">
            Passo a passo
          </span>
          <h2 className="section-title mt-3">Como funciona</h2>
          <p className="mt-4 text-lg text-slate-500">
            Do pagamento à impressão, todo o processo é simples e rápido.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute top-12 left-[60%] hidden h-0.5 w-full bg-gradient-to-r from-primary-200 to-transparent md:block" />
              )}

              <div className="relative flex flex-col items-center text-center">
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg shadow-slate-900/5 ring-4 ring-primary-50">
                  <step.icon className="h-10 w-10 text-primary-600" />
                  <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-accent-400 font-display text-sm font-bold text-white shadow-md">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-slate-800">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-500">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

 {/* Banner image */}
        <div className="mt-16 overflow-hidden rounded-3xl shadow-xl shadow-slate-900/10">
          <div className="relative">
            <img
              src="/img3.png"
              alt="Criança colorindo atividades bíblicas"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
