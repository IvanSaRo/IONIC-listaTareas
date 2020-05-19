import { Component, OnInit } from "@angular/core";
import { DeseosService } from "src/app/services/deseos.service";
import { ActivatedRoute } from "@angular/router";
import { Lista } from "src/app/models/lista.model";
import { ListaItem } from "src/app/models/lista-item.model";

@Component({
  selector: "app-agregar",
  templateUrl: "./agregar.page.html",
  styleUrls: ["./agregar.page.scss"],
})
export class AgregarPage implements OnInit {
  lista: Lista;
  nombreItem = "";

  constructor(
    private deseosService: DeseosService,
    private route: ActivatedRoute
  ) {
    const listaId = this.route.snapshot.paramMap.get("listaId"); //lee el url sin usar observables, listaId es la parte variable del URL tal y como figura en tab1-routing.module.ts
    this.lista = this.deseosService.obtenerLista(listaId);
    console.log(this.lista);
    //console.log(this.lista);
  }

  ngOnInit() {}

  agregarItem() {
    if (this.nombreItem.length === 0) {
      return;
    }
    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista.item.push(nuevoItem);
    this.nombreItem = "";

    this.deseosService.guardarStorage();
  }

  cambioCheck(item: ListaItem) {
    const pendientes = this.lista.item.filter((itemData) => {
      return itemData.completado;
    }).length;

    if (pendientes === 0) {
      this.lista.fin = new Date();
      this.lista.acabada = true;
    } else {
      this.lista.fin = null;
      this.lista.acabada = false;
    }
    this.deseosService.guardarStorage();
  }
}
