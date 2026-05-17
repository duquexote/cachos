# Cachos Ledebut — Landing Page

Landing page para o **Cachos Creme de Pentear 1L (Ledebut Grupo VIP)** construída com **Vite + React + Tailwind CSS**.

## Stack

- ⚡ Vite 6
- ⚛️ React 18
- 🎨 Tailwind CSS 3
- 🔤 Fontes: Fraunces (display) + Inter (corpo) + JetBrains Mono (números)
- 🎨 Paleta: Branco `#FFFFFF`, Preto `#0a0a0a`, Rosa `#FF1493`

## Como rodar

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
  main.jsx            # entry point
  App.jsx             # monta todas as seções em ordem
  index.css           # Tailwind + utilities customizadas (.slot, .nav-link, .marquee)
  components/
    AnnouncementBar.jsx     # ticker preto topo
    Navbar.jsx              # navegação sticky
    Hero.jsx                # headline + lista de benefícios + foto principal
    BenefitsTicker.jsx      # marquee rosa
    ExpertTestimonials.jsx  # 4 cards de cabeleireiras
    Comparison.jsx          # tabela vs concorrentes
    Ingredients.jsx         # 4 ativos + 3 sistemas (accordion)
    Habit.jsx               # 3 passos de uso
    Science.jsx             # validação com 4 stats grandes
    Purchase.jsx            # 3 ofertas (1/2/3 potes)
    CustomerReviews.jsx     # depoimentos de clientes
    Stats.jsx               # cards de % grandes
    Technical.jsx           # ficha técnica completa
    FAQ.jsx                 # 7 perguntas
    Footer.jsx              # rodapé com newsletter
```

## Onde colocar suas imagens

Todos os lugares onde você precisa subir foto aparecem como blocos cinza/rosa com texto em maiúsculas (classes `.slot`). Procure por `<div className="slot ...">` ou `slot--pink` / `slot--dark` para encontrá-los.

Lista do que você precisa fornecer:

1. **Hero** — foto principal do frasco 1L (4:5)
2. **Hero side** — 3 mini fotos (antes/depois, textura, modelo aplicando)
3. **Depoimentos profissionais** — 4 retratos verticais
4. **Ingredientes** — 4 fotos de cada ativo (coco, aloe, cera, fixador)
5. **Hábito/Ritual** — 1 foto de aplicação
6. **Ciência** — 1 background macro + 1 retrato
7. **Compra** — fotos dos kits (1, 2 e 3 potes)
8. **Reviews** — 3 avatares de clientes

Substitua cada `<div className="slot ...">PLACEHOLDER</div>` por `<img src="..." alt="..." className="absolute inset-0 w-full h-full object-cover" />` quando tiver as fotos.

## Customização rápida

- **Cor rosa**: altere `pink.brand` em `tailwind.config.js`
- **Fontes**: altere o `<link>` de Google Fonts em `index.html` + `fontFamily` no `tailwind.config.js`
- **Preços**: edite o array `kits` em `src/components/Purchase.jsx`
- **FAQ**: edite o array `faqs` em `src/components/FAQ.jsx`
