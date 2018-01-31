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
  @Output()
  updateAzList:EventEmitter<any> = new EventEmitter();
  dateTodayGenerated: any;
  parts: any[] = [];
  date: any[] = [];
  parsedDate: any[] = [];

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
      console.log(j);
      console.log("bgColor:" + JSON.stringify(response));
      console.log("bgColor:" + JSON.stringify(response[0].tables[j].bgColor));
      console.log("isBesetzt:" + JSON.stringify(response[0].tables[j].isBesetzt));
      if (response === null) {
        return;
      } else {
        if (response[0].tables[j].department === "berglerStubeHubertusStube") {
          this.dispensedBerglerStubeHubertusStube.emit(response[0].tables);
        }
        else if (response[0].tables[j].department === "Bauernstube") {
          this.dispensedBauernstube.emit(response[0].tables);
        }
        else if (response[0].tables[j].department === "waeldlerStubeKristallStube") {
          this.dispensedWaeldlerStubeKristallStube.emit(response[0].tables);
        }
        else if (response[0].tables[j].department === "edelweissKaminStube") {
          this.dispensedEdelweissKaminStube.emit(response[0].tables);
        }
        else if (response[0].tables[j].department === "teestubeTeelounge") {
          this.dispensedTeestubeTeelounge.emit(response[0].tables);
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
          if (response[0].department === "berglerStubeHubertusStube") {
            this.dispensedBerglerStubeHubertusStube.emit(response[0].tables);
          }
          else if (response[0].department === "Bauernstube") {
            this.dispensedBauernstube.emit(response[0].tables);
          }
          else if (response[0].department === "waeldlerStubeKristallStube") {
            this.dispensedWaeldlerStubeKristallStube.emit(response[0].tables);
          }
          else if (response[0].department === "edelweissKaminStube") {
            this.dispensedEdelweissKaminStube.emit(response[0].tables);
          }
          else if (response[0].department === "teestubeTeelounge") {
            this.dispensedTeestubeTeelounge.emit(response[0].tables);
            //this.tablesTeestubeTeelounge[arrayIndex] = response.tables[0];
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
          this.updateAzList.emit();
        //console.log("bgColor:" + JSON.stringify(this.tablesBerglerStubeHubertusStube[arrayIndex]));
      });
    //console.log("placeholder:" + JSON.stringify(this.tablesBerglerStubeHubertusStube[arrayIndex]));
  }

  changeBgColorIfAnreise(tables) {
    console.log('=================================================changeBgColorIfAnreise');
    this.dateTodayGenerated = new Date();

    for (let a = 0; a < tables.length; a++) {
      for (let b = 0; b < tables[a].tables.length; b++) {

        if (tables[a].tables[b].anreiseValue) {
          console.log('tables[a].tables[b].anreiseValue: ' + b + " " + tables[a].tables[b].anreiseValue);
          this.parts[0] = tables[a].tables[b].anreiseValue.match(/(\d+)/g);} else {
          this.parts[0] = "undefined";
        }
        if (tables[a].tables[b].anreiseValue2) {
          this.parts[1] = tables[a].tables[b].anreiseValue2.match(/(\d+)/g);}else {
          this.parts[1] = "undefined";
        }
        if (tables[a].tables[b].anreiseValue3) {
          this.parts[2] = tables[a].tables[b].anreiseValue3.match(/(\d+)/g);}else {
          this.parts[2] = "undefined";
        }
        if (tables[a].tables[b].anreiseValue4) {
          this.parts[3] = tables[a].tables[b].anreiseValue4.match(/(\d+)/g);}else {
          this.parts[3] = "undefined";
        }
        if (tables[a].tables[b].anreiseValue5) {
          this.parts[4] = tables[a].tables[b].anreiseValue5.match(/(\d+)/g);}else {
          this.parts[4] = "undefined";
        }
        if (tables[a].tables[b].anreiseValue6) {
          this.parts[5] = tables[a].tables[b].anreiseValue6.match(/(\d+)/g);}else {
          this.parts[5] = "undefined";
        }
        if (tables[a].tables[b].anreiseValue7) {
          this.parts[6] = tables[a].tables[b].anreiseValue7.match(/(\d+)/g);}else {
          this.parts[6] = "undefined";
        }
        if (tables[a].tables[b].anreiseValue8) {
          this.parts[7] = tables[a].tables[b].anreiseValue8.match(/(\d+)/g);}else {
          this.parts[7] = "undefined";
        }
        if (tables[a].tables[b].anreiseValue9) {
          this.parts[8] = tables[a].tables[b].anreiseValue9.match(/(\d+)/g);}else {
          this.parts[8] = "undefined";
        }
        if (tables[a].tables[b].anreiseValue10) {
          this.parts[9] = tables[a].tables[b].anreiseValue10.match(/(\d+)/g);}else {
          this.parts[9] = "undefined";
        }
        if (tables[a].tables[b].anreiseValue11) {
          this.parts[10] = tables[a].tables[b].anreiseValue11.match(/(\d+)/g);}else {
          this.parts[10] = "undefined";
        }
        if (tables[a].tables[b].anreiseValue12) {
          this.parts[11] = tables[a].tables[b].anreiseValue12.match(/(\d+)/g);}else {
          this.parts[11] = "undefined";
        }
        if (tables[a].tables[b].anreiseValue13) {
          this.parts[12] = tables[a].tables[b].anreiseValue13.match(/(\d+)/g);}else {
          this.parts[12] = "undefined";
        }
        if (tables[a].tables[b].anreiseValue14) {
          this.parts[13] = tables[a].tables[b].anreiseValue14.match(/(\d+)/g);}else {
          this.parts[13] = "undefined";
        }
        if (tables[a].tables[b].anreiseValue15) {
          this.parts[14] = tables[a].tables[b].anreiseValue15.match(/(\d+)/g);}else {
          this.parts[14] = "undefined";
        }

        for (let c = 0; c <= 14; c++) {
          if (this.parts[c]) {
            this.date[c] = new Date(2018, this.parts[c][1] - 1, this.parts[c][0]);
            this.parsedDate[c] = String(this.date[c]).substring(0, 15);
          }
        }
        // note parts[1]-1
        //console.log('parts[2]' + parts[2] + 'parts[1]' + (parts[1] - 1) + 'parts[0]' + parts[0]);
        // Mon May 31 2010 00:00:00
        //this.tablesRestaurant[j].anreiseValue
        let dateToday = String(this.dateTodayGenerated).substring(0, 15);
        console.log('Parsed Date --->: ' + this.parsedDate[0]);
        console.log('this.dateGenerated --->: ' + dateToday);
        if (dateToday.indexOf(this.parsedDate[0] || this.parsedDate[1] || this.parsedDate[2] || this.parsedDate[3] || this.parsedDate[4] || this.parsedDate[5] || this.parsedDate[6] || this.parsedDate[7] || this.parsedDate[8] || this.parsedDate[9] || this.parsedDate[10] || this.parsedDate[11] || this.parsedDate[12] || this.parsedDate[13] || this.parsedDate[14] || this.parsedDate[15]) !== -1) {
          if (tables[a].department === "berglerStubeHubertusStube") {
            this.tablesBerglerStubeHubertusStube[b].bgColor = "#0a7a74";
          }
          else if (tables[a].department === "Bauernstube") {
            this.tablesBauernstube[b].bgColor = "#0a7a74";
          }
          else if (tables[a].department === "waeldlerStubeKristallStube") {
            this.tablesWaeldlerStubeKristallStube[b].bgColor = "#0a7a74";
          }
          else if (tables[a].department === "edelweissKaminStube") {
            this.tablesEdelweissKaminStube[b].bgColor = "#0a7a74";
          }
          else if (tables[a].department === "teestubeTeelounge") {
            this.tablesTeestubeTeelounge[b].bgColor = "#0a7a74";
          }
        }
      }
    }
  }


}
