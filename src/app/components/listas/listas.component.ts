import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { DeseosService } from "src/app/services/deseos.service";
import { Router } from "@angular/router";
import { Lista } from "src/app/models/lista.model";
import { AlertController, IonList } from "@ionic/angular";

@Component({
  selector: "app-listas",
  templateUrl: "./listas.component.html",
  styleUrls: ["./listas.component.scss"],
})
export class ListasComponent implements OnInit {
  @Input() terminada = true;

  @ViewChild(IonList, { static: false }) list: IonList;

  constructor(
    public deseosService: DeseosService,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  listaSeleccionada(lista: Lista) {
    if (this.terminada) {
      this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
    }
  }

  borrarLista(lista: Lista) {
    this.deseosService.borrarLista(lista);
  }

  async editarLista(lista: Lista) {
    let titulo = lista.titulo;

    const alert = await this.alertController.create({
      header: "Nuevo título",
      inputs: [
        {
          name: "titulo",
          type: "text",
          placeholder: "Nombre de la lista",
          value: titulo,
        },
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          handler: () => {
            this.list.closeSlidingItems();
            return;
          },
        },
        {
          text: "Actualizar",
          handler: (data) => {
            if (data.titulo.length === 0) {
              this.list.closeSlidingItems();
              return;
            }
            lista.titulo = data.titulo;

            this.deseosService.guardarStorage();
            this.list.closeSlidingItems();
          },
        },
      ],
    });

    alert.present();
  }
}
