export interface ProductVariant {
  id: string;
  name: string;
  type: "color" | "size" | "quantity" | "model";
  priceDiff?: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
  price: number;
  originalPrice?: number;
  description: string;
  shortDescription?: string;
  images: string[];
  tags: string[]; // ex: "Mais Vendido", "Lançamento", "Pronta Entrega"
  variants?: ProductVariant[];
  featured?: boolean;
  sku: string;
}

export const PRODUCTS: Product[] = [
  // 1. Balões e Bexigas (baloes)
  {
    id: "bal-01",
    name: "Balão Metalizado Letras e Números 40cm e 1m",
    slug: "balao-metalizado-letras-e-numeros",
    categoryId: "baloes",
    price: 14.90,
    originalPrice: 18.90,
    sku: "BAL-MET-01",
    description: "Balões metalizados de alta durabilidade e brilho intenso. Ideais para aniversários, formaturas e datas comemorativas. Podem ser inflados com ar convencional ou gás hélio para flutuação.",
    shortDescription: "Brilho espelhado e acabamento profissional em números e letras.",
    images: [
      "/images/products/bal_es_metalizados_1x.webp",
    ],
    tags: ["Mais Vendido", "Pronta Entrega"],
    featured: true,
    variants: [
      { id: "v1", name: "Dourado Ouro 40cm", type: "color" },
      { id: "v2", name: "Prata Espelhado 40cm", type: "color" },
      { id: "v3", name: "Rose Gold 40cm", type: "color" },
      { id: "v4", name: "Dourado Ouro 1 Metro", type: "size", priceDiff: 14.0 },
      { id: "v5", name: "Prata Espelhado 1 Metro", type: "size", priceDiff: 14.0 },
    ],
  },
  {
    id: "bal-02",
    name: "Kit Balões Látex Candy Color 9 Polegadas (Pct com 50 un)",
    slug: "kit-baloes-latex-candy-color-50un",
    categoryId: "baloes",
    price: 28.50,
    originalPrice: 34.00,
    sku: "BAL-CND-02",
    description: "Balões de látex premium com toque aveludado e cores pastel (candy colors). Perfeitos para arcos desconstruídos, guirlandas e decoração delicada de festas infantis e chá revelação.",
    shortDescription: "Cores suaves da moda em látex biodegradável resistente.",
    images: [
      "/images/products/bal_es_latex_1x.webp",
    ],
    tags: ["Mais Vendido"],
    featured: true,
    variants: [
      { id: "c1", name: "Mix Pastel (Sortido)", type: "color" },
      { id: "c2", name: "Rosa Bebê Pastel", type: "color" },
      { id: "c3", name: "Azul Bebê Pastel", type: "color" },
      { id: "c4", name: "Amarelo Manteiga Pastel", type: "color" },
      { id: "c5", name: "Verde Menta Pastel", type: "color" },
    ],
  },
  {
    id: "bal-03",
    name: "Balão Bubble Transparente Cristal 24 Polegadas",
    slug: "balao-bubble-transparente-cristal-24",
    categoryId: "baloes",
    price: 22.00,
    sku: "BAL-BUB-03",
    description: "Balão transparente de silicone elástico estilo cristal (Bubble). Permite personalização interna com confetes, penas, balões menores ou adesivagem externa para arranjos flutuantes sofisticados.",
    shortDescription: "Totalmente esférico e ultra transparente para arranjos personalizados.",
    images: [
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&auto=format&fit=crop&q=80",
    ],
    tags: ["Lançamento", "Pronta Entrega"],
    variants: [
      { id: "b1", name: "Avulso sem inflar (24 polegadas)", type: "size" },
      { id: "b2", name: "Pacote com 5 unidades", type: "quantity", priceDiff: 75.0 },
    ],
  },

  // 2. Varetas e Suportes para Balão (varetas-acessorios)
  {
    id: "var-01",
    name: "Vareta Pega Balão Transparente com Copinho (Pacote com 50 un)",
    slug: "vareta-pega-balao-transparente-50un",
    categoryId: "varetas-acessorios",
    price: 19.90,
    sku: "VAR-PEG-01",
    description: "Varetas plásticas reforçadas com copinho fixador para sustentação firme de balões de látex ou metalizados. Essencial para distribuição de balões e montagem de centros de mesa.",
    shortDescription: "Hastes reforçadas de 30cm com copo para fixação rápida.",
    images: [
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&auto=format&fit=crop&q=80",
    ],
    tags: ["Pronta Entrega"],
    variants: [
      { id: "v1", name: "Transparente Cristal (50 un)", type: "quantity" },
      { id: "v2", name: "Branco Neve (50 un)", type: "color" },
      { id: "v3", name: "Colorido Sortido (50 un)", type: "color" },
    ],
  },
  {
    id: "var-02",
    name: "Suporte de Chão para Balões - Árvore Torre 7 Hastes",
    slug: "suporte-de-chao-para-baloes-torre-7-hastes",
    categoryId: "varetas-acessorios",
    price: 38.90,
    originalPrice: 45.00,
    sku: "VAR-TOR-02",
    description: "Estrutura de mesa e chão com base pesada e 7 hastes de diferentes alturas. Simula o efeito de gás hélio com muita economia e estabilidade.",
    shortDescription: "Efeito visual flutuante sem precisar de gás hélio.",
    images: [
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&auto=format&fit=crop&q=80",
    ],
    tags: ["Mais Vendido"],
    variants: [
      { id: "t1", name: "Base Acrílica 7 Hastes (70cm)", type: "size" },
      { id: "t2", name: "Base de Chão 13 Hastes (130cm)", type: "size", priceDiff: 24.0 },
    ],
  },

  // 3. Bandejas e Boleiras (bandejas-suportes)
  {
    id: "ban-01",
    name: "Boleira Pé Alto Torneada em Acrílico Resistente 25cm",
    slug: "boleira-pe-alto-acrilico-25cm",
    categoryId: "bandejas-suportes",
    price: 49.90,
    originalPrice: 59.90,
    sku: "BAN-BOL-01",
    description: "Boleira com pé torneado desmontável de fácil higienização e armazenamento. Acabamento brilhante e resistente para suportar bolos cenográficos e bolos verdadeiros com segurança.",
    shortDescription: "Destaque para o bolo principal na mesa decorada.",
    images: [
      "/images/products/boleira_pe_alto_1x.webp",
    ],
    tags: ["Mais Vendido", "Pronta Entrega"],
    featured: true,
    variants: [
      { id: "cor1", name: "Branco Pérola", type: "color" },
      { id: "cor2", name: "Dourado Metalizado", type: "color", priceDiff: 8.0 },
      { id: "cor3", name: "Rosa Bebê", type: "color" },
      { id: "cor4", name: "Vermelho Rubi", type: "color" },
    ],
  },
  {
    id: "ban-02",
    name: "Trio de Bandejas Retangulares Festivas com Borda Rendada",
    slug: "trio-bandejas-retangulares-borda-rendada",
    categoryId: "bandejas-suportes",
    price: 54.00,
    sku: "BAN-TRI-02",
    description: "Jogo com 3 bandejas em tamanhos P, M e G com detalhe rendado no contorno. Essencial para dispor brigadeiros gourmet, trufas, docinhos e lembrancinhas de forma harmoniosa.",
    shortDescription: "Composição elegante para doces finos e personalizados.",
    images: [
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&auto=format&fit=crop&q=80",
    ],
    tags: ["Pronta Entrega"],
    variants: [
      { id: "b1", name: "Kit Branco Rendado (3 peças)", type: "model" },
      { id: "b2", name: "Kit Dourado Champagne (3 peças)", type: "model", priceDiff: 10.0 },
      { id: "b3", name: "Kit Rosa Chiclete (3 peças)", type: "model" },
    ],
  },

  // 4. Confeitaria (confeitaria)
  {
    id: "cnf-01",
    name: "Kit Corantes em Gel Concentrado Profissional (6 Cores)",
    slug: "kit-corantes-gel-concentrado-6-cores",
    categoryId: "confeitaria",
    price: 36.90,
    originalPrice: 42.00,
    sku: "CNF-COR-01",
    description: "Corantes alimentícios em gel de altíssima concentração e rendimento. Não alteram o sabor nem a consistência de chantilly, glacê, pasta americana e massas de bolo.",
    shortDescription: "Cores vivas e alto rendimento para chantilly e pasta americana.",
    images: [
      "/images/products/kit_corante_concentrado_1x.webp",
    ],
    tags: ["Mais Vendido", "Pronta Entrega"],
    featured: true,
    variants: [
      { id: "v1", name: "Paleta Cores Vivas (Preto, Vermelho, Azul, Amarelo, Verde, Rosa)", type: "model" },
      { id: "v2", name: "Paleta Tons Pastel / Candy", type: "model" },
    ],
  },
  {
    id: "cnf-02",
    name: "Pó Decorativo Brilho Metalizado Dourado Ouro 10g",
    slug: "po-decorativo-brilho-metalizado-dourado",
    categoryId: "confeitaria",
    price: 18.50,
    sku: "CNF-PO-02",
    description: "Pó fino decorativo cintilante para acabamento luminoso em doces finos, bombons, macarons e pintura em bolos com auxílio de álcool de cereais.",
    shortDescription: "Efeito ouro metálico luxuoso para bolos e brigadeiros.",
    images: [
      "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&auto=format&fit=crop&q=80",
    ],
    tags: ["Pronta Entrega"],
    variants: [
      { id: "po1", name: "Dourado Ouro Nobre 10g", type: "color" },
      { id: "po2", name: "Prata Diamante 10g", type: "color" },
      { id: "po3", name: "Cobre Rose 10g", type: "color" },
      { id: "po4", name: "Pérola Cintilante 10g", type: "color" },
    ],
  },

  // 5. Copos e Taças (copos-tacas)
  {
    id: "cop-01",
    name: "Taça de Champanhe Acrílico Premium 180ml (Kit com 10 un)",
    slug: "taca-champanhe-acrilico-premium-10un",
    categoryId: "copos-tacas",
    price: 39.90,
    sku: "COP-TAC-01",
    description: "Taças estilo flute em poliestireno virgem transparente e rígido. Borda arredondada suave e base estável para brindar com elegância em casamentos, formaturas e réveillon.",
    shortDescription: "Aspecto semelhante a vidro com segurança para eventos.",
    images: [
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&auto=format&fit=crop&q=80",
    ],
    tags: ["Mais Vendido"],
    variants: [
      { id: "t1", name: "Cristal Transparente (10 un)", type: "color" },
      { id: "t2", name: "Dourado com Borda Ouro (10 un)", type: "color", priceDiff: 9.0 },
      { id: "t3", name: "Rose Gold Translúcido (10 un)", type: "color", priceDiff: 9.0 },
    ],
  },
  {
    id: "cop-02",
    name: "Copo Long Drink Neon / Translúcido 350ml (Pct com 25 un)",
    slug: "copo-long-drink-neon-350ml-25un",
    categoryId: "copos-tacas",
    price: 34.50,
    originalPrice: 40.00,
    sku: "COP-LON-02",
    description: "Copos long drink resistentes ideais para drinks, refrigerantes e personalização com transfers e DTF UV. Brilham sob luz negra na versão neon.",
    shortDescription: "Perfeito para baladas, festas de 15 anos e formaturas.",
    images: [
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&auto=format&fit=crop&q=80",
    ],
    tags: ["Pronta Entrega"],
    variants: [
      { id: "c1", name: "Rosa Neon", type: "color" },
      { id: "c2", name: "Verde Neon", type: "color" },
      { id: "c3", name: "Laranja Neon", type: "color" },
      { id: "c4", name: "Cristal Translúcido", type: "color" },
    ],
  },

  // 6. Descartáveis (descartaveis)
  {
    id: "des-01",
    name: "Pratos Reforçados 15cm para Sobremesa e Bolo (Pct com 50 un)",
    slug: "pratos-reforcados-15cm-sobremesa-50un",
    categoryId: "descartaveis",
    price: 15.90,
    sku: "DES-PRA-01",
    description: "Pratos plásticos resistentes que não dobram na mão. Ideais para servir pedaços de bolo, tortas e salgadinhos com praticidade e segurança para convidados.",
    shortDescription: "Não quebra e não enverga ao segurar bolos e tortas.",
    images: [
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80",
    ],
    tags: ["Pronta Entrega"],
    variants: [
      { id: "p1", name: "Branco Clássico (50 un)", type: "color" },
      { id: "p2", name: "Preto Nobre (50 un)", type: "color" },
      { id: "p3", name: "Dourado Festivo (50 un)", type: "color", priceDiff: 4.0 },
    ],
  },
  {
    id: "des-02",
    name: "Garfos e Colheres para Sobremesa Linha Master Luxo (Pct 50 un)",
    slug: "talheres-sobremesa-master-luxo-50un",
    categoryId: "descartaveis",
    price: 12.90,
    sku: "DES-TAL-02",
    description: "Talheres descartáveis de alta gramatura com design anatômico moderno. Alta resistência ao corte e sem rebarbas.",
    shortDescription: "Talheres reforçados de alta qualidade para doces e salgados.",
    images: [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop&q=80",
    ],
    tags: ["Pronta Entrega"],
    variants: [
      { id: "t1", name: "Garfos Brancos (50 un)", type: "model" },
      { id: "t2", name: "Colheres Brancas (50 un)", type: "model" },
      { id: "t3", name: "Garfos Metalizados Prata (50 un)", type: "model", priceDiff: 9.0 },
    ],
  },

  // 7. Decoração e Topos de Bolo (decoracao-bolos)
  {
    id: "dec-01",
    name: "Topo de Bolo Personalizado Parabéns Acrílico Espelhado",
    slug: "topo-de-bolo-parabens-acrilico-espelhado",
    categoryId: "decoracao-bolos",
    price: 24.90,
    originalPrice: 29.90,
    sku: "DEC-TOP-01",
    description: "Topo de bolo sofisticado cortado a laser em acrílico 2mm espelhado. Acabamento fino que valoriza fotos do corte do bolo. Higiênico e reutilizável.",
    shortDescription: "Brilho e elegância máxima para finalizar bolos comemorativos.",
    images: [
      "/images/products/topo_de_bolo_1x.webp",
    ],
    tags: ["Mais Vendido", "Pronta Entrega"],
    featured: true,
    variants: [
      { id: "tp1", name: "Dourado Espelhado (Parabéns)", type: "color" },
      { id: "tp2", name: "Prata Espelhado (Parabéns)", type: "color" },
      { id: "tp3", name: "Rose Gold Espelhado (Parabéns)", type: "color" },
    ],
  },
  {
    id: "dec-02",
    name: "Kit Topo de Bolo Papelaria 3D em Camadas Temático",
    slug: "kit-topo-de-bolo-papelaria-3d-camadas",
    categoryId: "decoracao-bolos",
    price: 22.00,
    sku: "DEC-PAP-02",
    description: "Topos em papel fotográfico e color plus em várias camadas de relevo 3D. Inclui faixa com nome, elementos de apoio e canudo decorado.",
    shortDescription: "Camadas volumétricas temáticas para aniversários infantis e adultos.",
    images: [
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&auto=format&fit=crop&q=80",
    ],
    tags: ["Lançamento"],
    variants: [
      { id: "tm1", name: "Tema Jardim Encantado / Borboletas", type: "model" },
      { id: "tm2", name: "Tema Astronauta / Galáxia", type: "model" },
      { id: "tm3", name: "Tema Futebol / Esportes", type: "model" },
      { id: "tm4", name: "Tema Boteco / Chopeira", type: "model" },
    ],
  },

  // 8. Personalizados DTF UV (dtf-uv)
  {
    id: "dtf-01",
    name: "Cartela de Adesivos DTF UV Alto Relevo para Copos e Taças",
    slug: "cartela-adesivos-dtf-uv-alto-relevo",
    categoryId: "dtf-uv",
    price: 32.00,
    originalPrice: 38.00,
    sku: "DTF-CAR-01",
    description: "A tecnologia mais moderna de personalização instantânea. Aplique decalques com verniz e relevo táctil sem prensa térmica em copos térmicos, garrafas, cerâmicas e caixas acrílicas. Resistente à água e lavagem.",
    shortDescription: "Transferência a frio impermeável e permanente com relevo premium.",
    images: [
      "/images/products/adesivos_dtf_uv_1x.webp",
    ],
    tags: ["Mais Vendido", "Lançamento"],
    featured: true,
    variants: [
      { id: "fr1", name: "Frases de Aniversário & Balada", type: "model" },
      { id: "fr2", name: "Frases Motivacionais & Café", type: "model" },
      { id: "fr3", name: "Logotipos / Personalizado sob encomenda", type: "model", priceDiff: 10.0 },
    ],
  },
  {
    id: "dtf-02",
    name: "Copo Térmico 473ml Já Personalizado com DTF UV Nome/Logo",
    slug: "copo-termico-473ml-personalizado-dtf-uv",
    categoryId: "dtf-uv",
    price: 58.90,
    sku: "DTF-COP-02",
    description: "Copo parede dupla em aço inox com tampa e abridor embutido, estampado com adesivo DTF UV de altíssima durabilidade. Ideal para festas, comemorações e presentes especiais.",
    shortDescription: "Mantém a bebida gelada por até 4 horas com estampa indelével.",
    images: [
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=800&auto=format&fit=crop&q=80",
    ],
    tags: ["Lançamento"],
    variants: [
      { id: "cp1", name: "Preto Fosco com Verniz Dourado", type: "color" },
      { id: "cp2", name: "Branco Pérola com Estampa Colorida", type: "color" },
      { id: "cp3", name: "Azul Marinho com Nome Gravado", type: "color" },
    ],
  },

  // 9. E.V.A. (eva)
  {
    id: "eva-01",
    name: "Folhas de E.V.A. com Glitter 40x60cm (Pacote com 5 Folhas)",
    slug: "folhas-eva-glitter-40x60cm-5-folhas",
    categoryId: "eva",
    price: 26.50,
    sku: "EVA-GLI-01",
    description: "Placas de E.V.A. 2mm com cobertura densa de glitter que não solta facilmente. Ideal para lembrancinhas, painéis escolares, apliques de bolos e artesanato festivo.",
    shortDescription: "Brilho intenso e corte preciso para cenografia e artesanato.",
    images: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80",
    ],
    tags: ["Pronta Entrega"],
    variants: [
      { id: "eg1", name: "Dourado Glitter (5 folhas)", type: "color" },
      { id: "eg2", name: "Prata Glitter (5 folhas)", type: "color" },
      { id: "eg3", name: "Vermelho Glitter (5 folhas)", type: "color" },
      { id: "eg4", name: "Sortido 5 Cores Diferentes", type: "color" },
    ],
  },
  {
    id: "eva-02",
    name: "Placas de E.V.A. Liso Colorido 40x60cm 1.8mm (Pacote com 10 Folhas)",
    slug: "placas-eva-liso-40x60cm-10-folhas",
    categoryId: "eva",
    price: 18.90,
    sku: "EVA-LIS-02",
    description: "Folhas lisas de toque macio e cores uniformes. Perfeitas para moldar flores, máscaras de personagens e forração de bandejas.",
    shortDescription: "Alta flexibilidade e textura uniforme para decorações.",
    images: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80",
    ],
    tags: ["Pronta Entrega"],
    variants: [
      { id: "el1", name: "Pacote Preto (10 folhas)", type: "color" },
      { id: "el2", name: "Pacote Branco (10 folhas)", type: "color" },
      { id: "el3", name: "Pacote Mix Multicolor (10 folhas)", type: "color" },
    ],
  },

  // 10. Embalagens e Caixas (embalagens)
  {
    id: "emb-01",
    name: "Caixa Maleta Kraft com Visor Acetato para Doces e Presentes (10 un)",
    slug: "caixa-maleta-kraft-visor-acetato-10un",
    categoryId: "embalagens",
    price: 32.90,
    originalPrice: 38.00,
    sku: "EMB-MAL-01",
    description: "Caixas modelo maleta com alça reforçada e janela transparente frontal. Ideal para confeiteiras entregarem bolos de pote, panetones, kits de café da manhã e presentes de páscoa e natal.",
    shortDescription: "Apresentação profissional que valoriza qualquer encomenda artesanal.",
    images: [
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&auto=format&fit=crop&q=80",
    ],
    tags: ["Mais Vendido", "Pronta Entrega"],
    variants: [
      { id: "m1", name: "Kraft Natural (10 un)", type: "color" },
      { id: "m2", name: "Branco Nobre (10 un)", type: "color" },
    ],
  },
  {
    id: "emb-02",
    name: "Laços Fáceis Prontos Metalizados 30mm (Pacote com 20 un)",
    slug: "lacos-faceis-prontos-metalizados-20un",
    categoryId: "embalagens",
    price: 14.50,
    sku: "EMB-LAC-02",
    description: "Puxe as fitas internas e o laço volumoso e perfeito se forma em segundos. Agilidade total na hora de embalar lembrancinhas e cestas.",
    shortDescription: "Montagem em 2 segundos com acabamento volumoso impecável.",
    images: [
      "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=800&auto=format&fit=crop&q=80",
    ],
    tags: ["Pronta Entrega"],
    variants: [
      { id: "l1", name: "Vermelho Natalino", type: "color" },
      { id: "l2", name: "Dourado Ouro", type: "color" },
      { id: "l3", name: "Prata Espelhado", type: "color" },
    ],
  },

  // 11. Forminhas para Doces (forminhas)
  {
    id: "for-01",
    name: "Forminhas 4 Pétalas para Brigadeiro Gourmet N° 5 (100 un)",
    slug: "forminhas-4-petalas-brigadeiro-100un",
    categoryId: "forminhas",
    price: 12.90,
    sku: "FOR-PET-01",
    description: "Forminhas em papel offset de alta gramatura com vincos precisos para montagem quadrada em 4 pétalas. Encaixe perfeito para brigadeiros tradicionais de 18g a 22g.",
    shortDescription: "A queridinha das confeiteiras para mesas de doces harmônicas.",
    images: [
      "https://images.unsplash.com/photo-1579372786545-d24232daf58c?w=800&auto=format&fit=crop&q=80",
    ],
    tags: ["Mais Vendido", "Pronta Entrega"],
    variants: [
      { id: "f1", name: "Dourada Metálica (100 un)", type: "color", priceDiff: 3.0 },
      { id: "f2", name: "Branca Fosca (100 un)", type: "color" },
      { id: "f3", name: "Rosa Chá (100 un)", type: "color" },
      { id: "f4", name: "Marrom Chocolate (100 un)", type: "color" },
    ],
  },
  {
    id: "for-02",
    name: "Forminhas Flor em Tecido Especial para Casamento (Caixa com 40 un)",
    slug: "forminhas-flor-tecido-casamento-40un",
    categoryId: "forminhas",
    price: 44.90,
    originalPrice: 52.00,
    sku: "FOR-TEC-02",
    description: "Forminhas artesanais em tecido engomado modeladas em formato de rosa aberta. Proporciona volume e sofisticação inigualável para mesas de doces finos de casamento e 15 anos.",
    shortDescription: "Acabamento de alta costura para doces finos e casamentos.",
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80",
    ],
    tags: ["Pronta Entrega"],
    variants: [
      { id: "ft1", name: "Off-White Pérola (40 un)", type: "color" },
      { id: "ft2", name: "Rose Nude (40 un)", type: "color" },
      { id: "ft3", name: "Marsala Vinho (40 un)", type: "color" },
    ],
  },

  // 12. Halloween e Festas Temáticas (halloween)
  {
    id: "hal-01",
    name: "Teia de Aranha Artificial Esticável com 4 Aranhas Inclusas",
    slug: "teia-de-aranha-artificial-halloween",
    categoryId: "halloween",
    price: 16.90,
    sku: "HAL-TEI-01",
    description: "Fibras sintéticas brancas ultra elásticas que cobrem até 4m². Inclui mini aranhas plásticas pretas para pendurar em portas, mesas e árvores no Halloween.",
    shortDescription: "Efeito cenográfico assustador de fácil aplicação.",
    images: [
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&auto=format&fit=crop&q=80",
    ],
    tags: ["Pronta Entrega"],
    variants: [
      { id: "t1", name: "Teia Branca Clássica (60g)", type: "model" },
      { id: "t2", name: "Teia Laranja Neon (60g)", type: "model" },
    ],
  },
  {
    id: "hal-02",
    name: "Copo Caveira de Vidro / Acrílico com Canudo 450ml",
    slug: "copo-caveira-com-canudo-450ml",
    categoryId: "halloween",
    price: 19.90,
    sku: "HAL-COP-02",
    description: "Copo em relevo 3D de crânio com tampa metálica de rosca e canudo reutilizável. Destaque em baladas de dia das bruxas e drinks temáticos.",
    shortDescription: "Formato anatômico de caveira para coquetéis e decoração temática.",
    images: [
      "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?w=800&auto=format&fit=crop&q=80",
    ],
    tags: ["Lançamento"],
    variants: [
      { id: "cc1", name: "Vidro Transparente", type: "color" },
      { id: "cc2", name: "Acrílico Fumê Escuro", type: "color" },
    ],
  },

  // 13. Sazonais e Natal (sazonais-natal)
  {
    id: "saz-01",
    name: "Tubo com 24 Bolas de Natal 6cm Mistas (Fosca, Brilho e Glitter)",
    slug: "tubo-24-bolas-natal-6cm-mistas",
    categoryId: "sazonais-natal",
    price: 42.00,
    originalPrice: 48.00,
    sku: "SAZ-BOL-01",
    description: "Bolas natalinas resistentes a quedas com cordão de fixação. Mistura perfeita de texturas foscas, espelhadas e cobertas por glitter para árvores frondosas.",
    shortDescription: "Composição equilibrada para montagem da árvore natalina.",
    images: [
      "https://images.unsplash.com/photo-1543258103-a62bdc069871?w=800&auto=format&fit=crop&q=80",
    ],
    tags: ["Pronta Entrega"],
    variants: [
      { id: "bn1", name: "Vermelho e Dourado Clássico", type: "color" },
      { id: "bn2", name: "Prata e Azul Gelo", type: "color" },
      { id: "bn3", name: "Rose Gold Champanhe", type: "color" },
    ],
  },
  {
    id: "saz-02",
    name: "Festão Aramado Verde Nevado 2 Metros",
    slug: "festao-aramado-verde-nevado-2m",
    categoryId: "sazonais-natal",
    price: 24.90,
    sku: "SAZ-FES-02",
    description: "Galhos densos com pontas brancas simulando neve fresca. Estrutura interna flexível para moldar em corrimões, lareiras e mesas da ceia.",
    shortDescription: "Galhos volumosos com toque nevado realista.",
    images: [
      "https://images.unsplash.com/photo-1543258103-a62bdc069871?w=800&auto=format&fit=crop&q=80",
    ],
    tags: ["Pronta Entrega"],
    variants: [
      { id: "f1", name: "Nevado com Pinhas (2m)", type: "size" },
      { id: "f2", name: "Verde Tradicional Liso (2m)", type: "size" },
    ],
  },

  // 14. Vasos e Flores Artificiais (vasos-flores)
  {
    id: "vas-01",
    name: "Vaso Decorativo Plástico Estilo Romano / Grego Médio 32cm",
    slug: "vaso-decorativo-estilo-romano-grego-32cm",
    categoryId: "vasos-flores",
    price: 34.90,
    sku: "VAS-ROM-01",
    description: "Vaso ornamental leve e resistente com relevos clássicos de colunas gregas. Ideal para posicionar buquês de flores artificiais no chão ao lado da mesa de bolo.",
    shortDescription: "Design clássico atemporal para cenografia de festas e recepções.",
    images: [
      "https://images.unsplash.com/photo-1487070183336-b863922373d4?w=800&auto=format&fit=crop&q=80",
    ],
    tags: ["Pronta Entrega"],
    variants: [
      { id: "v1", name: "Branco Esmaltado", type: "color" },
      { id: "v2", name: "Dourado Envelhecido", type: "color", priceDiff: 6.0 },
    ],
  },
  {
    id: "vas-02",
    name: "Buquê de Rosas Artificiais Toque Real com Folhagem (7 Hastes)",
    slug: "buque-rosas-artificiais-toque-real-folhagem",
    categoryId: "vasos-flores",
    price: 29.90,
    sku: "VAS-ROS-02",
    description: "Pétalas aveludadas de seda com textura hiper-realista. Não murcham, mantendo o arranjo vivo e impecável durante todo o evento.",
    shortDescription: "Pétalas com aspecto natural para arranjos de mesa.",
    images: [
      "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&auto=format&fit=crop&q=80",
    ],
    tags: ["Mais Vendido"],
    variants: [
      { id: "b1", name: "Rosa Chá / Nude", type: "color" },
      { id: "b2", name: "Branco Neve", type: "color" },
      { id: "b3", name: "Vermelho Marsala", type: "color" },
    ],
  },

  // 15. Velas de Aniversário (velas)
  {
    id: "vel-01",
    name: "Vela Numeral Metalizada Ouro Glitter (0 a 9)",
    slug: "vela-numeral-metalizada-ouro-glitter",
    categoryId: "velas",
    price: 8.90,
    originalPrice: 11.50,
    sku: "VEL-NUM-01",
    description: "Velas em cera de alta pureza com pavio que acende facilmente e acabamento espelhado de glitter dourado. Não goteja fumaça escura e garante fotos maravilhosas no parabéns.",
    shortDescription: "Acabamento espelhado em alto relevo que brilha sob as fotos.",
    images: [
      "/images/products/velas_numeral_metalizada_ouro_glitter_1x.webp",
    ],
    tags: ["Mais Vendido", "Pronta Entrega"],
    featured: true,
    variants: [
      { id: "n0", name: "Numeral 0", type: "model" },
      { id: "n1", name: "Numeral 1", type: "model" },
      { id: "n2", name: "Numeral 2", type: "model" },
      { id: "n3", name: "Numeral 3", type: "model" },
      { id: "n4", name: "Numeral 4", type: "model" },
      { id: "n5", name: "Numeral 5", type: "model" },
      { id: "n6", name: "Numeral 6", type: "model" },
      { id: "n7", name: "Numeral 7", type: "model" },
      { id: "n8", name: "Numeral 8", type: "model" },
      { id: "n9", name: "Numeral 9", type: "model" },
    ],
  },
  {
    id: "vel-02",
    name: "Vela Faísca Chama Prateada Cascata / Estrelinha (Pct com 4 un)",
    slug: "vela-faisca-chama-prateada-cascata-4un",
    categoryId: "velas",
    price: 15.00,
    sku: "VEL-FAI-02",
    description: "Efeito luminoso de cascata de faíscas brilhantes frias por aproximadamente 40 segundos. O ponto alto da celebração na hora do corte do bolo.",
    shortDescription: "Chuva de faíscas comemorativas para a hora do parabéns.",
    images: [
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&auto=format&fit=crop&q=80",
    ],
    tags: ["Mais Vendido", "Pronta Entrega"],
    variants: [
      { id: "vf1", name: "Chama Prata Estrelada (4 un)", type: "model" },
      { id: "vf2", name: "Chama Dourada Vulcão (4 un)", type: "model", priceDiff: 3.0 },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return PRODUCTS.filter((p) => p.categoryId === categoryId);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.featured);
}
