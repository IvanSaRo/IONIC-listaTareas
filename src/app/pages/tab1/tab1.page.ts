import { Component } from "@angular/core";
import { DeseosService } from "src/app/services/deseos.service";
import { Lista } from "src/app/models/lista.model";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  listasPendientes: Lista[] = [];
  constructor(private deseosService: DeseosService) {
    this.listasPendientes = this.deseosService.listas;
  }
}
