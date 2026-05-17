const items = ['definição real','movimento natural','brilho sem peso','cachos no segundo dia','aroma envolvente','sem rigidez'];

function Row({ ariaHidden }) {
  return (
    <div className="flex items-center gap-10 px-10 shrink-0" aria-hidden={ariaHidden}>
      {items.map((t, i) => (
        <span key={i} className="flex items-center gap-10">
          <span>{t}</span><span>•</span>
        </span>
      ))}
    </div>
  );
}

export default function BenefitsTicker() {
  return (
    <section className="bg-pink-brand text-paper overflow-hidden">
      <div className="flex ticker-track whitespace-nowrap py-5 font-display text-2xl md:text-3xl italic">
        <Row />
        <Row ariaHidden />
      </div>
    </section>
  );
}
