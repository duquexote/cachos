const kits = [
  { id: 1, title: '1 Pote Cachos 1L', sub: '+ Brinde grátis', from: 'R$110,00', price: 'R$69,90', total: null, parc: 'ou 12x de R$6,99 sem juros', off: '-36%', highlight: false, cta: 'Comprar 1 pote', img: '/1_pote.webp' },
  { id: 2, title: '2 Potes Cachos 1L', sub: '+ Brinde grátis · 🚚 FRETE GRÁTIS', from: 'R$240,00', price: 'R$59,99', total: 'R$119,98', parc: 'ou 12x de R$11,99 sem juros', off: '-45%', highlight: true, cta: 'Quero o kit 2 potes', img: '/2_potes.jpeg' },
  { id: 3, title: '3 Potes Cachos 1L', sub: '+ Brinde grátis · 🚚 FRETE GRÁTIS', from: 'R$330,00', price: 'R$59,99', total: 'R$179,97', parc: 'ou 12x de R$17,99 sem juros', off: '-45%', highlight: false, cta: 'Comprar 3 potes', img: '/3_potes.jpeg' },
];

function Kit({ k }) {
  const dark = k.highlight;
  return (
    <article className={`rounded-3xl p-6 flex flex-col relative ${dark ? 'bg-ink text-paper -mt-2 md:-mt-6 ring-4 ring-paper/40' : 'bg-paper text-ink'}`}>
      {dark && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-paper text-pink-brand text-[10px] tracking-[0.2em] uppercase font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
          🔥 Mais escolhido
        </div>
      )}
      <div className={`flex items-center justify-between mb-4 ${dark ? 'mt-2' : ''}`}>
        <span className={`font-mono text-[11px] tracking-[0.18em] uppercase ${dark ? 'text-paper/60' : 'text-ink/50'}`}>Kit {k.id} pote{k.id > 1 ? 's' : ''}</span>
        <span className={`text-[10px] tracking-[0.18em] uppercase font-semibold px-2 py-1 rounded ${dark ? 'bg-pink-brand text-paper' : 'bg-ink text-pink-brand'}`}>{k.off}</span>
      </div>
      <div className="aspect-square rounded-2xl overflow-hidden mb-5">
        <img src={k.img} alt={k.title} className="w-full h-full object-cover" />
      </div>
      <h3 className="font-display text-2xl leading-tight mb-1">{k.title}</h3>
      <p className={`text-[13px] mb-4 ${dark ? 'text-pink-brand font-semibold' : 'text-ink/60'}`}>{k.sub}</p>
      <div className="flex items-end gap-2 mb-1">
        <div className={`font-mono text-[13px] line-through ${dark ? 'text-paper/40' : 'text-ink/40'}`}>{k.from}</div>
      </div>
      <div className="font-mono text-3xl font-semibold mb-1">{k.price}<span className={`text-[14px] font-normal ${dark ? 'text-paper/50' : 'text-ink/50'}`}>/un</span></div>
      {k.total && <div className={`text-[13px] mb-1 ${dark ? 'text-paper/70' : 'text-ink/60'}`}>Total: {k.total}</div>}
      <div className={`text-[13px] mb-5 ${dark ? 'text-paper/50' : 'text-ink/60'}`}>{k.parc}</div>
      <a href="#" className={`mt-auto block text-center rounded-full px-6 py-4 font-semibold tracking-[0.12em] uppercase text-[13px] transition ${dark ? 'bg-pink-brand text-paper hover:bg-paper hover:text-ink' : 'bg-ink text-paper hover:bg-pink-brand'}`}>
        {k.cta}
      </a>
    </article>
  );
}

export default function Purchase() {
  return (
    <section id="comprar" className="bg-pink-brand text-paper py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display text-4xl md:text-6xl leading-[1] tracking-[-0.02em] font-medium mb-5">
            Quanto mais potes,<br /><span className="italic font-light">maior o desconto.</span>
          </h2>
          <p className="text-paper/85 text-lg leading-relaxed max-w-xl mx-auto">
            Todas as opções incluem brinde grátis. Kits a partir de 2 potes ganham FRETE GRÁTIS.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-5 mb-10">
          {kits.map((k) => <Kit key={k.id} k={k} />)}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11px] tracking-[0.18em] uppercase text-paper/80">
          <span className="flex items-center gap-2"><span>💳</span> Pix com 1% off (R$108,90)</span>
          <span>·</span>
          <span className="flex items-center gap-2"><span>🔒</span> Pagamento 100% seguro</span>
          <span>·</span>
          <span className="flex items-center gap-2"><span>📦</span> Envio em até 24h</span>
        </div>
      </div>
    </section>
  );
}
