import { Injectable } from "@angular/core";
import { Lista } from "../models/lista.model";

@Injectable({
  providedIn: "root",
})
export class DeseosService {
  listas: Lista[] = [];

  constructor() {
    const lista1 = new Lista("Recolectar gemas");
    const lista2 = new Lista("Vengadores");

    this.listas.push(lista1, lista2);
  }

  crearLista(title: string) {
    const nuevaLista = new Lista(title);
    this.listas.push(nuevaLista);
  }
}
