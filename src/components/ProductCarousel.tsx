import { useEffect, useRef, useState } from "react";

const images = [
  "/carousel/atividade-1.png",
  "/carousel/atividade-2.png",
  "/carousel/atividade-3.png",
  "/carousel/atividade-4.png",
  "/carousel/atividade-5.png",
  "/carousel/atividade-6.png",
  "/carousel/atividade-7.png",
];

export default function ProductCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const pauseTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

   useEffect(() => {
  if (paused) return;

  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, 3000);

  return () => clearInterval(interval);
}, [paused]);

const pauseAutoplay = () => {
  setPaused(true);

  if (pauseTimeout.current) {
    clearTimeout(pauseTimeout.current);
  }

  pauseTimeout.current = setTimeout(() => {
    setPaused(false);
  }, 6000);
};

   const nextSlide = () => {
  pauseAutoplay();
  setCurrent((prev) => (prev + 1) % images.length);
};

  const prevSlide = () => {
  pauseAutoplay();
  setCurrent((prev) => (prev - 1 + images.length) % images.length);
};

  return (
        <section className="bg-white px-4 pt-6 pb-0">
  <div className="mx-auto max-w-5xl text-center">

    <p className="text-sm font-bold uppercase tracking-wider text-primary-500">
      VEJA POR DENTRO
    </p>

    <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-slate-800">
      Veja algumas das atividades que você vai receber
    </h2>

    <p className="mt-3 text-base text-slate-600">
      Atividades prontas para imprimir, brincar e aprender.
    </p>

        <div className="relative mx-auto mt-7 max-w-md overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200">
          <img
            src={images[current]}
            alt={`Atividade bíblica ${current + 1}`}
            className="h-auto w-full object-contain"
          />

          <button
            type="button"
            onClick={prevSlide}
             aria-label="Imagem anterior"
            className="absolute left-1 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-xl text-slate-800 shadow-md ring-1 ring-slate-200"
             >
  ‹
</button>

          <button
            type="button"
  onClick={nextSlide}
  aria-label="Próxima imagem"
  className="absolute right-1 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-xl text-slate-800 shadow-md ring-1 ring-slate-200"
          >
            ›
          </button>
        </div>

        <div className="mt-5 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              type="button"
              key={index}
              onClick={() => {
              pauseAutoplay();
              setCurrent(index);
              }}
              aria-label={`Ir para imagem ${index + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                current === index ? "scale-110 bg-orange-500" : "bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}