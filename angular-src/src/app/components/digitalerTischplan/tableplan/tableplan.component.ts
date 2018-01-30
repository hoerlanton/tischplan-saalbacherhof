import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Table } from '../../../../../Table';
import { TischplanService } from '../../../services/tischplan.service';

@Component({
  selector: 'app-tableplan',
  templateUrl: 'tableplan.component.html',
  styleUrls: ['../tischplan.component.css']
})
export class TableplanComponent implements OnInit {

  @Input('tables') tables: Table[];
  @Input('dateGeneratedListe') dateGeneratedListe: string;
  @Input('tablesBauernstube') tablesBauernstube: Table[];
  @Input('showBauernStubnBool') showBauernStubnBool: boolean;
  @Input('tablesEdelweissKaminStube') tablesEdelweissKaminStube: Table[];
  @Input('showEdelweissBool') showEdelweissBool: boolean;
  @Input('tablesBerglerStubeHubertusStube') tablesBerglerStubeHubertusStube: Table[];
  @Input('showBerglerBool') showBerglerBool: boolean;
  @Input('tablesTeestubeTeelounge') tablesTeestubeTeelounge: Table[];
  @Input('showTeeStubeBool') showTeeStubeBool: boolean;
  @Input('tablesWaeldlerStubeKristallStube') tablesWaeldlerStubeKristallStube: Table[];
  @Input('showWaeldlerBool') showWaeldlerBool: boolean;
  @Input('showAlleBool') showAlleBool: boolean;
  @Input('showTablePlanBool') showTablePlanBool: boolean;
  @Output()
  movedBerglerStubeHubertusStube:EventEmitter<any> = new EventEmitter();
  @Output()
  movedBauernstube:EventEmitter<any> = new EventEmitter();
  @Output()
  movedWaeldlerStubeKristallStube:EventEmitter<any> = new EventEmitter();
  @Output()
  movedEdelweissKaminStube:EventEmitter<any> = new EventEmitter();
  @Output()
  movedTeestubeTeelounge:EventEmitter<any> = new EventEmitter();

  constructor(private tischplanService: TischplanService) { }

  ngOnInit() {
  }

  moveTable(table, j) {

    console.log("moveTable clicked");
    console.log('table :' + table.number + 'j' + j);
    this.tischplanService.moveTable(table).subscribe(response => {
      console.log('Response:' + JSON.stringify(response));

      //console.log("topValue:" + JSON.stringify(response[0].tables[0].topValue));
      console.log("topValue:" + JSON.stringify(response[0].tables[j].topValue));
      console.log("leftValue:" + JSON.stringify(response[0].tables[j].leftValue));

      if (response[0].tables[j].department === "berglerStubeHubertusStube") {
        this.movedBerglerStubeHubertusStube.emit(response[0].tables);
      } else if (response[0].tables[j].department === "Bauernstube") {
        this.movedBauernstube.emit(response[0].tables);
      } else if (response[0].tables[j].department === "waeldlerStubeKristallStube") {
        this.movedWaeldlerStubeKristallStube.emit(response[0].tables);
      } else if (response[0].tables[j].department === "edelweissKaminStube") {
        this.movedEdelweissKaminStube.emit(response[0].tables);
      } else if (response[0].tables[j].department === "teestubeTeelounge") {
        this.movedTeestubeTeelounge.emit(response[0].tables);
      }
    });
  }

  getStyle(j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y ) {
    if (j || k || l || m || n || o || p || q || r || s || t || u || v || w || x || y) {
      return "solid 3px red";
    } else {
      return "solid 3px rgb(243, 239, 228)";
    }
  }

}
