# BrasFestas — Catálogo Digital & E-commerce

> Catálogo digital e plataforma de conversão para a **BrasFestas**, loja especializada em artigos para festas, confeitaria, embalagens, descartáveis e personalizados DTF UV, localizada em Santana, São Paulo/SP.

---

## 🚀 Sobre o Projeto

O projeto foi construído com foco em **alta conversão via WhatsApp**, experiência visual envolvente, velocidade de carregamento e identidade visual proprietária (paleta oficial com destaque em Rosa `#FF3D68`, Laranja `#FF8C32`, Grafite `#2A2A2A` e Branco Gelo).

### Principais Recursos
- **Catálogo Interativo Completo:** 15 departamentos oficiais com fotos de produtos representativas e navegação estruturada.
- **Busca Dinâmica em Tempo Real:** Campo de busca com autocompletar e resultados ao vivo conforme o usuário digita.
- **Carrossel Horizontal de Linha Única:** Seção de *Mais Vendidos* com no máximo 4 produtos simultâneos no desktop, setas de navegação lateral dedicadas e indicadores em bolinhas (dots) paginados.
- **Sacola de Compras & Fechamento no WhatsApp:** Gerenciamento de estado de sacola com cálculo de totais, seleção de variações e montagem de mensagem formatada para envio direto ao WhatsApp da loja.
- **Compra Direta por Produto:** Botão de contato imediato para cada item no catálogo com mensagem pré-preenchida contendo nome, SKU, preço e variação.
- **Diferenciais Comerciais (Por que comemorar com a BrasFestas):** Seção limpa e moderna com os 6 pilares de valor da marca.
- **Totalmente Responsivo:** Layout adaptável para smartphones, tablets e desktops.

---

## 🛠️ Tecnologias Utilizadas

- **Framework:** [Next.js](https://nextjs.org/) (App Router & Turbopack)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/) com design system centralizado via variáveis CSS em `src/app/globals.css`
- **Gerenciamento de Estado:** [Zustand](https://github.com/pmndrs/zustand) (com persistência de sacola no `localStorage`)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Efeitos Visuais:** [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Tipografia:** [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) via `next/font`

---

## 📁 Estrutura de Pastas

```
brasfestas/
├── docs/                     # Documentação de apoio e referências visuais
├── public/
│   ├── images/
│   │   ├── banners/          # Banners promocionais e hero section
│   │   ├── categories/       # Fotos das 15 categorias oficiais
│   │   └── products/         # Imagens oficiais dos produtos em formato .webp
│   └── logo-brasfestas-horizontal.png
├── src/
│   ├── app/                  # Rotas do Next.js (App Router)
│   │   ├── categorias/       # Listagem geral e página dinâmica por categoria ([slug])
│   │   ├── contato/          # Informações de contato e localização da loja física
│   │   ├── produtos/         # Catálogo completo com filtros e página de detalhe ([slug])
│   │   ├── sobre/            # Página institucional da marca
│   │   ├── globals.css       # Design tokens, variáveis de cores e regras globais
│   │   ├── layout.tsx        # Shell da aplicação (TopBar, Navbar, Footer, CartSheet)
│   │   └── page.tsx          # Página inicial (Home)
│   ├── components/
│   │   ├── cart/             # Drawer da sacola de compras (CartSheet)
│   │   ├── categories/       # Cards de categorias
│   │   ├── home/             # Seções da página inicial (Hero, Carrossel, Diferenciais, etc.)
│   │   ├── layout/           # Componentes estruturais (Navbar, TopBar, Footer, Logo)
│   │   ├── products/         # Cards e listagens de produtos
│   │   └── ui/               # Primitivas reutilizáveis (Button, Badge, Breadcrumbs, etc.)
│   ├── data/                 # Bases de dados locais tipadas (categorias, produtos, dados da loja)
│   ├── lib/                  # Utilitários e gerador de links formatados para WhatsApp
│   └── store/                # Estado global da sacola de compras (Zustand)
└── .env.example              # Modelo de variáveis de ambiente
```

---

## ⚙️ Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com base no `.env.example`:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=5547992840652
NEXT_PUBLIC_STORE_NAME=BrasFestas
NEXT_PUBLIC_STORE_PHONE=(11) 2208-2551
NEXT_PUBLIC_STORE_EMAIL=contato@brasfestas.com.br
NEXT_PUBLIC_STORE_ADDRESS=Avenida Imirim, 2000, Santana, São Paulo/SP
NEXT_PUBLIC_STORE_CEP=02464-300
```

---

## 💻 Como Executar o Projeto

### Pré-requisitos
- Node.js 18.17 ou superior
- Gerenciador de pacotes `npm` (ou `pnpm` / `yarn`)

### 1. Instalar dependências
```bash
npm install
```

### 2. Rodar o servidor de desenvolvimento
```bash
npm run dev
```
Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### 3. Validação de tipos e lint
```bash
# Checagem de tipos com TypeScript
npx tsc --noEmit

# Verificação de lint com ESLint
npm run lint
```

### 4. Build de produção
```bash
npm run build
npm run start
```

---

## ☁️ Deploy na Vercel

O projeto está otimizado para deploy instantâneo na **Vercel**:

1. Crie um novo projeto na Vercel e importe o repositório Git.
2. O framework preset será detectado automaticamente como **Next.js**.
3. Configure as variáveis de ambiente presentes no `.env.example` nas configurações do projeto na Vercel.
4. Clique em **Deploy**.

---

## 📄 Licença

Este projeto é de uso exclusivo da marca **BrasFestas**. Todos os direitos reservados.
