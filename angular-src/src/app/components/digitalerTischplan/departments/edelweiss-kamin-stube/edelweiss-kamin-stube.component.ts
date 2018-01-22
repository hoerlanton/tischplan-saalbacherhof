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
  @Output()
  occupied:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  occupy(table, j) {
    this.occupied.emit({table, j});
  }

}
