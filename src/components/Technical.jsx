const rows = [
  ['Conteúdo', '1 Litro (1000ml)'],
  ['Indicação', 'Cabelos cacheados (2A) a crespos (4C), inclusive transição capilar.'],
  ['Ativos principais', 'Cera de Alta Afinidade, Fixador sem Gel, Óleo de Coco, Aloe Vera.'],
  ['Modo de uso', 'Aplique no cabelo molhado, de baixo para cima. Faça plopping ou deixe secar naturalmente. Não enxaguar.'],
  ['Compatibilidade', 'Método Curly Girl (CGM), L.O.C, L.C.O.'],
  ['Marca', 'Ledebut · Cosmoética Indústria de Cosméticos · Produzido no Brasil'],
];

const tags = ['Sem sulfato', 'Sem parabeno', 'Sem óleo mineral', 'CGM friendly', '2A — 4C'];

export default function Technical() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1] tracking-[-0.02em] font-medium mb-6">
            Informação<br /><span className="italic font-light">completa do produto.</span>
          </h2>
          <p className="text-ink/60 leading-relaxed max-w-md mb-8">
            Transparência total. Confira indicação, composição, modo de uso e compatibilidade
            antes mesmo de adicionar ao carrinho.
          </p>
          <div className="flex flex-wrap gap-3 text-[11px] tracking-[0.18em] uppercase">
            {tags.map((t) => (
              <span key={t} className="border border-ink/20 rounded-full px-3 py-1.5">{t}</span>
            ))}
          </div>
        </div>

        <div className="bg-paper rounded-3xl p-8">
          <dl className="divide-y divide-ink/10 text-[14px]">
            {rows.map(([k, v]) => (
              <div key={k} className="flex flex-col sm:grid sm:grid-cols-[160px_1fr] py-3 gap-1 sm:gap-4">
                <dt className="text-ink/50 uppercase tracking-[0.14em] text-[11px] mt-1">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
