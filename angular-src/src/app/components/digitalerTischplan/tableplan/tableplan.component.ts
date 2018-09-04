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
  exportKi1Wasser:EventEmitter<any> = new EventEmitter();
  @Output()
  exportKi2Wasser:EventEmitter<any> = new EventEmitter();
  @Output()
  exportKi3Wasser:EventEmitter<any> = new EventEmitter();
  @Output()
  exportKi4Wasser:EventEmitter<any> = new EventEmitter();
  @Output()
  exportErwWasser:EventEmitter<any> = new EventEmitter();
  @Output()
  exportKi1Luft:EventEmitter<any> = new EventEmitter();
  @Output()
  exportKi2Luft:EventEmitter<any> = new EventEmitter();
  @Output()
  exportKi3Luft:EventEmitter<any> = new EventEmitter();
  @Output()
  exportKi4Luft:EventEmitter<any> = new EventEmitter();
  @Output()
  exportErwLuft:EventEmitter<any> = new EventEmitter();

  @Output()
  exportKi1Metall:EventEmitter<any> = new EventEmitter();
  @Output()
  exportKi2Metall:EventEmitter<any> = new EventEmitter();
  @Output()
  exportKi3Metall:EventEmitter<any> = new EventEmitter();
  @Output()
  exportKi4Metall:EventEmitter<any> = new EventEmitter();

  @Output()
  exportErwMetall:EventEmitter<any> = new EventEmitter();
  @Output()
  exportKi1Feuer:EventEmitter<any> = new EventEmitter();
  @Output()
  exportKi2Feuer:EventEmitter<any> = new EventEmitter();
  @Output()
  exportKi3Feuer:EventEmitter<any> = new EventEmitter();
  @Output()
  exportKi4Feuer:EventEmitter<any> = new EventEmitter();
  @Output()
  exportErwFeuer:EventEmitter<any> = new EventEmitter();
  @Output()
  exportKi1Erde:EventEmitter<any> = new EventEmitter();
  @Output()
  exportKi2Erde:EventEmitter<any> = new EventEmitter();
  @Output()
  exportKi3Erde:EventEmitter<any> = new EventEmitter();
  @Output()
  exportKi4Erde:EventEmitter<any> = new EventEmitter();
  @Output()
  exportErwErde:EventEmitter<any> = new EventEmitter();

  buttonMoveTable: string;
  buttonInfo: string;
  buttonHinzufuegen: string;
  buttonEntfernen: string;
  trace: boolean;
  erwErde: any[] = [];
  kiErde: any[] = [];
  ki1Erde: any[] = [];
  ki2Erde: any[] = [];
  ki3Erde: any[] = [];
  ki4Erde: any[] = [];
  erwFeuer: any[] = [];
  ki1Feuer: any[] = [];
  ki2Feuer: any[] = [];
  ki3Feuer: any[] = [];
  ki4Feuer: any[] = [];
  erwLuft: any[] = [];
  ki1Luft: any[] = [];
  ki2Luft: any[] = [];
  ki3Luft: any[] = [];
  ki4Luft: any[] = [];
  erwMetall: any[] = [];
  ki1Metall: any[] = [];
  ki2Metall: any[] = [];
  ki3Metall: any[] = [];
  ki4Metall: any[] = [];
  erwWasser: any[] = [];
  ki1Wasser: any[] = [];
  ki2Wasser: any[] = [];
  ki3Wasser: any[] = [];
  ki4Wasser: any[] = [];


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
    if (typeof a === "undefined") {
      return "solid 3px rgb(243, 239, 228)";
    } else {
      for (let b = 0; b < a.length; b++) {
        //console.log("LOOOOOOOOOOOOOOP");
        //console.log(a[b].InfoValue);
        if (a[b].pinfo1Value != "" || a[b].pinfo2Value != "" || a[b].pinfo3Value != "" || a[b].newInfoText) {
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
    if (this.tablesWasser) {
      for (let p = 0; p < this.tablesWasser.length; p++) {
        this.erwWasser[p] = 0;
        this.ki1Wasser[p] = 0;
        this.ki2Wasser[p] = 0;
        this.ki3Wasser[p] = 0;
        this.ki4Wasser[p] = 0;

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
                this.ki1Wasser[p] = this.ki1Wasser[p] + Number(erwKi[1]);
                //console.log(this.ki[p]);
              }
              if (erwKi != null) {
                //console.log(erwKi);
                this.ki2Wasser[p] = this.ki2Wasser[p] + Number(erwKi[2]);
                //console.log(this.ki[p]);
              }
              if (erwKi != null) {
                //console.log(erwKi);
                this.ki3Wasser[p] = this.ki3Wasser[p] + Number(erwKi[3]);
                //console.log(this.ki[p]);
              }
              if (erwKi != null) {
                //console.log(erwKi);
                this.ki4Wasser[p] = this.ki4Wasser[p] + Number(erwKi[4]);
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
        this.ki1Feuer[p] = 0;
        this.ki2Feuer[p] = 0;
        this.ki3Feuer[p] = 0;
        this.ki4Feuer[p] = 0;

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
                this.ki1Feuer[p] = this.ki1Feuer[p] + Number(erwKi[1]);
                //console.log(this.ki[p]);
              }
              if (erwKi != null) {
                //console.log(erwKi);
                this.ki2Feuer[p] = this.ki2Feuer[p] + Number(erwKi[2]);
                //console.log(this.ki[p]);
              }
              if (erwKi != null) {
                //console.log(erwKi);
                this.ki3Feuer[p] = this.ki3Feuer[p] + Number(erwKi[3]);
                //console.log(this.ki[p]);
              }
              if (erwKi != null) {
                //console.log(erwKi);
                this.ki4Feuer[p] = this.ki4Feuer[p] + Number(erwKi[4]);
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
        this.ki1Erde[p] = 0;
        this.ki2Erde[p] = 0;
        this.ki3Erde[p] = 0;
        this.ki4Erde[p] = 0;

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
                this.ki1Erde[p] = this.ki1Erde[p] + Number(erwKi[1]);
                //console.log(this.ki[p]);
              }
              if (erwKi != null) {
                //console.log(erwKi);
                this.ki2Erde[p] = this.ki2Erde[p] + Number(erwKi[2]);
                //console.log(this.ki[p]);
              }
              if (erwKi != null) {
                //console.log(erwKi);
                this.ki3Erde[p] = this.ki3Erde[p] + Number(erwKi[3]);
                //console.log(this.ki[p]);
              }
              if (erwKi != null) {
                //console.log(erwKi);
                this.ki4Erde[p] = this.ki4Erde[p] + Number(erwKi[4]);
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
        this.ki1Metall[p] = 0;
        this.ki2Metall[p] = 0;
        this.ki3Metall[p] = 0;
        this.ki4Metall[p] = 0;

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
                this.ki1Metall[p] = this.ki1Metall[p] + Number(erwKi[1]);
                //console.log(this.ki[p]);
              }
              if (erwKi != null) {
                //console.log(erwKi);
                this.ki2Metall[p] = this.ki2Metall[p] + Number(erwKi[2]);
                //console.log(this.ki[p]);
              }
              if (erwKi != null) {
                //console.log(erwKi);
                this.ki3Metall[p] = this.ki3Metall[p] + Number(erwKi[3]);
                //console.log(this.ki[p]);
              }
              if (erwKi != null) {
                //console.log(erwKi);
                this.ki4Metall[p] = this.ki4Metall[p] + Number(erwKi[4]);
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
        this.ki1Luft[p] = 0;
        this.ki2Luft[p] = 0;
        this.ki3Luft[p] = 0;
        this.ki4Luft[p] = 0;

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
                this.ki1Luft[p] = this.ki1Luft[p] + Number(erwKi[1]);
                //console.log(this.ki[p]);
              }
              if (erwKi != null) {
                //console.log(erwKi);
                this.ki2Luft[p] = this.ki2Luft[p] + Number(erwKi[2]);
                //console.log(this.ki[p]);
              }
              if (erwKi != null) {
                //console.log(erwKi);
                this.ki3Luft[p] = this.ki3Luft[p] + Number(erwKi[3]);
                //console.log(this.ki[p]);
              }
              if (erwKi != null) {
                //console.log(erwKi);
                this.ki4Luft[p] = this.ki4Luft[p] + Number(erwKi[4]);
                //console.log(this.ki[p]);
              }
            }
          }
        }
      }
    }
    this.exportKi1Wasser.emit(this.ki1Wasser);
    this.exportKi2Wasser.emit(this.ki2Wasser);
    this.exportKi3Wasser.emit(this.ki3Wasser);
    this.exportKi4Wasser.emit(this.ki4Wasser);
    this.exportErwWasser.emit(this.erwWasser);
    this.exportKi1Luft.emit(this.ki1Luft);
    this.exportKi2Luft.emit(this.ki2Luft);
    this.exportKi3Luft.emit(this.ki3Luft);
    this.exportKi4Luft.emit(this.ki4Luft);
    this.exportErwLuft.emit(this.erwLuft);
    this.exportKi1Metall.emit(this.ki1Metall);
    this.exportKi2Metall.emit(this.ki2Metall);
    this.exportKi3Metall.emit(this.ki3Metall);
    this.exportKi4Metall.emit(this.ki4Metall);
    this.exportErwMetall.emit(this.erwMetall);
    this.exportKi1Feuer.emit(this.ki1Feuer);
    this.exportKi2Feuer.emit(this.ki2Feuer);
    this.exportKi3Feuer.emit(this.ki3Feuer);
    this.exportKi4Feuer.emit(this.ki4Feuer);
    this.exportErwFeuer.emit(this.erwFeuer);
    this.exportKi1Erde.emit(this.ki1Erde);
    this.exportKi2Erde.emit(this.ki2Erde);
    this.exportKi3Erde.emit(this.ki3Erde);
    this.exportKi4Erde.emit(this.ki4Erde);
    this.exportErwErde.emit(this.erwErde);
  }
}
