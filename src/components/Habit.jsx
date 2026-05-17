const steps = [
  { n: '01', t: 'Aplique no cabelo molhado', d: 'Quantidade generosa, de baixo para cima, em toda a extensão dos fios.' },
  { n: '02', t: 'Modele com a técnica favorita', d: 'Dedoliss, fitagem, plopping, twist-out — funciona em todas.' },
  { n: '03', t: 'Deixe secar e siga seu dia', d: 'Evite mexer enquanto seca para preservar a definição.' },
];

export default function Habit() {
  return (
    <section className="bg-soft py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square rounded-[28px] overflow-hidden">
          <img src="/antes_depois.jpeg" alt="Antes e depois do uso do Cachos Ledebut" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="max-w-xl">
          <h2 className="font-display text-4xl md:text-6xl leading-[1] tracking-[-0.02em] font-medium mb-6">
            Um hábito simples,<br /><span className="italic font-light">que muda tudo.</span>
          </h2>
          <p className="text-ink/70 text-lg leading-relaxed mb-8">
            Aplique no cabelo úmido após o banho, finalize com a técnica que preferir e siga seu dia.
            Sem secador obrigatório, sem etapa extra, sem complicação.
          </p>
          <ol className="space-y-4 text-[15px]">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-4">
                <span className="font-mono text-pink-brand text-[12px] mt-1">{s.n}</span>
                <div>
                  <div className="font-semibold">{s.t}</div>
                  <div className="text-ink/60">{s.d}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
