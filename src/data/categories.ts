export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  iconName: string; // Nome do ícone da Lucide React
  image: string;    // Imagem representativa da categoria
  featured?: boolean;
}

export const CATEGORIES: Category[] = [
  {
    id: "baloes",
    name: "Balões e Acessórios",
    slug: "baloes",
    description: "Balões de látex, metalizados, candy color, temáticos, além de varetas e suportes para montagem e fixação.",
    iconName: "CircleDot",
    image: "/images/categories/baloes.jpg",
    featured: true,
  },
  {
    id: "bandejas-suportes",
    name: "Bandejas e Boleiras",
    slug: "bandejas-e-suportes",
    description: "Bandejas decorativas, boleiras, suportes de doces em acrílico e MDF.",
    iconName: "Layers",
    image: "/images/categories/bandejas-suportes.jpg",
    featured: true,
  },
  {
    id: "confeitaria",
    name: "Confeitaria",
    slug: "confeitaria",
    description: "Corantes em gel, pós decorativos, confeitos e acessórios culinários.",
    iconName: "CakeSlice",
    image: "/images/categories/confeitaria.jpg",
    featured: true,
  },
  {
    id: "copos-tacas",
    name: "Copos e Taças",
    slug: "copos-e-tacas",
    description: "Copos acrílicos, taças de champanhe, copos long drink e térmicos.",
    iconName: "Wine",
    image: "/images/categories/copos-e-tacas.jpg",
  },
  {
    id: "descartaveis",
    name: "Descartáveis",
    slug: "descartaveis",
    description: "Pratos, garfos, potes retangulares e redondos para sobremesas e festas.",
    iconName: "Utensils",
    image: "/images/categories/descartaveis.jpg",
  },
  {
    id: "decoracao",
    name: "Decoração",
    slug: "decoracao",
    description: "Cortinas metalizadas, faixas decorativas, saias de mesa, toalhas em TNT e artigos para ambientação de festas.",
    iconName: "Sparkles",
    image: "/images/categories/decoracao.jpg",
    featured: true,
  },
  {
    id: "dtf-uv",
    name: "Personalizados DTF UV",
    slug: "dtf-uv-personalizados",
    description: "Impressões DTF UV de alta aderência aplicadas em copos, garrafas e brindes.",
    iconName: "Printer",
    image: "/images/categories/dtf-uv-personalizados.jpg",
    featured: true,
  },
  {
    id: "eva",
    name: "E.V.A.",
    slug: "eva",
    description: "Placas e folhas de E.V.A. lisas, estampadas e com glitter.",
    iconName: "Grid",
    image: "/images/categories/eva.jpg",
  },
  {
    id: "embalagens",
    name: "Embalagens e Caixas",
    slug: "embalagens",
    description: "Caixas de presente, laços prontos, fitas decorativas e sacolas.",
    iconName: "Package",
    image: "/images/categories/embalagens.jpg",
    featured: true,
  },
  {
    id: "forminhas",
    name: "Forminhas para Doces",
    slug: "forminhas",
    description: "Forminhas 4 pétalas, tecido, papel seda e modelos especiais para docinhos.",
    iconName: "Flower2",
    image: "/images/categories/forminhas.jpg",
  },
  {
    id: "halloween",
    name: "Halloween e Festas Temáticas",
    slug: "halloween-e-tematicos",
    description: "Artigos aterrorizantes, teias artificiais, copos de caveira e fantasias.",
    iconName: "Ghost",
    image: "/images/categories/halloween-e-tematicos.jpg",
  },
  {
    id: "sazonais-natal",
    name: "Sazonais e Natal",
    slug: "sazonais-natal",
    description: "Bolas de natal, ponteiras, enfeites para árvores e artigos de fim de ano.",
    iconName: "Gift",
    image: "/images/categories/sazonais-natal.jpg",
  },
  {
    id: "vasos-flores",
    name: "Vasos e Flores Artificiais",
    slug: "vasos-e-flores",
    description: "Vasos plásticos decorativos estilo grego/romano e folhagens artificiais.",
    iconName: "Flower",
    image: "/images/categories/vasos-e-flores.jpg",
  },
  {
    id: "festas-tematicas",
    name: "Festas Temáticas",
    slug: "festas-tematicas",
    description: "Kits decorativos, painéis, velas e artigos para aniversários e temas infantis.",
    iconName: "PartyPopper",
    image: "/images/categories/festas-tematicas.jpg",
    featured: true,
  },
  {
    id: "velas-e-topos-de-bolo",
    name: "Velas e Topos de bolo",
    slug: "velas-e-topos-de-bolo",
    description: "Velas numerais, velas decorativas, faíscas e topos de bolo temáticos e personalizados para aniversários.",
    iconName: "Flame",
    image: "/images/categories/velas-e-topos-de-bolo.jpg",
  },
];
