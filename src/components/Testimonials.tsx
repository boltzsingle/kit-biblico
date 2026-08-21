import { Star, Quote } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export default function Testimonials() {
  const { ref, visible } = useReveal();

  const testimonials = [
    {
      name: 'Mariana Costa',
      role: 'Mãe da Helena, 6 anos',
      text: 'O kit transformou nossas noites em família. Minha filha adora as histórias e as atividades de colorir. Aprendeu sobre a Bíblia de um jeito que eu nunca conseguiria sozinha!',
      image: '/testimonials/mariana.jpg',
    },
    {
      name: 'Pastor João Batista',
      role: 'Igreja Batista Vida Nova',
      text: 'Uso o material na Escola Dominical e as crianças ficam encantadas. O conteúdo é bem elaborado, com atividades que prendem a atenção e ensinam de verdade.',
      image: "/testimonials/joao.jpg",
    },
    {
      name: 'Fernanda Lima',
      role: 'Professora de educação infantil',
      text: 'Como professora, recomendo demais! As atividades de alfabetização com temas bíblicos são perfeitas. As crianças aprendem a ler e a escrever enquanto conhecem a Palavra.',
      image: "/testimonials/fernanda.jpg",
    },
  ];

  return (
    <section id="depoimentos" className="bg-gradient-to-b from-cream-50 to-white py-20 lg:py-28">
      <div ref={ref} className={`container-max reveal ${visible ? 'visible' : ''}`}>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-500">
            Depoimentos
          </span>
          <h2 className="section-title mt-3">Quem já comprou, recomenda</h2>
          <p className="mt-4 text-lg text-slate-500">
            Veja o que pais, professores e pastores dizem sobre o Kit Bíblico Infantil.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="relative rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/10"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-primary-100" />
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-5 w-5 fill-accent-400 text-accent-400" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                "{t.text}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                <img               
                 src={t.image}
                alt={t.name}
                className="h-12 w-12 rounded-full object-cover ring-2 ring-white shadow-sm"
                />
                <div>
                  <p className="font-semibold text-slate-800">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
