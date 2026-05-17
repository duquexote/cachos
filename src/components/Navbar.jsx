export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur border-b border-black/5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#">
          <img src="/logo_ledebut.svg" alt="Ledebut" className="h-4" />
        </a>
        <nav className="hidden lg:flex items-center gap-9 text-[13px] tracking-[0.18em] uppercase font-medium">
          <a className="nav-link" href="#ingredientes">Ingredientes</a>
          <a className="nav-link" href="#ciencia">Ciência</a>
          <a className="nav-link" href="#depoimentos">Depoimentos</a>
          <a className="nav-link" href="#faq">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#comprar"
            className="inline-flex items-center gap-2 bg-pink-brand text-paper text-[12px] tracking-[0.18em] uppercase font-semibold rounded-full px-5 py-2.5 hover:bg-ink transition"
          >
            Comprar
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </header>
  );
}
