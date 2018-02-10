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
  @Output()
  changeBgColorIfAnreise:EventEmitter<any> = new EventEmitter();
  buttonMoveTable: string;
  buttonInfo: string;
  buttonHinzufuegen: string;
  buttonEntfernen: string;
  trace: boolean;

  constructor(private tischplanService: TischplanService) {
    this.buttonMoveTable = "ff0000";
    this.buttonInfo = "ffffff";
    this.buttonHinzufuegen = "ffffff";
    this.buttonEntfernen = "ffffff";
    this.trace = false;
  }

  ngOnInit() {
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
    if (j != "Empty") {
      return "solid 3px red";
    } else {
      return "";
    }
  }

}
