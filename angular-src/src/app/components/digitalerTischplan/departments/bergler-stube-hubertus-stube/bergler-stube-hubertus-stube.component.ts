import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Table } from '../../../../../../Table';

@Component({
  selector: 'app-bergler-stube-hubertus-stube',
  templateUrl: 'bergler-stube-hubertus-stube.component.html',
  styleUrls: ['../../tischplan.component.css']
})
export class BerglerStubeHubertusStubeComponent implements OnInit {

  @Input('tablesBerglerStubeHubertusStube') tablesBerglerStubeHubertusStube: Table[];
  @Input('showBerglerBool') showBerglerBool: boolean;
  @Output()
  occupied:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  occupy(table, j) {
    this.occupied.emit({table, j});
  }

}

