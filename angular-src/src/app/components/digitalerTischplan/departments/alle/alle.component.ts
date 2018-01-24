import { Component, OnInit, Input } from '@angular/core';
import { Table } from '../../../../../../Table';

@Component({
  selector: 'app-alle',
  templateUrl: 'alle.component.html',
  styleUrls: ['../../tischplan.component.css']
})
export class AlleComponent implements OnInit {

  @Input('tablesBauernstube') tablesBauernstube: Table[];
  @Input('tablesBerglerStubeHubertusStube') tablesBerglerStubeHubertusStube: Table[];
  @Input('tablesEdelweissKaminStube') tablesEdelweissKaminStube: Table[];
  @Input('tablesTeestubeTeelounge') tablesTeestubeTeelounge: Table[];
  @Input('tablesWaeldlerStubeKristallStube') tablesWaeldlerStubeKristallStube: Table[];
  @Input('term') term: string;

  constructor() { }

  ngOnInit() {
  }

}
