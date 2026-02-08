export interface Client {
  name: string;
  logo: string;
  description?: string;
  website?: string;
}

export const clients: Client[] = [
  {
    name: 'Indicaí',
    logo: '/clients/indicai-logo.svg',
    description: 'Plataforma jurídica e consultoria especializada',
    website: 'https://indicai.com.br',
  },
  {
    name: 'DG Computer',
    logo: '/clients/dg-computer-logo.svg',
    description: 'Assistência técnica e soluções de hardware',
    website: 'https://dgcomputer.com.br',
  },
  {
    name: 'TwoBrains',
    logo: '/clients/twobrains-logo.svg',
    description: 'Agência full-stack de desenvolvimento',
    website: 'https://twobrains.com.br',
  },
];
