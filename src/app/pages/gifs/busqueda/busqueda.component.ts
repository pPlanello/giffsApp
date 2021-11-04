import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/shared/services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  @ViewChild('txtFind') txtFind!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {
  }

  findGif() {
    const valueFind = this.txtFind.nativeElement.value;
    this.gifsService.findGifs(valueFind).subscribe(data => console.log('buscando...', data));
    // borrar input
    this.txtFind.nativeElement.value = '';
  }
}
