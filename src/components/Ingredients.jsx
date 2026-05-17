const cards = [
  { tag: 'Definição', title: 'Cera de Alta Afinidade', desc: 'Fixação leve e flexível — modela o cacho sem rigidez nem efeito borracha.', image: '/ativo-cera-alta-afinidade.webp' },
  { tag: 'Memória', title: 'Fixador sem Gel', desc: 'Mantém o cacho definido com naturalidade, sem deixar duro ou pesado.', image: '/ativo-fixador-sem-gel.webp' },
  { tag: 'Nutrição', title: 'Óleo de Coco', desc: 'Nutre profundamente, protege e combate o ressecamento dos fios.', image: '/ativo-oleo-de-coco.webp' },
  { tag: 'Hidratação', title: 'Aloe Vera', desc: 'Hidrata, suaviza e devolve elasticidade à fibra capilar.', image: '/ativo-aloe-vera.webp' },
];

const systems = [
  { n: '01', title: 'Fixação leve e flexível', body: 'A Cera de Alta Afinidade somada ao Fixador sem Gel modela o cacho com naturalidade, sem rigidez, sem efeito plástico e sem empastamento.', open: true },
  { n: '02', title: 'Nutrição e hidratação profunda', body: 'Óleo de Coco nutre profundamente e combate o ressecamento. Aloe Vera hidrata, suaviza e devolve elasticidade à fibra capilar.' },
  { n: '03', title: 'Compatível com Curly Girl Method', body: 'Formulado sem sulfatos, sem parabenos e sem silicones. Seguro para uso frequente, compatível com métodos CGM, L.O.C e L.C.O.' },
];

export default function Ingredients() {
  return (
    <section id="ingredientes" className="py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-display text-4xl md:text-6xl leading-[1] tracking-[-0.02em] font-medium max-w-3xl">
              4 ativos. 1 fórmula.<br /><span className="italic font-light">Resultado real.</span>
            </h2>
          </div>
          <p className="text-ink/60 max-w-md text-[15px] leading-relaxed">
            Sem promessa genérica. Cada ativo tem uma função clara, selecionada para atuar em
            sinergia em fios cacheados (2A) a crespos (4C).
          </p>
        </div>

        <div className="overflow-x-auto scroll-hide -mx-6 px-6">
          <div className="flex gap-4 min-w-max pb-2">
            {cards.map((c) => (
              <article key={c.title} className="w-[260px] shrink-0 rounded-3xl overflow-hidden bg-soft">
                <img
                  src={c.image}
                  alt={c.title}
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                />
                <div className="p-5">
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-pink-brand">{c.tag}</div>
                  <h3 className="font-display text-xl mt-1 leading-tight">{c.title}</h3>
                  <p className="text-[13px] text-ink/60 mt-2 leading-relaxed">{c.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14 divide-y divide-ink/10 border-y border-ink/10">
          {systems.map((s) => (
            <details key={s.n} open={s.open}>
              <summary className="flex items-center justify-between gap-6 py-6 lg:py-8">
                <div className="flex items-center gap-5">
                  <span className="font-mono text-[11px] tracking-[0.18em] text-pink-brand">SISTEMA {s.n}</span>
                  <h3 className="font-display text-2xl lg:text-3xl">{s.title}</h3>
                </div>
                <span className="acc-icon text-2xl">+</span>
              </summary>
              <div className="pb-8 text-ink/70 max-w-2xl leading-relaxed">{s.body}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
