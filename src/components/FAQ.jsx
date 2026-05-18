const faqs = [
  ['Para qual tipo de cabelo o Cachos é indicado?', 'O Cachos é indicado para todos os tipos de curvatura, do ondulado ao crespo (2A até 4C). A fórmula foi desenvolvida para respeitar a estrutura natural de cada cacho, entregando definição e hidratação independentemente da porosidade ou espessura dos fios.'],
  ['O produto deixa o cabelo duro ou com efeito borracha?', 'Não. O Cachos usa um sistema de fixação sem gel tradicional, combinado com a Cera de Alta Afinidade, que garante modelagem leve e flexível. O resultado é cacho definido com movimento natural — sem rigidez, sem efeito plástico e sem empastamento.'],
  ['Posso usar no método L.O.C ou L.C.O?', 'Sim! O Cachos é totalmente compatível com os métodos L.O.C e L.C.O. Funciona como etapa de creme selante e de definição, potencializando o resultado quando combinado com leave-in e óleo capilar.'],
  ['Como devo aplicar para melhor resultado?', 'Aplique ainda com o cabelo molhado (úmido é o ideal), distribuindo o creme de baixo para cima por toda a extensão dos fios. Faça o plopping ou deixe secar naturalmente. Evite mexer nos cachos enquanto secam para não quebrar a definição.'],
  ['Contém sulfato, parabeno ou óleo mineral?', 'Não. O Cachos foi formulado sem sulfatos, sem parabenos e sem óleo mineral. É seguro para uso frequente, inclusive para quem segue o Método Curly Girl (CGM).'],
  ['Em quanto tempo verei resultados?', 'A maioria das clientes percebe melhora no brilho e na maciez já na primeira lavagem. A definição se torna mais consistente a partir da segunda semana de uso regular.'],
  ['Em quanto tempo recebo?', 'Despachamos em até 24h úteis. Frete grátis acima de R$200 — incluído nos kits de 2 e 3 potes. Pagamento via Pix tem 1% de desconto adicional (R$108,90 à vista no Pix).'],
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl md:text-6xl leading-[1] tracking-[-0.02em] font-medium">
            Suas perguntas,<br /><span className="italic font-light">nossas respostas.</span>
          </h2>
        </div>

        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {faqs.map(([q, a]) => (
            <details key={q}>
              <summary className="flex items-center justify-between gap-6 py-6">
                <h3 className="font-display text-xl md:text-2xl">{q}</h3>
                <span className="acc-icon text-2xl">+</span>
              </summary>
              <div className="pb-6 text-ink/70 max-w-3xl leading-relaxed">{a}</div>
            </details>
          ))}
        </div>

        <div className="text-center mt-14">
          <a href="#comprar" className="inline-flex items-center gap-3 bg-pink-brand text-paper px-8 py-5 rounded-full font-semibold tracking-[0.12em] uppercase text-[13px] hover:bg-ink transition">
            Quero meu Cachos agora →
          </a>
        </div>
      </div>
    </section>
  );
}
