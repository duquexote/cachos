const items = [
  'Frete grátis acima de R$200',
  'Parcele em até 12x sem juros',
  'Pix com 1% de desconto',
  'Brinde grátis em todos os kits',
  'Aprovado por 23.427 clientes',
];

function Row({ ariaHidden }) {
  return (
    <div className="flex shrink-0 items-center gap-8 px-8" aria-hidden={ariaHidden}>
      {items.map((t, i) => (
        <span key={i} className="flex items-center gap-8">
          <span>{t}</span>
          <span className="text-pink-brand">✦</span>
        </span>
      ))}
    </div>
  );
}

export default function AnnouncementBar() {
  return (
    <div className="bg-ink text-paper overflow-hidden">
      <div className="flex marquee-track whitespace-nowrap py-2.5 text-[11px] tracking-[0.22em] uppercase font-medium">
        <Row />
        <Row ariaHidden />
      </div>
    </div>
  );
}
