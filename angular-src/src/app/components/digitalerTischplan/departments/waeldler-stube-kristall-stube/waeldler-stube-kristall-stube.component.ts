import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Table } from '../../../../../../Table';

@Component({
  selector: 'app-waeldler-stube-kristall-stube',
  templateUrl: 'waeldler-stube-kristall-stube.component.html',
  styleUrls: ['../../tischplan.component.css']
})
export class WaeldlerStubeKristallStubeComponent implements OnInit {

  @Input('tablesWaeldlerStubeKristallStube') tablesWaeldlerStubeKristallStube: Table[];
  @Input('showWaeldlerBool') showWaeldlerBool: boolean;
  @Output()
  occupied:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  occupy(table, j) {
    this.occupied.emit({table, j});
  }
}
