import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Table } from '../../../../../../Table';

@Component({
  selector: 'app-edelweiss-kamin-stube',
  templateUrl: 'edelweiss-kamin-stube.component.html',
  styleUrls: ['../../tischplan.component.css']
})
export class EdelweissKaminStubeComponent implements OnInit {

  @Input('tablesEdelweissKaminStube') tablesEdelweissKaminStube: Table[];
  @Input('showEdelweissBool') showEdelweissBool: boolean;
  @Input('term') term: string;
  @Output()
  occupied:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  occupy(table, j) {
    this.occupied.emit({table, j});
  }

  getStyle(j) {
    if (j != "Empty") {
      return "solid 3px red";
    } else {
      return "";
    }
  }

}
