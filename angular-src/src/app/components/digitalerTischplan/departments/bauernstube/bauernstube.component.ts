import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Table } from '../../../../../../Table';

@Component({
  selector: 'app-bauernstube',
  templateUrl: 'bauernstube.component.html',
  styleUrls: ['../../tischplan.component.css']
})
export class BauernstubeComponent implements OnInit {

  @Input('tablesBauernstube') tablesBauernstube: Table[];
  @Input('showBauernStubnBool') showBauernStubnBool: boolean;
  @Output()
  occupied:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  occupy(table, j) {
    this.occupied.emit({table, j});
  }


}
