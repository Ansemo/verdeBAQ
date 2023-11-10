export interface Carta {
    id: string;
    nivel: number;
    desbloquea: string[];
    imagen: string;
    descripcion: string;
    activa?: boolean; 
    state?: boolean; 
    cartasHijas?: any[]
  }
  