import { Component, OnInit, Input, ViewChild, Output, EventEmitter, Injectable, AfterViewChecked } from '@angular/core';
import { Table } from '../../../../../Table';
import { TischplanService } from '../../../services/tischplan.service';
import {MetallComponent} from "./metall/metall.component";
import {WasserComponent} from "./wasser/wasser.component";
import {LuftComponent} from "./luft/luft.component";
import {ErdeComponent} from "./erde/erde.component";
import {FeuerComponent} from "./feuer/feuer.component";
import {AlleComponent} from "./alle/alle.component";

@Component({
  selector: 'app-departments',
  templateUrl: 'departments.component.html',
  styleUrls: ['../tischplan.component.css']
})
export class DepartmentsComponent  {
  @Input('tablesErde') tablesErde: Table[];
  @Input('showErdeBool') showErdeBool: boolean;
  @Input('tablesLuft') tablesLuft: Table[];
  @Input('showLuftBool') showLuftBool: boolean;
  @Input('tablesFeuer') tablesFeuer: Table[];
  @Input('showFeuerBool') showFeuerBool: boolean;
  @Input('tablesMetall') tablesMetall: Table[];
  @Input('showMetallBool') showMetallBool: boolean;
  @Input('tablesWasser') tablesWasser: Table[];
  @Input('showWasserBool') showWasserBool: boolean;
  @Input('tables') tables: any;
  @Input('term') term: string;
  @Input('showAlleBool') showAlleBool: boolean;
  @Input('tablesTempAbreise') tablesTempAbreise: any;
  @Output()
  dispensedErde:EventEmitter<any> = new EventEmitter();
  @Output()
  dispensedFeuer:EventEmitter<any> = new EventEmitter();
  @Output()
  dispensedLuft:EventEmitter<any> = new EventEmitter();
  @Output()
  dispensedMetall:EventEmitter<any> = new EventEmitter();
  @Output()
  dispensedWasser:EventEmitter<any> = new EventEmitter();
  @Output()
  updateAzList:EventEmitter<any> = new EventEmitter();
  @Output()
  updateImHausListeElement:EventEmitter<any> = new EventEmitter();

  dateTodayGenerated: any;
  parts: any[] = [];
  date: any[] = [];
  parsedDate: any[] = [];
  tablesChangeBgColorIfAnreise: any;


  @ViewChild(AlleComponent)
  private alleComponent: AlleComponent;

  @ViewChild(WasserComponent)
  private wasserComponent: WasserComponent;

  @ViewChild(MetallComponent)
  private metallComponent: MetallComponent;

  @ViewChild(LuftComponent)
  private luftComponent: LuftComponent;

  @ViewChild(FeuerComponent)
  private feuerComponent: FeuerComponent;

  @ViewChild(ErdeComponent)
  private erdeComponent: ErdeComponent;

  constructor(private tischplanService: TischplanService) {
  }

  ngOnInit() {
  }

  occupied(table){
    //console.log("table.j");
    //console.log(table.j);
    //console.log("table.table");
    //console.log(table.table);
    this.occupy(table.table, table.t);
  }

  occupy(table, j) {
    console.log("occupy called");
    console.log(table);
    this.tischplanService.dispenseTable(table).subscribe(response => {
      console.log(JSON.stringify(response));
      console.log(j);
      //console.log(j);
      //console.log("bgColor:" + JSON.stringify(response));
      //console.log("bgColor:" + JSON.stringify(response[0].tables[j].bgColor));
      //console.log("isBesetzt:" + JSON.stringify(response[0].tables[j].isBesetzt));

      if (typeof response == null || typeof response[j] == null) {
        return;
      } else {
        if (response[j].department === "feuer") {
          this.dispensedFeuer.emit(response[j].tables);
        }
        else if (response[j].department === "erde") {
          this.dispensedErde.emit(response[j].tables);
        }
        else if (response[j].department === "wasser") {
          this.dispensedWasser.emit(response[j].tables);
        }
        else if (response[j].department === "luft") {
          this.dispensedLuft.emit(response[j].tables);
        }
        else if (response[j].department === "metall") {
          this.dispensedMetall.emit(response[j].tables);
        }
      }
    },
      error => console.log("Error: ", error),
      () => {
      console.log(table);
        this.updateAzList.emit();
        if (table.length > 1) {
          for (let i = 0; i < table.length; i++) {
            this.updateImHausListeElement.emit(table[i].table);
          }
        } else {
          if (table.constructor === Array) {
            console.log("isarray");
            this.updateImHausListeElement.emit(table[0].table);
          } else {
            this.updateImHausListeElement.emit(table);
          }

        }
      });

    this.tischplanService.addPlaceholder(table).subscribe(response => {
      console.log("Add placeholder!");
      //console.log("Add placeholder! table ... " + JSON.stringify(table));
      //console.log("placeholder:" + JSON.stringify(response));
      /*
      if (typeof response == null) {
        return;
      } else {
        if (response[j].department === "berglerStubeHubertusStube") {
          this.dispensedFeuer.emit(response[j].tables);
        }
        else if (response[j].department === "Erde") {
          this.dispensedErde.emit(response[j].tables);
        }
        else if (response[j].department === "waeldlerStubeKristallStube") {
          this.dispensedWasser.emit(response[j].tables);
        }
        else if (response[j].department === "edelweissKaminStube") {
          this.dispensedLuft.emit(response[j].tables);
        }
        else if (response[j].department === "teestubeTeelounge") {
          this.dispensedMetall.emit(response[j].tables);
        }
      }
      */
    });
  }

  addInformationToTable(dataString, arrayIndex) {
    //console.log("dataString");
    //console.log(dataString);
    this.tischplanService.addInformationToTable(dataString)
      .subscribe(response => {
        // let arrayIndex = response[1];
        console.log("RESPONSE addInformationToTable:" + JSON.stringify(response));
        if (response === null) {
          return;
        } else {
          if (response[0].department === "feuer") {
            this.dispensedFeuer.emit(response[0].tables);
          }
          else if (response[0].department === "erde") {
            this.dispensedErde.emit(response[0].tables);
          }
          else if (response[0].department === "wasser") {
            this.dispensedWasser.emit(response[0].tables);
          }
          else if (response[0].department === "luft") {
            this.dispensedLuft.emit(response[0].tables);
          }
          else if (response[0].department === "metall") {
            this.dispensedMetall.emit(response[0].tables);
            //this.tablesMetall[arrayIndex] = response.tables[0];
          }
        }
        // //console.log(this.tablesFeuer[arrayIndex]);
      });
    this.updateAzList.emit();
  }


  occupyTableOnDrop(dataString, arrayIndex) {
    //console.log("Occupy Table!");
    this.tischplanService.occupyTable(dataString)
      .subscribe(response => {
        //let arrayIndex = response[1];
        //console.log("arrayIndex:" + arrayIndex);
        //console.log("bgColor:" + JSON.stringify(response[0].tables[arrayIndex].bgColor));
        //console.log("Response occupyTable:" + JSON.stringify(response));
        if (response === null) {
          return;
        } else {
          if (response.tables[0].department === "feuer") {
            this.tablesFeuer[arrayIndex] = response.tables[0];
          }
          else if (response.tables[0].department === "erde") {
            this.tablesErde[arrayIndex] = response.tables[0];
          }
          else if (response.tables[0].department === "wasser") {
            this.tablesWasser[arrayIndex] = response.tables[0];
          }
          else if (response.tables[0].department === "luft") {
            this.tablesLuft[arrayIndex] = response.tables[0];
          }
          else if (response.tables[0].department === "metall") {
            this.tablesMetall[arrayIndex] = response.tables[0];
          }
        }

        //console.log("bgColor:" + JSON.stringify(this.tablesFeuer[arrayIndex]));
      });
    //console.log("placeholder:" + JSON.stringify(this.tablesFeuer[arrayIndex]));
  }

  changeBgColorIfAnreise() {
    setTimeout(() => {
      this.tablesChangeBgColorIfAnreise = this.tablesTempAbreise;
      //console.log('=================================================changeBgColorIfAnreise');
      //console.log(this.tablesChangeBgColorIfAnreise);
      this.dateTodayGenerated = new Date();
      this.parts = [];
      this.parsedDate = [];
      this.date = [];


      for (let a = 0; a < this.tablesChangeBgColorIfAnreise.length; a++) {
        for (let b = 0; b < this.tablesChangeBgColorIfAnreise[a].tables.length; b++) {
          if (this.tablesChangeBgColorIfAnreise[a].tables[b].groups) {
            for (let c = 0; c < this.tablesChangeBgColorIfAnreise[a].tables[b].groups.length; c++) {
              if (this.tablesChangeBgColorIfAnreise[a].tables[b].groups[c]) {
                if (this.tablesChangeBgColorIfAnreise[a].tables[b].groups[c].anreiseValue) {
                  //console.log('tablesChangeBgColorIfAnreise[a].tables[b].groups[c].anreiseValue: ' + c + " " + this.tablesChangeBgColorIfAnreise[a].tables[b].groups[c].anreiseValue);
                  this.parts[0] = this.tablesChangeBgColorIfAnreise[a].tables[b].groups[c].anreiseValue.match(/(\d+)/g);
                } else {
                  this.parts[0] = "undefined";
                }
                if (this.parts[0]) {
                  this.date[0] = new Date(2018, this.parts[0][1] - 1, this.parts[0][0]);
                  this.parsedDate[0] = String(this.date[0]).substring(0, 15);
                }
                // note parts[1]-1
                // console.log('parts[2]' + parts[2] + 'parts[1]' + (parts[1] - 1) + 'parts[0]' + parts[0]);
                // Mon May 31 2010 00:00:00
                // this.tablesRestaurant[j].anreiseValue
                let dateToday = String(this.dateTodayGenerated).substring(0, 15);
                //console.log('Parsed Date --->: ' + this.parsedDate[0]);
                //console.log('this.dateGenerated --->: ' + dateToday);
                if (dateToday.indexOf(this.parsedDate[0]) !== -1) {
                  if (this.tablesChangeBgColorIfAnreise[a].department === "feuer") {
                    if (this.tablesFeuer[b]) {
                      this.tablesFeuer[b].bgColor = "#0a7a74";
                    }
                  }
                  else if (this.tablesChangeBgColorIfAnreise[a].department === "erde") {
                    if (this.tablesErde[b]) {
                      this.tablesErde[b].bgColor = "#0a7a74";
                    }
                  }
                  else if (this.tablesChangeBgColorIfAnreise[a].department === "wasser") {
                    if (this.tablesWasser[b]) {
                      this.tablesWasser[b].bgColor = "#0a7a74";
                    }
                  }
                  else if (this.tablesChangeBgColorIfAnreise[a].department === "luft") {
                    if (this.tablesLuft[b]) {
                      this.tablesLuft[b].bgColor = "#0a7a74";
                    }
                  }
                  else if (this.tablesChangeBgColorIfAnreise[a].department === "metall") {
                    if (this.tablesMetall[b]) {
                      this.tablesMetall[b].bgColor = "#0a7a74";
                    }
                  }
                }
              }
            }
          }
        }
      }
    }, 1000);
  }

  transform(term) {
    if (this.showAlleBool) {
      this.alleComponent.transform(this.tables, term);
    } else if (this.showErdeBool) {
      this.erdeComponent.transform(this.tablesErde, term);
    } else if (this.showFeuerBool) {
      this.feuerComponent.transform(this.tablesFeuer, term);
    } else if (this.showLuftBool) {
      this.luftComponent.transform(this.tablesLuft, term);
    } else if (this.showMetallBool) {
      this.metallComponent.transform(this.tablesMetall, term);
    } else if (this.showWasserBool) {
      this.wasserComponent.transform(this.tablesWasser, term);
    }
  }
}
