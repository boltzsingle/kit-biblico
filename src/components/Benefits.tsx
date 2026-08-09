import { Heart, BookOpen, GraduationCap } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export default function Benefits() {
  const { ref, visible } = useReveal();

  const benefits = [
    {
      icon: Heart,
      title: 'Aproxima da Palavra',
      description:
        'Ensinamentos bíblicos claros e acessíveis para cultivar a fé desde os primeiros anos de infância.',
      color: 'bg-rose-100 text-rose-500',
      ring: 'ring-rose-100',
    },
    {
      icon: BookOpen,
      title: 'Reduz o Tempo de Tela',
      description:
        'Uma alternativa saudável e prática de atividades impressas que mantêm os pequenos concentrados longe do celular.',
      color: 'bg-primary-100 text-primary-600',
      ring: 'ring-primary-100',
    },
    {
      icon: GraduationCap,
      title: 'Estimula a Alfabetização',
      description:
        'Jogos de palavras, associação de letras e exercícios de escrita baseados em histórias e personagens bíblicos.',
      color: 'bg-accent-100 text-accent-600',
      ring: 'ring-accent-100',
    },
  ];

  return (
    <section id="beneficios" className="bg-white py-20 lg:py-28">
      <div ref={ref} className={`container-max reveal ${visible ? 'visible' : ''}`}>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-500">
            Por que escolher
          </span>
          <h2 className="section-title mt-3">
            Transforme o aprendizado bíblico em momentos especiais
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Desenvolvido para aproximar as crianças dos ensinamentos cristãos enquanto estimula a coordenação e a leitura em casa.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {benefits.map((benefit, i) => (
            <div
              key={benefit.title}
              className="group relative rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary-100 hover:shadow-xl hover:shadow-slate-900/10"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className={`mx-auto flex h-20 w-20 items-center justify-center rounded-2xl ${benefit.color} ring-8 ${benefit.ring} transition-transform duration-300 group-hover:scale-110`}
              >
                <benefit.icon className="h-10 w-10" />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-slate-800">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
