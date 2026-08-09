import { BookOpen, Palette, Puzzle, Gamepad2, Music, PenLine } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export default function Showcase() {
  const { ref, visible } = useReveal();

  const books = [
    { icon: BookOpen, title: 'Histórias Bíblicas', desc: 'Livros ilustrados com as principais histórias da Bíblia adaptadas para crianças.' },
    { icon: Palette, title: 'Para Colorir', desc: 'Desenhos bíblicos para colorir, estimulando a criatividade e a coordenação motora.' },
    { icon: Puzzle, title: 'Jogos e Quebra-cabeças', desc: 'Atividades lúdicas que ensinam enquanto divertem, com personagens bíblicos.' },
    { icon: Gamepad2, title: 'Jogos de Palavras', desc: 'Caça-palavras, cruzadinhas e jogos de associação com vocabulário bíblico.' },
    { icon: Music, title: 'Cânticos e Louvores', desc: 'Músicas e cânticos infantis para momentos de alegria e adoração em família.' },
    { icon: PenLine, title: 'Atividades de Escrita', desc: 'Exercícios de traçar letras e palavras baseados nas histórias sagradas.' },
  ];

  return (
    <section id="conteudo" className="bg-white py-20 lg:py-28">
      <div ref={ref} className={`container-max reveal ${visible ? 'visible' : ''}`}>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-500">
            O que está incluído
          </span>
          <h2 className="section-title mt-3">
            12 livros com mais de 400 atividades
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Um material completo e diversificado para crianças de 3 a 10 anos, organizado por temas e níveis de dificuldade.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book, i) => (
            <div
              key={book.title}
              className="group flex gap-5 rounded-2xl border border-slate-100 bg-gradient-to-br from-cream-50 to-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/10"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors duration-300 group-hover:bg-primary-600 group-hover:text-white">
                <book.icon className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-slate-800">
                  {book.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-500">
                  {book.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
