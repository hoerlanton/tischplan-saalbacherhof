import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Table } from '../../../../../../Table';

@Component({
  selector: 'app-alle',
  templateUrl: 'alle.component.html',
  styleUrls: ['../../tischplan.component.css']
})
export class AlleComponent implements OnInit {

  @Input('tables') tables: any;
  @Input('tablesBauernstube') tablesBauernstube: Table[];
  @Input('tablesBerglerStubeHubertusStube') tablesBerglerStubeHubertusStube: Table[];
  @Input('tablesEdelweissKaminStube') tablesEdelweissKaminStube: Table[];
  @Input('tablesTeestubeTeelounge') tablesTeestubeTeelounge: Table[];
  @Input('tablesWaeldlerStubeKristallStube') tablesWaeldlerStubeKristallStube: Table[];
  @Input('term') term: string;
  @Output()
  occupied:EventEmitter<any> = new EventEmitter();
  @Input('showAlleBool') showAlleBool: boolean;

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
