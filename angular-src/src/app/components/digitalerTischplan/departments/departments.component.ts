import { Component, OnInit, Input, ViewChild, Output, EventEmitter, Injectable } from '@angular/core';
import { Table } from '../../../../../Table';
import { TischplanService } from '../../../services/tischplan.service';

@Component({
  selector: 'app-departments',
  templateUrl: 'departments.component.html',
  styleUrls: ['../tischplan.component.css']
})
export class DepartmentsComponent implements OnInit {


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
  @Input('term') term: string;
  @Input('showAlleBool') showAlleBool: boolean;
  @Output()
  dispensedBauernstube:EventEmitter<any> = new EventEmitter();
  @Output()
  dispensedBerglerStubeHubertusStube:EventEmitter<any> = new EventEmitter();
  @Output()
  dispensedEdelweissKaminStube:EventEmitter<any> = new EventEmitter();
  @Output()
  dispensedTeestubeTeelounge:EventEmitter<any> = new EventEmitter();
  @Output()
  dispensedWaeldlerStubeKristallStube:EventEmitter<any> = new EventEmitter();
  dateTodayGenerated: any;
  constructor(private tischplanService: TischplanService) {
  }

  ngOnInit() {
  }

  occupied(table){
    console.log("table.j");
    console.log(table.j);
    console.log("table.table");
    console.log(table.table);
    this.occupy(table.table, table.j);
  }

  occupy(table, j) {
    this.tischplanService.dispenseTable(table).subscribe(response => {
      console.log("Dispense Table:");
      console.log("bgColor:" + JSON.stringify(response[0].tables[j].bgColor));
      console.log("isBesetzt:" + JSON.stringify(response[0].tables[j].isBesetzt));
      if (response === null) {
        return;
      } else {
        if (response[0].tables[j].department === "berglerStubeHubertusStube") {
          this.tablesBerglerStubeHubertusStube[j] = response[0].tables[j];
        }
        else if (response[0].tables[j].department === "Bauernstube") {
          this.tablesBauernstube[j] = response[0].tables[j];
        }
        else if (response[0].tables[j].department === "waeldlerStubeKristallStube") {
          this.tablesWaeldlerStubeKristallStube[j] = response[0].tables[j];
        }
        else if (response[0].tables[j].department === "edelweissKaminStube") {
          this.tablesEdelweissKaminStube[j] = response[0].tables[j];
        }
        else if (response[0].tables[j].department === "teestubeTeelounge") {
          this.tablesTeestubeTeelounge[j] = response[0].tables[j];
        }
      }
    });

    this.tischplanService.addPlaceholder(table).subscribe(response => {
      console.log("Add placeholder!");
      console.log("Add placeholder! table ... " + JSON.stringify(table));
      console.log("placeholder:" + JSON.stringify(response[0].tables[j].placeholder));
      if (response === null) {
        return;
      } else {
        //console.log(this.tablesBerglerStubeHubertusStube[j].placeholder);
        if (response[0].tables[j].department === "berglerStubeHubertusStube") {
          this.tablesBerglerStubeHubertusStube[j].placeholder = response[0].tables[j].placeholder;
        }
        else if (response[0].tables[j].department === "Bauernstube") {
          this.tablesBauernstube[j].placeholder = response[0].tables[j].placeholder;
        }
        else if (response[0].tables[j].department === "waeldlerStubeKristallStube") {
          this.tablesWaeldlerStubeKristallStube[j].placeholder = response[0].tables[j].placeholder;
        }
        else if (response[0].tables[j].department === "edelweissKaminStube") {
          this.tablesEdelweissKaminStube[j].placeholder = response[0].tables[j].placeholder;
        }
        else if (response[0].tables[j].department === "teestubeTeelounge") {
          this.tablesTeestubeTeelounge[j].placeholder = response[0].tables[j].placeholder;
        }
      }
    });
  }

  addInformationToTable(dataString, arrayIndex) {
    this.tischplanService.addInformationToTable(dataString)
      .subscribe(response => {
        // let arrayIndex = response[1];
        console.log("RESPONSE addInformationToTable:" + JSON.stringify(response));
        if (response === null) {
          return;
        } else {
          if (response.tables[0].department === "berglerStubeHubertusStube") {
            this.tablesBerglerStubeHubertusStube[arrayIndex] = response.tables[0];
          }
          else if (response.tables[0].department === "Bauernstube") {
            this.tablesBauernstube[arrayIndex] = response.tables[0];
          }
          else if (response.tables[0].department === "waeldlerStubeKristallStube") {
            this.tablesWaeldlerStubeKristallStube[arrayIndex] = response.tables[0];
          }
          else if (response.tables[0].department === "edelweissKaminStube") {
            this.tablesEdelweissKaminStube[arrayIndex] = response.tables[0];
          }
          else if (response.tables[0].department === "teestubeTeelounge") {
            this.tablesTeestubeTeelounge[arrayIndex] = response.tables[0];
          }
        }
// console.log(this.tablesBerglerStubeHubertusStube[arrayIndex]);
      });
  }

  occupyTableOnDrop(dataString, arrayIndex) {
    console.log("Occupy Table!");
    this.tischplanService.occupyTable(dataString)
      .subscribe(response => {
        //let arrayIndex = response[1];
        //console.log("arrayIndex:" + arrayIndex);
        //console.log("bgColor:" + JSON.stringify(response[0].tables[arrayIndex].bgColor));
        console.log("Response occupyTable:" + JSON.stringify(response));
        if (response === null) {
          return;
        } else {
          if (response.tables[0].department === "berglerStubeHubertusStube") {
            this.tablesBerglerStubeHubertusStube[arrayIndex] = response.tables[0];
          }
          else if (response.tables[0].department === "Bauernstube") {
            this.tablesBauernstube[arrayIndex] = response.tables[0];
          }
          else if (response.tables[0].department === "waeldlerStubeKristallStube") {
            this.tablesWaeldlerStubeKristallStube[arrayIndex] = response.tables[0];
          }
          else if (response.tables[0].department === "edelweissKaminStube") {
            this.tablesEdelweissKaminStube[arrayIndex] = response.tables[0];
          }
          else if (response.tables[0].department === "teestubeTeelounge") {
            this.tablesTeestubeTeelounge[arrayIndex] = response.tables[0];
          }
        }

        //console.log("bgColor:" + JSON.stringify(this.tablesBerglerStubeHubertusStube[arrayIndex]));
      });
    //console.log("placeholder:" + JSON.stringify(this.tablesBerglerStubeHubertusStube[arrayIndex]));
  }




}
