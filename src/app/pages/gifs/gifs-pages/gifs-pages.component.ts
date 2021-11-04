import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/shared/services/gifs.service';

@Component({
  selector: 'app-gifs-pages',
  templateUrl: './gifs-pages.component.html',
  styleUrls: ['./gifs-pages.component.css']
})
export class GifsPagesComponent implements OnInit {

  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {
  }

  obtainValue2Find(event: string) {
    this.gifsService.gifSearch.emit(event);
  }

}
