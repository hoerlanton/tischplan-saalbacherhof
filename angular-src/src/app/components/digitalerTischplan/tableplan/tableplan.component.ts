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
  @Input('tablesErde') tablesErde: Table[];
  @Input('showErdeBool') showErdeBool: boolean;
  @Input('tablesFeuer') tablesFeuer: Table[];
  @Input('showFeuerBool') showFeuerBool: boolean;
  @Input('tablesMetall') tablesMetall: Table[];
  @Input('showMetallBool') showMetallBool: boolean;
  @Input('tablesWasser') tablesWasser: Table[];
  @Input('showWasserBool') showWasserBool: boolean;
  @Input('tablesLuft') tablesLuft: Table[];
  @Input('showLuftBool') showLuftBool: boolean;
  @Input('showAlleBool') showAlleBool: boolean;
  @Input('showTablePlanBool') showTablePlanBool: boolean;
  @Output()
  movedMetall:EventEmitter<any> = new EventEmitter();
  @Output()
  movedErde:EventEmitter<any> = new EventEmitter();
  @Output()
  movedLuft:EventEmitter<any> = new EventEmitter();
  @Output()
  movedFeuer:EventEmitter<any> = new EventEmitter();
  @Output()
  movedWasser:EventEmitter<any> = new EventEmitter();
  @Output()
  changeBgColorIfAnreise:EventEmitter<any> = new EventEmitter();

  @Output()
  exportKiWasser:EventEmitter<any> = new EventEmitter();
  @Output()
  exportErwWasser:EventEmitter<any> = new EventEmitter();
  @Output()
  exportKiLuft:EventEmitter<any> = new EventEmitter();
  @Output()
  exportErwLuft:EventEmitter<any> = new EventEmitter();
  @Output()
  exportKiMetall:EventEmitter<any> = new EventEmitter();
  @Output()
  exportErwMetall:EventEmitter<any> = new EventEmitter();
  @Output()
  exportKiFeuer:EventEmitter<any> = new EventEmitter();
  @Output()
  exportErwFeuer:EventEmitter<any> = new EventEmitter();
  @Output()
  exportKiErde:EventEmitter<any> = new EventEmitter();
  @Output()
  exportErwErde:EventEmitter<any> = new EventEmitter();

  buttonMoveTable: string;
  buttonInfo: string;
  buttonHinzufuegen: string;
  buttonEntfernen: string;
  trace: boolean;
  erwErde: any[] = [];
  kiErde: any[] = [];
  erwFeuer: any[] = [];
  kiFeuer: any[] = [];
  erwLuft: any[] = [];
  kiLuft: any[] = [];
  erwMetall: any[] = [];
  kiMetall: any[] = [];
  erwWasser: any[] = [];
  kiWasser: any[] = [];

  constructor(private tischplanService: TischplanService) {
    this.buttonMoveTable = "ff0000";
    this.buttonInfo = "ffffff";
    this.buttonHinzufuegen = "ffffff";
    this.buttonEntfernen = "ffffff";
    this.trace = false;
  }

  ngAfterViewChecked() {
  }

  addTable(table, j) {

    console.log("moveTable clicked");
    console.log('table :' + table.number + 'j' + j);
    this.tischplanService.addTable(table).subscribe(response => {
      console.log('Response:' + JSON.stringify(response));
      //console.log("topValue:" + JSON.stringify(response[0].tables[0].topValue));
      console.log("topValue:" + JSON.stringify(response[0].tables[j].topValue));
      console.log("leftValue:" + JSON.stringify(response[0].tables[j].leftValue));

      if (response[0].tables[j].department === "metall") {
        this.movedMetall.emit(response[0].tables);
      } else if (response[0].tables[j].department === "erde") {
        this.movedErde.emit(response[0].tables);
      } else if (response[0].tables[j].department === "luft") {
        this.movedLuft.emit(response[0].tables);
      } else if (response[0].tables[j].department === "feuer") {
        this.movedFeuer.emit(response[0].tables);
      } else if (response[0].tables[j].department === "wasser") {
        this.movedWasser.emit(response[0].tables);
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
        if (response[0].tables[j].department === "metall") {
          this.movedMetall.emit(response[0].tables);
        } else if (response[0].tables[j].department === "erde") {
          this.movedErde.emit(response[0].tables);
        } else if (response[0].tables[j].department === "luft") {
          this.movedLuft.emit(response[0].tables);
        } else if (response[0].tables[j].department === "feuer") {
          this.movedFeuer.emit(response[0].tables);
        } else if (response[0].tables[j].department === "wasser") {
          this.movedWasser.emit(response[0].tables);
        }
        this.changeBgColorIfAnreise.emit();
      });
    }

  getStyle(a) {
    //console.log("a");
    //console.log(a);
    if (typeof a == null || typeof a === "undefined") {
      return "solid 3px rgb(243, 239, 228)";
    } else {
      for (let b = 0; b < a.length; b++) {
        //console.log("LOOOOOOOOOOOOOOP");
        //console.log(a[b].traceValue);
        if (typeof a[b] != null) {
          if (a[b].traceValue != "-" || a[b].newTraceText) {
            this.trace = true;
          }
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
    if (this.tablesWasser) {
      for (let p = 0; p < this.tablesWasser.length; p++) {
        this.erwWasser[p] = 0;
        this.kiWasser[p] = 0;
        if (this.tablesWasser[p].groups) {
          for (let g = 0; g < this.tablesWasser[p].groups.length; g++) {
            if (this.tablesWasser[p].groups[g].personenAnzahlValue) {
              let erwKi = this.tablesWasser[p].groups[g].personenAnzahlValue.match(/\d+/g);
              if (erwKi != null) {
                //console.log(erwKi);
                this.erwWasser[p] = this.erwWasser[p] + Number(erwKi[0]);
                //console.log(this.erw[p]);
              }
              if (erwKi != null) {
                //console.log(erwKi);
                this.kiWasser[p] = this.kiWasser[p] + Number(erwKi[1]);
                //console.log(this.ki[p]);
              }
            }
          }
        }
      }
    }
    if (this.tablesFeuer) {
      for (let p = 0; p < this.tablesFeuer.length; p++) {
        this.erwFeuer[p] = 0;
        this.kiFeuer[p] = 0;
        if (this.tablesFeuer[p].groups) {
          for (let g = 0; g < this.tablesFeuer[p].groups.length; g++) {
            if (this.tablesFeuer[p].groups[g].personenAnzahlValue) {
              let erwKi = this.tablesFeuer[p].groups[g].personenAnzahlValue.match(/\d+/g);
              if (erwKi != null) {
                //console.log(erwKi);
                this.erwFeuer[p] = this.erwFeuer[p] + Number(erwKi[0]);
                //console.log(this.erw[p]);
              }
              if (erwKi != null) {
                //console.log(erwKi);
                this.kiFeuer[p] = this.kiFeuer[p] + Number(erwKi[1]);
                //console.log(this.ki[p]);
              }
            }
          }
        }
      }
    }
    if (this.tablesErde) {
      for (let p = 0; p < this.tablesErde.length; p++) {
        this.erwErde[p] = 0;
        this.kiErde[p] = 0;
        if (this.tablesErde[p].groups) {
          for (let g = 0; g < this.tablesErde[p].groups.length; g++) {
            if (this.tablesErde[p].groups[g].personenAnzahlValue) {
              let erwKi = this.tablesErde[p].groups[g].personenAnzahlValue.match(/\d+/g);
              if (erwKi != null) {
                //console.log(erwKi);
                this.erwErde[p] = this.erwErde[p] + Number(erwKi[0]);
                //console.log(this.erw[p]);
              }
              if (erwKi != null) {
                //console.log(erwKi);
                this.kiErde[p] = this.kiErde[p] + Number(erwKi[1]);
                //console.log(this.ki[p]);
              }
            }
          }
        }
      }
    }
    if (this.tablesMetall) {
      for (let p = 0; p < this.tablesMetall.length; p++) {
        this.erwMetall[p] = 0;
        this.kiMetall[p] = 0;
        if (this.tablesMetall[p].groups) {
          for (let g = 0; g < this.tablesMetall[p].groups.length; g++) {
            if (this.tablesMetall[p].groups[g].personenAnzahlValue) {
              let erwKi = this.tablesMetall[p].groups[g].personenAnzahlValue.match(/\d+/g);
              if (erwKi != null) {
                //console.log(erwKi);
                this.erwMetall[p] = this.erwMetall[p] + Number(erwKi[0]);
                //console.log(this.erw[p]);
              }
              if (erwKi != null) {
                //console.log(erwKi);
                this.kiMetall[p] = this.kiMetall[p] + Number(erwKi[1]);
                //console.log(this.ki[p]);
              }
            }
          }
        }
      }
    }
    if (this.tablesLuft) {
      for (let p = 0; p < this.tablesLuft.length; p++) {
        this.erwLuft[p] = 0;
        this.kiLuft[p] = 0;
        if (this.tablesLuft[p].groups) {
          for (let g = 0; g < this.tablesLuft[p].groups.length; g++) {
            if (this.tablesLuft[p].groups[g].personenAnzahlValue) {
              let erwKi = this.tablesLuft[p].groups[g].personenAnzahlValue.match(/\d+/g);
              if (erwKi != null) {
                //console.log(erwKi);
                this.erwLuft[p] = this.erwLuft[p] + Number(erwKi[0]);
                //console.log(this.erw[p]);
              }
              if (erwKi != null) {
                //console.log(erwKi);
                this.kiLuft[p] = this.kiLuft[p] + Number(erwKi[1]);
                //console.log(this.ki[p]);
              }
            }
          }
        }
      }
    }
    this.exportKiWasser.emit(this.kiWasser);
    this.exportErwWasser.emit(this.erwWasser);
    this.exportKiLuft.emit(this.kiLuft);
    this.exportErwLuft.emit(this.erwLuft);
    this.exportKiMetall.emit(this.kiMetall);
    this.exportErwMetall.emit(this.erwMetall);
    this.exportKiFeuer.emit(this.kiFeuer);
    this.exportErwFeuer.emit(this.erwFeuer);
    this.exportKiErde.emit(this.kiErde);
    this.exportErwErde.emit(this.erwErde);
  }
}
