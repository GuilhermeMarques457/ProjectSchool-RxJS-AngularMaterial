export interface Course {
  id: number;
  name: string;
  category: Category;
  description: string;
  rating: string;
  year: string;
  professor: string;
}

export enum Category {
  Tecnologia = 'Tecnologia',
  Arte = 'Arte',
  Culinaria = 'Culinária',
  Financas = 'Finanças',
  Psicologia = 'Psicologia',
  Marketing = 'Marketing',
  Fotografia = 'Fotografia',
  Escrita = 'Escrita',
  Musica = 'Música',
  CienciasAmbientais = 'Ciências Ambientais',
  Moda = 'Moda',
  Comunicação = 'Comunicação',
  Filosofia = 'Filosofia',
  Saude = 'Saúde',
}
