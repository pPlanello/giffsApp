import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

import { GifsService } from 'src/app/shared/services/gifs.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  get results() {
    return this.gifsService.gifs;
  }

  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {
  }

}
