function Slot({ children, className = '', variant }) {
  const cls =
    variant === 'pink'
      ? 'slot slot--pink'
      : variant === 'dark'
        ? 'slot slot--dark'
        : 'slot';
  return <div className={`${cls} ${className}`}>{children}</div>;
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Mobile image — topo, full width, sem margens */}
      <div className="lg:hidden w-full aspect-[4/3] overflow-hidden">
        <img
          src="/photo-hero.jpg"
          alt="Cachos Creme de Pentear 1L"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content + desktop image */}
      <div className="relative lg:min-h-[700px] lg:flex lg:items-center">
        {/* Left content */}
        <div className="relative z-10 w-full lg:w-1/2 px-6 lg:pl-14 xl:pl-20 lg:pr-10 py-8 lg:py-24 flex flex-col gap-5 max-w-2xl">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <Slot variant="pink" className="w-7 h-7 rounded-full !text-[8px] ring-2 ring-paper">A</Slot>
              <Slot className="w-7 h-7 rounded-full !text-[8px] ring-2 ring-paper">B</Slot>
              <Slot variant="dark" className="w-7 h-7 rounded-full !text-[8px] ring-2 ring-paper">C</Slot>
              <Slot variant="pink" className="w-7 h-7 rounded-full !text-[8px] ring-2 ring-paper">D</Slot>
            </div>
            <div className="flex items-center gap-1 text-pink-brand text-sm">
              ★★★★★
              <span className="text-ink/70 ml-2 text-[12px]">20.000+ cacheadas aprovam o Cachos</span>
            </div>
          </div>

          <h1 className="font-display text-[32px] md:text-[46px] lg:text-[54px] leading-[1.0] tracking-[-0.02em] font-medium">
            Cacheadas <span className="italic font-light">&amp;</span> crespas, <br />
            <span className="italic text-pink-brand font-light">o creme queridinho</span>
            <br />
            entre as cabeleireiras.
          </h1>

          <p className="text-ink/70 text-[15px] max-w-[52ch] leading-relaxed">
            Cachos Creme de Pentear 1L — alta definição com hidratação e controle de frizz,
            sem pesar e sem deixar os fios duros. Funciona do 2A ao 4C, em um único passo.
          </p>

          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-[13px]">
            {[
              'Definição sem endurecer',
              'Sem sulfato, sem parabeno, sem silicone',
              'Cera de Alta Afinidade + Fixador sem Gel',
              'Óleo de Coco + Aloe Vera para nutrir',
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-pink-brand text-paper flex items-center justify-center text-[9px] shrink-0">✓</span>
                {t}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <a
              href="#comprar"
              className="group inline-flex items-center justify-center gap-3 bg-pink-brand text-paper px-6 py-4 rounded-full font-semibold tracking-[0.10em] uppercase text-[12px] hover:bg-ink transition"
            >
              Quero meu Cachos com 45% OFF
              <span className="inline-block transition group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#ingredientes"
              className="inline-flex items-center justify-center gap-2 border border-ink/20 text-ink px-6 py-4 rounded-full font-semibold tracking-[0.10em] uppercase text-[12px] hover:bg-ink hover:text-paper transition"
            >
              Ver ingredientes
            </a>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1 text-[11px] tracking-[0.10em] uppercase text-ink/60">
            <span className="flex items-center gap-2"><span className="text-pink-brand">⏲</span> Compra 100% segura</span>
            <span className="flex items-center gap-2"><span className="text-pink-brand">✦</span> Frete grátis acima de R$200</span>
            <span className="flex items-center gap-2"><span className="text-pink-brand">♡</span> Brinde grátis na compra</span>
          </div>
        </div>

        {/* Desktop right image — fills full right half, edge to edge */}
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-1/2 overflow-hidden">
          <img
            src="/photo-hero.jpg"
            alt="Cachos Creme de Pentear 1L"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-6 right-6 bg-ink text-paper rounded-2xl px-4 py-3 max-w-[55%]">
            <div className="font-mono text-[10px] tracking-[0.2em] text-pink-brand uppercase">Resultado</div>
            <div className="font-display text-[20px] leading-tight italic">do 2A<br />ao 4C</div>
          </div>
        </div>
      </div>
    </section>
  );
}
