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

    return nuevaLista.id;
  }

  obtenerLista(id: string | number) {
    id = Number(id);

    return this.listas.find((listaData) => listaData.id === id);
  }

  guardarStorage() {
    localStorage.setItem("data", JSON.stringify(this.listas));
  }

  cargarStorage() {
    if (localStorage.getItem("data")) {
      this.listas = JSON.parse(localStorage.getItem("data"));
    }
  }

  borrarLista(lista: Lista) {
    this.listas = this.listas.filter((data) => {
      return data.id !== lista.id;
    });
    this.guardarStorage();
  }
}
