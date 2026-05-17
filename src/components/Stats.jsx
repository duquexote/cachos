const stats = [
  ['Cachos mais definidos', '94,3%', 'após 7 dias de uso'],
  ['Menos frizz', '93,2%', 'redução visível'],
  ['Toque mais macio', '92,6%', 'após 14 dias'],
  ['Recompraria', '92,3%', 'das entrevistadas'],
];

export default function Stats() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display text-4xl md:text-6xl leading-[1] tracking-[-0.02em] font-medium">
            9 em cada 10 sentem<br /><span className="italic font-light">a diferença na primeira semana.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
          {stats.map(([label, val, sub]) => (
            <div key={label} className="bg-soft rounded-3xl p-4 lg:p-7">
              <div className="font-mono text-[10px] lg:text-[11px] tracking-[0.14em] lg:tracking-[0.18em] uppercase text-ink/50 mb-3">{label}</div>
              <div className="font-mono text-3xl lg:text-5xl text-pink-brand font-semibold">{val}</div>
              <div className="text-[12px] text-ink/50 mt-3">{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
