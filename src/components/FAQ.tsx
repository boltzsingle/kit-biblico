import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export default function FAQ() {
  const { ref, visible } = useReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Como recebo o material após a compra?',
      answer:
        'Assim que o pagamento for confirmado, você recebe um e-mail com todas as instruções e o link de acesso aos 12 livros digitais em PDF. O acesso é imediato.',
    },
    {
      question: 'Preciso de algum programa especial para abrir os arquivos?',
      answer:
        'Não. Os arquivos estão em formato PDF, que pode ser aberto em qualquer computador, celular ou tablet. Basta ter um leitor de PDF instalado, como o Adobe Acrobat Reader (gratuito).',
    },
    {
      question: 'Posso imprimir quantas vezes quiser?',
      answer:
        'Sim! O material é 100% digital e você pode imprimir quantas vezes precisar, seja em casa ou em uma gráfica. Não há limite de impressões.',
    },
    {
      question: 'Para qual idade o material é indicado?',
      answer:
        'O Kit Bíblico Infantil foi desenvolvido para crianças de 3 a 15 anos, com atividades organizadas por níveis de dificuldade para atender diferentes faixas etárias.',
    },
    {
      question: 'Existe garantia?',
      answer:
        'Sim! Você conta com garantia incondicional de 7 dias. Se por qualquer motivo não ficar satisfeito, basta solicitar o reembolso e devolveremos seu dinheiro.',
    },
    {
      question: 'Posso usar o material na igreja ou na escola?',
      answer:
        'Com certeza! O kit foi desenvolvido para uso doméstico, escolar e também para a igreja. Muitos pastores e professores utilizam o material em suas aulas e na Escola Dominical.',
    },
  ];

  return (
    <section id="faq" className="bg-cream-50 py-20 lg:py-28">
      <div ref={ref} className={`container-max reveal ${visible ? 'visible' : ''}`}>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-500">
            Dúvidas frequentes
          </span>
          <h2 className="section-title mt-3">Perguntas e respostas</h2>
          <p className="mt-4 text-lg text-slate-500">
            Tudo o que você precisa saber antes de adquirir o Kit Bíblico Infantil.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <button
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-display text-base font-semibold text-slate-800 sm:text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-primary-500 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  openIndex === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm leading-relaxed text-slate-500">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
