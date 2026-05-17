const reviews = [
  { quote: 'Cabelo definido até o terceiro dia, sério. Nunca achei isso em um creme.', name: 'Camila L.', ago: 'há 2 semanas' },
  { quote: 'Era cético com creme de 1L. Esse mudou minha rotina e a textura é viciante.', name: 'Rafa M.', ago: 'há 1 mês' },
  { quote: 'Substituiu leave-in + ativador + creme de pentear. Economia real.', name: 'Júlia S.', ago: 'há 3 dias' },
];

export default function CustomerReviews() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display text-4xl md:text-6xl leading-[1] tracking-[-0.02em] font-medium">
            23 mil avaliações.<br /><span className="italic font-light">Uma única opinião.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <article key={i} className="bg-paper rounded-3xl p-7">
              <div className="text-pink-brand text-lg mb-3">★★★★★</div>
              <p className="font-display text-[22px] leading-snug mb-5">"{r.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full slot slot--pink !text-[8px]">{r.name.split(' ').map(s => s[0]).join('')}</div>
                <div>
                  <div className="font-semibold text-[13px]">{r.name}</div>
                  <div className="text-ink/50 text-[12px]">Verificada · {r.ago}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-10">
          <span className="w-6 h-1.5 rounded-full bg-pink-brand" />
          <span className="w-1.5 h-1.5 rounded-full bg-ink/20" />
          <span className="w-1.5 h-1.5 rounded-full bg-ink/20" />
          <span className="w-1.5 h-1.5 rounded-full bg-ink/20" />
        </div>
      </div>
    </section>
  );
}
