import { ListaItem } from "./lista-item.model";

export class Lista {
  id: number;
  titulo: string;
  creacion: Date;
  fin: Date;
  acabada: boolean;
  item: ListaItem[];

  constructor(titulo: string) {
    this.titulo = titulo;
    this.creacion = new Date();
    this.acabada = false;
    this.item = [];
    this.id = new Date().getTime();
  }
}
