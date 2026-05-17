const stats = [
  ['Definição percebida', '94,3%'],
  ['Maciez ao toque', '93,2%'],
  ['Brilho natural', '92,6%'],
  ['Recompraria', '92,3%'],
];

export default function Science() {
  return (
    <section id="ciencia" className="relative bg-ink text-paper overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="slot slot--dark absolute inset-0">Background — fios cacheados</div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-[1.2fr_1fr] gap-12">
        <div className="max-w-xl">
          <h2 className="font-display text-4xl md:text-6xl leading-[1] tracking-[-0.02em] font-medium mb-6">
            Aprovado por<br />
            <span className="italic font-light text-pink-brand">+23 mil cacheadas</span>.
          </h2>
          <p className="text-paper/70 text-lg leading-relaxed mb-10 max-w-lg">
            Avaliações reais de compradores verificados em curvaturas do 2A ao 4C, com uso
            contínuo do produto.
          </p>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8">
            {stats.map(([label, val]) => (
              <div key={label}>
                <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-paper/50 mb-2">{label}</div>
                <div className="font-mono text-5xl lg:text-6xl text-pink-brand font-semibold">{val}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-10">
            <a href="#comprar" className="inline-flex items-center gap-2 bg-pink-brand text-paper px-6 py-3 rounded-full text-[12px] tracking-[0.18em] uppercase font-semibold hover:bg-paper hover:text-ink transition">
              Comprar agora
            </a>
            <a href="#" className="inline-flex items-center gap-2 border border-paper/30 text-paper px-6 py-3 rounded-full text-[12px] tracking-[0.18em] uppercase font-semibold hover:bg-paper hover:text-ink transition">
              Ver depoimentos
            </a>
          </div>
        </div>

        <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden lg:self-end max-w-md ml-auto">
          <div className="slot absolute inset-0">Modelo cacheada</div>
        </div>
      </div>
    </section>
  );
}
