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
    name: "Balões e Bexigas",
    slug: "baloes",
    description: "Balões de látex, metalizados, candy color e temáticos.",
    iconName: "CircleDot",
    image: "/images/categories/baloes.jpg",
    featured: true,
  },
  {
    id: "varetas-acessorios",
    name: "Varetas e Suportes para Balão",
    slug: "varetas-e-acessorios",
    description: "Varetas pega-balão, suportes de chão e pontos de fixação.",
    iconName: "Maximize2",
    image: "/images/categories/varetas-e-acessorios.jpg",
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
    id: "decoracao-bolos",
    name: "Decoração e Topos de Bolo",
    slug: "decoracao-e-topos-de-bolo",
    description: "Topos de bolo em acrílico, papelaria personalizada e apliques.",
    iconName: "Sparkles",
    image: "/images/categories/decoracao-e-topos-de-bolo.jpg",
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
    id: "velas",
    name: "Velas de Aniversário",
    slug: "velas",
    description: "Velas numerais, estrelinhas de faísca, velas mágicas e decoradas.",
    iconName: "Flame",
    image: "/images/categories/velas.jpg",
  },
];
