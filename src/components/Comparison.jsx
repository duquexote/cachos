const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mx-auto">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const rows = [
  ['Funciona do 2A ao 4C', <CheckIcon />, 'parcial', 'parcial', '×'],
  ['Definição sem endurecer', <CheckIcon />, '×', '×', '×'],
  ['Controle de frizz duradouro', <CheckIcon />, '×', 'endurece', '×'],
  ['Sem efeito borracha', <CheckIcon />, '×', '×', '×'],
  ['Óleo de Coco + Aloe Vera', <CheckIcon />, '×', '×', '×'],
  ['Sem sulfato, sem parabeno', <CheckIcon />, 'depende', '×', '×'],
];

export default function Comparison() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-6xl leading-[1] tracking-[-0.02em] font-medium">
            Tudo o que um creme<br /><span className="italic font-light">deveria fazer</span> — e mais um pouco.
          </h2>
        </div>

        <div className="overflow-x-auto -mx-6 px-6 scroll-hide">
          <table className="w-full min-w-[760px] border-collapse">
            <thead>
              <tr>
                <th className="text-left p-4 text-[11px] tracking-[0.18em] uppercase text-ink/50 font-medium">Atributo</th>
                <th className="p-4 text-[11px] tracking-[0.18em] uppercase font-semibold rounded-tl-2xl rounded-tr-2xl bg-ink text-paper">
                  <div className="font-display text-base normal-case tracking-tight">Cachos Ledebut</div>
                </th>
                <th className="p-4 text-[11px] tracking-[0.18em] uppercase text-ink/50 font-medium">Outros cremes</th>
                <th className="p-4 text-[11px] tracking-[0.18em] uppercase text-ink/50 font-medium">Géis convencionais</th>
                <th className="p-4 text-[11px] tracking-[0.18em] uppercase text-ink/50 font-medium">Ativador comum</th>
              </tr>
            </thead>
            <tbody className="text-[14px]">
              {rows.map((r, i) => (
                <tr key={i} className="border-t border-ink/10">
                  <td className="p-4 text-ink/80">{r[0]}</td>
                  <td className={`p-4 text-center bg-ink/95 text-pink-brand font-semibold ${i === rows.length - 1 ? 'rounded-b-2xl' : ''}`}>{r[1]}</td>
                  <td className="p-4 text-center text-ink/40">{r[2]}</td>
                  <td className="p-4 text-center text-ink/40">{r[3]}</td>
                  <td className="p-4 text-center text-ink/40">{r[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center mt-10">
          <a href="#comprar" className="inline-flex items-center gap-3 bg-pink-brand text-paper px-7 py-4 rounded-full font-semibold tracking-[0.12em] uppercase text-[13px] hover:bg-ink transition">
            Garantir meu Cachos →
          </a>
        </div>
      </div>
    </section>
  );
}
