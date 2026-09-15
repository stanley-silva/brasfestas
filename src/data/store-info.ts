export interface StoreInfo {
  name: string;
  slogan: string;
  subSlogan: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
    fullAddress: string;
    googleMapsUrl: string;
  };
  contacts: {
    phone: string;
    whatsapp: string;
    whatsappRaw: string;
    email: string;
  };
  businessHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  social: {
    instagram: string;
    facebook: string;
  };
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  partnerBrands: {
    name: string;
    color: string;
  }[];
}

const rawWhatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5547992840652";

export const STORE_INFO: StoreInfo = {
  name: "BrasFestas",
  slogan: "O mundo encantado das festas",
  subSlogan: "Tudo para transformar qualquer celebração em um momento inesquecível.",
  address: {
    street: "Avenida Imirim, 2000",
    neighborhood: "Santana",
    city: "São Paulo",
    state: "SP",
    zipCode: "02464-300",
    fullAddress: "Av. Imirim, 2000 - Santana, São Paulo - SP, CEP 02464-300",
    googleMapsUrl: "https://maps.google.com/?q=Avenida+Imirim,+2000,+Santana,+Sao+Paulo+-+SP",
  },
  contacts: {
    phone: process.env.NEXT_PUBLIC_STORE_PHONE || "(11) 2208-2551",
    whatsapp: "(47) 99284-0652",
    whatsappRaw: rawWhatsapp,
    email: process.env.NEXT_PUBLIC_STORE_EMAIL || "contato@brasfestas.com.br",
  },
  businessHours: {
    weekdays: "Segunda a Sexta das 08h às 18h",
    saturday: "Sábados das 08h às 13h",
    sunday: "Domingos e Feriados: Fechado",
  },
  social: {
    instagram: "https://instagram.com/brasfestas",
    facebook: "https://facebook.com/brasfestas",
  },
  features: [
    {
      title: "Atendimento Consultivo via WhatsApp",
      description: "Tire dúvidas sobre cores, tamanhos e quantidades antes de fechar o pedido.",
      icon: "MessageCircle",
    },
    {
      title: "Variedade Imbatível para Festas",
      description: "Do descartável ao acabamento fino de confeitaria e personalizados.",
      icon: "Sparkles",
    },
    {
      title: "Agilidade para o seu Evento",
      description: "Embalamos e despachamos com agilidade para não comprometer seu cronograma.",
      icon: "Truck",
    },
    {
      title: "Condições para Profissionais",
      description: "Vantagens especiais para confeiteiras, buffets e decoradores recorrentes.",
      icon: "BadgePercent",
    },
  ],
  partnerBrands: [
    { name: "Qualatex", color: "#0284c7" },
    { name: "Sempertex", color: "#e11d48" },
    { name: "Fini", color: "#f59e0b" },
    { name: "Wilton", color: "#9333ea" },
    { name: "Festcolor", color: "#10b981" },
    { name: "Cromus", color: "#0ea5e9" },
    { name: "Junco", color: "#ef4444" },
    { name: "Regina", color: "#ec4899" },
    { name: "Decora Doces", color: "#f97316" },
    { name: "Anagram", color: "#8b5cf6" },
    { name: "Prafesta", color: "#14b8a6" },
    { name: "Dori", color: "#eab308" },
  ],
};
