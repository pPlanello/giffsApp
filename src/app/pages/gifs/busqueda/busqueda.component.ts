import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { GifsService } from 'src/app/shared/services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  @Output() value2find: EventEmitter<any> = new EventEmitter();

  @ViewChild('txtFind') txtFind!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {
  }

  findGif() {
    const valueFind = this.txtFind.nativeElement.value;
    // Guardar el historial
    this.gifsService.saveHistory(valueFind);
    // Emitir al padre
    this.value2find.emit(valueFind);
    this.txtFind.nativeElement.value = '';
    // Llamada al api y guardado en el servicio
    this.gifsService.findGifs(valueFind).subscribe((data: any) => this.gifsService.saveGifs(data['data']));
  }
}
