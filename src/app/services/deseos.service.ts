import { Injectable } from "@angular/core";
import { Lista } from "../models/lista.model";

@Injectable({
  providedIn: "root",
})
export class DeseosService {
  listas: Lista[] = [];

  constructor() {
    this.cargarStorage();
  }

  crearLista(title: string) {
    const nuevaLista = new Lista(title);
    this.listas.push(nuevaLista);
    this.guardarStorage();
  }

  guardarStorage() {
    localStorage.setItem("data", JSON.stringify(this.listas));
  }

  cargarStorage() {
    if (localStorage.getItem("data")) {
      this.listas = JSON.parse(localStorage.getItem("data"));
    }
  }
}
