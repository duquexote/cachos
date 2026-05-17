export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-14">
          <div>
            <a href="#" className="font-display text-2xl font-semibold tracking-tight text-paper">
              Cachos<span className="text-pink-brand">.</span> Ledebut
            </a>
            <p className="text-paper/60 max-w-sm mt-4 leading-relaxed text-[14px]">
              O creme queridinho entre as cabeleireiras. Definição real, sem rigidez, do 2A ao 4C.
            </p>
            <div className="flex gap-3 mt-6">
              {['IG', 'TT', 'YT', 'WA'].map((s) => (
                <a key={s} href="#" className="w-10 h-10 rounded-full border border-paper/20 flex items-center justify-center hover:bg-pink-brand hover:border-pink-brand transition">
                  {s}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-paper/50 mb-4">Produto</div>
            <ul className="space-y-3 text-[14px]">
              <li><a href="#ingredientes" className="hover:text-pink-brand transition">Ingredientes</a></li>
              <li><a href="#ciencia" className="hover:text-pink-brand transition">Ciência</a></li>
              <li><a href="#depoimentos" className="hover:text-pink-brand transition">Depoimentos</a></li>
              <li><a href="#faq" className="hover:text-pink-brand transition">FAQ</a></li>
            </ul>
          </div>
          <div>
            <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-paper/50 mb-4">Atendimento</div>
            <ul className="space-y-3 text-[14px]">
              <li><a href="#" className="hover:text-pink-brand transition">WhatsApp</a></li>
              <li><a href="#" className="hover:text-pink-brand transition">Política de troca</a></li>
              <li><a href="#" className="hover:text-pink-brand transition">Rastrear pedido</a></li>
              <li><a href="#" className="hover:text-pink-brand transition">Contato</a></li>
            </ul>
          </div>
          <div>
            <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-paper/50 mb-4">Newsletter</div>
            <p className="text-paper/60 text-[13px] mb-3">Receba 10% off na primeira compra.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 bg-transparent border border-paper/20 rounded-full px-4 py-2.5 text-[13px] placeholder:text-paper/40 focus:outline-none focus:border-pink-brand"
              />
              <button className="bg-pink-brand text-paper rounded-full px-4 py-2.5 text-[12px] tracking-[0.12em] uppercase font-semibold hover:bg-paper hover:text-ink transition">
                OK
              </button>
            </form>
          </div>
        </div>

        <div className="h-px bg-paper/10 mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[12px] text-paper/40">
          <div>© 2026 Ledebut · Cosmoética Indústria e Comércio de Cosméticos LTDA · CNPJ 26.893.879/0001-31</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-pink-brand transition">Termos</a>
            <a href="#" className="hover:text-pink-brand transition">Privacidade</a>
            <a href="#" className="hover:text-pink-brand transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
