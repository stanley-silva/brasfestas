# BrasFestas — E-Commerce & Digital Catalog

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Zustand](https://img.shields.io/badge/Zustand-State-orange?style=flat-square)](https://github.com/pmndrs/zustand)

A high-performance digital catalog and direct-to-WhatsApp e-commerce platform developed for **BrasFestas**, a party supplies, packaging, confectionery, and custom DTF UV printing brand based in São Paulo, Brazil.

---

## ⚡ Overview & Features

- **Interactive Product Catalog**: Comprehensive departmental navigation across 15 categories with category-level filtering and product search.
- **Real-Time Search**: Instant search with typeahead autocompletion and dynamic product matching.
- **Featured Product Showcase**: Optimized single-row carousel with dedicated navigation controls and pagination indicators.
- **WhatsApp Order Pipeline**: Persistent shopping bag (`localStorage`) with dynamic order formatting for direct WhatsApp checkout.
- **Design System & Performance**: Custom brand theme with Tailwind CSS, responsive layouts, Next.js image optimization, and full TypeScript type safety.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom CSS Design Tokens
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Icons & UI**: [Lucide React](https://lucide.dev/), [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Typography**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) via `next/font`

---

## 📂 Project Structure

```text
brasfestas/
├── public/
│   ├── images/
│   │   ├── categories/       # Category banners & departmental assets
│   │   └── products/         # Product catalog photography (.webp)
│   └── logo-brasfestas-horizontal.png
├── src/
│   ├── app/                  # Next.js App Router (pages & global layouts)
│   ├── components/           # Modular UI components (cart, home, layout, products)
│   ├── data/                 # Strongly-typed product and category datasets
│   ├── lib/                  # Helper utilities and WhatsApp link builders
│   └── store/                # Zustand global state stores
└── .env.example              # Environment variables template
```

---

## 🚀 Quickstart

### 1. Installation

```bash
npm install
```

### 2. Environment Setup

Copy `.env.example` to `.env.local` and configure your store settings:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=5547992840652
NEXT_PUBLIC_STORE_NAME=BrasFestas
NEXT_PUBLIC_STORE_PHONE=(11) 2208-2551
NEXT_PUBLIC_STORE_EMAIL=contato@brasfestas.com.br
NEXT_PUBLIC_STORE_ADDRESS=Avenida Imirim, 2000, Santana, São Paulo/SP
NEXT_PUBLIC_STORE_CEP=02464-300
```

### 3. Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

---

## 🔧 Build & Code Quality

```bash
# Type checking
npx tsc --noEmit

# Linting
npm run lint

# Production build
npm run build
```

---

## 📄 License

Proprietary. All rights reserved by **BrasFestas**.
