import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPagesComponent } from './gifs-pages/gifs-pages.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultsComponent } from './results/results.component';



@NgModule({
  declarations: [
    GifsPagesComponent,
    BusquedaComponent,
    ResultsComponent
  ],
  exports: [
    GifsPagesComponent,
    BusquedaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
