import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  @ViewChild('txtFind') txtFind!: ElementRef<HTMLInputElement>;

  constructor() { }

  ngOnInit(): void {
  }

  findGif() {
    const valueFind = this.txtFind.nativeElement.value;
    console.log('Buscando...', valueFind);
    this.txtFind.nativeElement.value = '';

  }
}
