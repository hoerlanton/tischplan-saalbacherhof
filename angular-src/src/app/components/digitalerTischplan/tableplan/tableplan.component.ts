import { Component, OnInit, Input, Output, EventEmitter, AfterViewChecked } from '@angular/core';
import { Table } from '../../../../../Table';
import { TischplanService } from '../../../services/tischplan.service';

@Component({
  selector: 'app-tableplan',
  templateUrl: 'tableplan.component.html',
  styleUrls: ['../tischplan.component.css']
})
export class TableplanComponent implements AfterViewChecked {

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
  @Output()
  changeBgColorIfAnreise:EventEmitter<any> = new EventEmitter();
  buttonMoveTable: string;
  buttonInfo: string;
  buttonHinzufuegen: string;
  buttonEntfernen: string;
  trace: boolean;
  erwBauernstube: any[] = [];
  kiBauernstube: any[] = [];
  erwEdelweiss: any[] = [];
  kiEdelweiss: any[] = [];
  erwWaeldlerStubeKristallStube: any[] = [];
  kiWaeldlerStubeKristallStube: any[] = [];
  erwBerglerStubeHubertusStube: any[] = [];
  kiBerglerStubeHubertusStube: any[] = [];
  erwTeestubeTeelounge: any[] = [];
  kiTeestubeTeelounge: any[] = [];

  constructor(private tischplanService: TischplanService) {
    this.buttonMoveTable = "ff0000";
    this.buttonInfo = "ffffff";
    this.buttonHinzufuegen = "ffffff";
    this.buttonEntfernen = "ffffff";
    this.trace = false;
  }

  ngAfterViewChecked() {
    this.sumUpPersonenAnzahl();
    }

  addTable(table, j) {

    console.log("moveTable clicked");
    console.log('table :' + table.number + 'j' + j);
    this.tischplanService.addTable(table).subscribe(response => {
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
      this.changeBgColorIfAnreise.emit();
    });
  }
    removeTable(table, j) {

      console.log("moveTable clicked");
      console.log('table :' + table.number + 'j' + j);
      this.tischplanService.removeTable(table).subscribe(response => {
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
        this.changeBgColorIfAnreise.emit();
      });
    }

  getStyle(a) {
    //console.log("a");
    //console.log(a);
    if (typeof a === "undefined") {
      return "solid 3px rgb(243, 239, 228)";
    } else {
      for (let b = 0; b < a.length; b++) {
        //console.log("LOOOOOOOOOOOOOOP");
        //console.log(a[b].traceValue);
        if (a[b].traceValue != "Empty" || a[b].newTraceText) {
          this.trace = true;
        }
      }
      if (this.trace) {
        this.trace = false;
        return "solid 3px red";
      } else {
        return "solid 3px rgb(243, 239, 228)";
      }
    }
  }

  none(event) {
    event.stopPropagation();
  }

  mouseEnterMoveTableButton() {
    console.log("mouse enter : ");
    if (this.buttonMoveTable === "ff0000") {
      console.log('mouse enter1 :');
      this.buttonMoveTable = "bc0000";
    }
  }

  mouseLeaveMoveTableButton() {
    if (this.buttonMoveTable === "bc0000") {
      console.log('mouse leave1 :');
      this.buttonMoveTable = "ff0000";
    }
  }

  mouseEnterInfoButton() {
    console.log("mouse enter : ");
    if (this.buttonInfo === "ffffff") {
      console.log('mouse enter1 :');
      this.buttonInfo = "cfcfcf";
    }
  }

  mouseLeaveInfoButton() {
    if (this.buttonInfo === "cfcfcf") {
      console.log('mouse leave1 :');
      this.buttonInfo = "ffffff";
    }
  }

  mouseEnterHinzufuegenButton() {
    console.log("mouse enter : ");
    if (this.buttonHinzufuegen === "ffffff") {
      console.log('mouse enter1 :');
      this.buttonHinzufuegen = "cfcfcf";
    }
  }

  mouseLeaveHinzufuegenButton() {
    if (this.buttonHinzufuegen === "cfcfcf") {
      console.log('mouse leave1 :');
      this.buttonHinzufuegen = "ffffff";
    }
  }

  mouseEnterEntfernenButton() {
    console.log("mouse enter : ");
    if (this.buttonEntfernen === "ffffff") {
      console.log('mouse enter1 :');
      this.buttonEntfernen = "cfcfcf";
    }
  }

  mouseLeaveEntfernenButton() {
    if (this.buttonEntfernen === "cfcfcf") {
      console.log('mouse leave1 :');
      this.buttonEntfernen = "ffffff";
    }
  }

  getStyleTrace(j) {
    if (j != "-") {
      return "solid 3px red";
    } else {
      return "";
    }
  }

  sumUpPersonenAnzahl(){
    console.log("sumUpPersonenAnzahl called");
    if (this.tablesTeestubeTeelounge) {
      for (let p = 0; p < this.tablesTeestubeTeelounge.length; p++) {
        this.erwTeestubeTeelounge[p] = 0;
        this.kiTeestubeTeelounge[p] = 0;
        if (this.tablesTeestubeTeelounge[p].groups) {
          for (let g = 0; g < this.tablesTeestubeTeelounge[p].groups.length; g++) {
            if (this.tablesTeestubeTeelounge[p].groups[g].personenAnzahlValue) {
              let erwKi = this.tablesTeestubeTeelounge[p].groups[g].personenAnzahlValue.match(/\d+/g);
              if (erwKi != null) {
                //console.log(erwKi);
                this.erwTeestubeTeelounge[p] = this.erwTeestubeTeelounge[p] + Number(erwKi[0]);
                //console.log(this.erw[p]);
              }
              if (erwKi != null) {
                //console.log(erwKi);
                this.kiTeestubeTeelounge[p] = this.kiTeestubeTeelounge[p] + Number(erwKi[1]);
                //console.log(this.ki[p]);
              }
            }
          }
        }
      }
    }
    if (this.tablesEdelweissKaminStube) {
      for (let p = 0; p < this.tablesEdelweissKaminStube.length; p++) {
        this.erwEdelweiss[p] = 0;
        this.kiEdelweiss[p] = 0;
        if (this.tablesEdelweissKaminStube[p].groups) {
          for (let g = 0; g < this.tablesEdelweissKaminStube[p].groups.length; g++) {
            if (this.tablesEdelweissKaminStube[p].groups[g].personenAnzahlValue) {
              let erwKi = this.tablesEdelweissKaminStube[p].groups[g].personenAnzahlValue.match(/\d+/g);
              if (erwKi != null) {
                //console.log(erwKi);
                this.erwEdelweiss[p] = this.erwEdelweiss[p] + Number(erwKi[0]);
                //console.log(this.erw[p]);
              }
              if (erwKi != null) {
                //console.log(erwKi);
                this.kiEdelweiss[p] = this.kiEdelweiss[p] + Number(erwKi[1]);
                //console.log(this.ki[p]);
              }
            }
          }
        }
      }
    }
    if (this.tablesBauernstube) {
      for (let p = 0; p < this.tablesBauernstube.length; p++) {
        this.erwBauernstube[p] = 0;
        this.kiBauernstube[p] = 0;
        if (this.tablesBauernstube[p].groups) {
          for (let g = 0; g < this.tablesBauernstube[p].groups.length; g++) {
            if (this.tablesBauernstube[p].groups[g].personenAnzahlValue) {
              let erwKi = this.tablesBauernstube[p].groups[g].personenAnzahlValue.match(/\d+/g);
              if (erwKi != null) {
                //console.log(erwKi);
                this.erwBauernstube[p] = this.erwBauernstube[p] + Number(erwKi[0]);
                //console.log(this.erw[p]);
              }
              if (erwKi != null) {
                //console.log(erwKi);
                this.kiBauernstube[p] = this.kiBauernstube[p] + Number(erwKi[1]);
                //console.log(this.ki[p]);
              }
            }
          }
        }
      }
    }
    if (this.tablesBerglerStubeHubertusStube) {
      for (let p = 0; p < this.tablesBerglerStubeHubertusStube.length; p++) {
        this.erwBerglerStubeHubertusStube[p] = 0;
        this.kiBerglerStubeHubertusStube[p] = 0;
        if (this.tablesBerglerStubeHubertusStube[p].groups) {
          for (let g = 0; g < this.tablesBerglerStubeHubertusStube[p].groups.length; g++) {
            if (this.tablesBerglerStubeHubertusStube[p].groups[g].personenAnzahlValue) {
              let erwKi = this.tablesBerglerStubeHubertusStube[p].groups[g].personenAnzahlValue.match(/\d+/g);
              if (erwKi != null) {
                //console.log(erwKi);
                this.erwBerglerStubeHubertusStube[p] = this.erwBerglerStubeHubertusStube[p] + Number(erwKi[0]);
                //console.log(this.erw[p]);
              }
              if (erwKi != null) {
                //console.log(erwKi);
                this.kiBerglerStubeHubertusStube[p] = this.kiBerglerStubeHubertusStube[p] + Number(erwKi[1]);
                //console.log(this.ki[p]);
              }
            }
          }
        }
      }
    }
    if (this.tablesWaeldlerStubeKristallStube) {
      for (let p = 0; p < this.tablesWaeldlerStubeKristallStube.length; p++) {
        this.erwWaeldlerStubeKristallStube[p] = 0;
        this.kiWaeldlerStubeKristallStube[p] = 0;
        if (this.tablesWaeldlerStubeKristallStube[p].groups) {
          for (let g = 0; g < this.tablesWaeldlerStubeKristallStube[p].groups.length; g++) {
            if (this.tablesWaeldlerStubeKristallStube[p].groups[g].personenAnzahlValue) {
              let erwKi = this.tablesWaeldlerStubeKristallStube[p].groups[g].personenAnzahlValue.match(/\d+/g);
              if (erwKi != null) {
                //console.log(erwKi);
                this.erwWaeldlerStubeKristallStube[p] = this.erwWaeldlerStubeKristallStube[p] + Number(erwKi[0]);
                //console.log(this.erw[p]);
              }
              if (erwKi != null) {
                //console.log(erwKi);
                this.kiWaeldlerStubeKristallStube[p] = this.kiWaeldlerStubeKristallStube[p] + Number(erwKi[1]);
                //console.log(this.ki[p]);
              }
            }
          }
        }
      }
    }
  }


}
