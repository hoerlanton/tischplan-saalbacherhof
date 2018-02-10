import {Component, OnInit, Input, ViewChild, Output, EventEmitter} from '@angular/core';
import { TischplanComponent } from '../tischplan.component';
import { Table } from '../../../../../Table';

@Component({
  selector: 'app-print',
  templateUrl: 'print.component.html',
  styleUrls: ['../tischplan.component.css']
})
export class PrintComponent implements OnInit {

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

  @Output()
  getTablesOccupied:EventEmitter<number> = new EventEmitter();
  @Output()
  getTablesforAzListe:EventEmitter<any> = new EventEmitter();

  tempTablesArray: any[] = [];
  tempTablesArray2:  any[] = [];
  tempTablesArray1: any[] = [];
  tempTablesArray3: any[] = [];
  uniqueTables: any[] = [];
  tablesOccupied: number;
  tableNumbers: any[] = [];
  trace: boolean;
  tableTemp: any[] = [];
  object: any;
  constructor() {
    this.trace = false;

  }

  ngOnInit() {
  }


  public formatAzListe(tables) {

    this.tables = tables;
    this.tableNumbers = [];

    //(<any>Object).assign( this.photos, photos )

    for (let i: number = 0; i < this.tables.length; i++) {
      if (this.tables[i].groups) {
        for (let j: number = 0; j < this.tables[i].groups.length; j++) {

          let tempObject = {
                        number: this.tables[i].number,
                        department: this.tables[i].department,
                        bgColor: this.tables[i].bgColor,
                        isBesetzt: this.tables[i].isBesetzt,
                        placeholder: this.tables[i].placeholder,
                        border: this.tables[i].border,
        };
          //console.log(this.tables[i].number);
          this.object = Object.assign(this.tables[i].groups[j], tempObject);
          console.log("this.object");
          console.log(this.object);
          this.tableTemp.push(this.object);
        }
      }
    }

    console.log("this.tableTemp");
    console.log(this.tableTemp);


    this.tables =  this.tableTemp.sort(function(a, b) {
      let nameA = "";
      let nameB = "";
        if (typeof a.nameValue !== "undefined" && a.nameValue !== null) {
          nameA = a.nameValue.toUpperCase(); // ignore upper and lowercase
      }
        if (typeof b.nameValue !== "undefined" && b.nameValue !== null) {
          nameB = b.nameValue.toUpperCase(); // ignore upper and lowercase
      }
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
      //}
    });

    for (let i: number = 0; i < this.tables.length; i++) {
      console.log(i);
      if ("nameValue" in this.tables[i]) {
        console.log("--->" + i);
        this.tableNumbers.push(this.tables[i].number);
      }
    }

    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }

    this.uniqueTables = this.tableNumbers.filter( onlyUnique );
    this.tablesOccupied = this.uniqueTables.length;

    this.getTablesOccupied.emit(this.tablesOccupied);
    this.getTablesforAzListe.emit(this.tables);

    console.log(this.tableTemp);
    console.log(this.tables);
    console.log("this.tablesOccupied" + this.tablesOccupied);

    console.log(tables);

    /*
    function filterByID(obj) {
      if (obj.groups) {
        if (obj.groups in obj || obj.groups in obj) {
          return true;
        } else {
          return false;
        }
      }
    }

    this.tempTablesArray = this.tables.filter(filterByID);

    for (let i: number = 0; i < this.tables.length; i++) {
      if (typeof this.tables[i].groups !== "undefined") {
        if (this.tables[i].groups[1]) {
          if (this.tables[i].groups[1].nameValue) {
            this.tables.splice(i, 1);
          }
        }
        else if (this.tables[i].groups) {
          if (this.tables[i].groups[2].nameValue) {
            this.tables.splice(i, 1);
          }
        }
      }
    }

    for (let i: number = 0; i < this.tempTablesArray.length; i++) {
      this.tempTablesArray2[i] = new Table();
    }

    for (let i: number = 0; i < this.tempTablesArray.length; i++) {
      this.tempTablesArray3[i] = new Table();
    }

    for (let i: number = 0; i < this.tempTablesArray.length; i++) {
      this.tempTablesArray1[i] = new Table();
    }


    for (let a: number = 0; a < this.tempTablesArray.length; a++) {
      if (typeof this.tempTablesArray[a].nameValue !== "undefined") {
        this.tempTablesArray2[a].nameValue = this.tempTablesArray[a].nameValue;
        this.tempTablesArray2[a].notiz1Value = this.tempTablesArray[a].notiz1Value;
        this.tempTablesArray2[a].notiz2Value = this.tempTablesArray[a].notiz2Value;
        this.tempTablesArray2[a].personenAnzahlValue = this.tempTablesArray[a].personenAnzahlValue;
        this.tempTablesArray2[a].number = this.tempTablesArray[a].number;
        this.tempTablesArray2[a].zimmernummerValue = this.tempTablesArray[a].zimmernummerValue;
        this.tempTablesArray2[a].anreiseValue = this.tempTablesArray[a].anreiseValue;
        this.tempTablesArray2[a].abreiseValue = this.tempTablesArray[a].abreiseValue;
        this.tempTablesArray2[a].bemerkungValue = this.tempTablesArray[a].bemerkungValue;
        this.tempTablesArray2[a].trace = this.tempTablesArray[a].trace;
        this.tables = this.tables.concat(this.tempTablesArray2[a]);
      }
    }


    for (let a: number = 0; a < this.tempTablesArray.length; a++) {
      if (typeof this.tempTablesArray[a].nameValue2 !== "undefined") {
        this.tempTablesArray1[a].nameValue = this.tempTablesArray[a].nameValue2;
        this.tempTablesArray1[a].notiz1Value = this.tempTablesArray[a].notiz3Value;
        this.tempTablesArray1[a].notiz2Value = this.tempTablesArray[a].notiz4Value;
        this.tempTablesArray1[a].personenAnzahlValue = this.tempTablesArray[a].personenAnzahlValue2;
        this.tempTablesArray1[a].number = this.tempTablesArray[a].number;
        this.tempTablesArray1[a].zimmernummerValue = this.tempTablesArray[a].zimmernummerValue2;
        this.tempTablesArray1[a].anreiseValue = this.tempTablesArray[a].anreiseValue2;
        this.tempTablesArray1[a].abreiseValue = this.tempTablesArray[a].abreiseValue2;
        this.tempTablesArray1[a].bemerkungValue = this.tempTablesArray[a].bemerkungValue3;
        this.tempTablesArray1[a].trace = this.tempTablesArray[a].trace2;
        this.tables = this.tables.concat(this.tempTablesArray1[a]);
      }
    }


    for (let a: number = 0; a < this.tempTablesArray.length; a++) {
      if (typeof this.tempTablesArray[a].nameValue3 !== "undefined") {
        this.tempTablesArray3[a].nameValue = this.tempTablesArray[a].nameValue3;
        this.tempTablesArray3[a].notiz1Value = this.tempTablesArray[a].notiz5Value;
        this.tempTablesArray3[a].notiz2Value = this.tempTablesArray[a].notiz6Value;
        this.tempTablesArray3[a].personenAnzahlValue = this.tempTablesArray[a].personenAnzahlValue3;
        this.tempTablesArray3[a].number = this.tempTablesArray[a].number;
        this.tempTablesArray3[a].zimmernummerValue = this.tempTablesArray[a].zimmernummerValue3;
        this.tempTablesArray3[a].anreiseValue = this.tempTablesArray[a].anreiseValue3;
        this.tempTablesArray3[a].abreiseValue = this.tempTablesArray[a].abreiseValue3;
        this.tempTablesArray3[a].bemerkungValue = this.tempTablesArray[a].bemerkungValue6;
        this.tempTablesArray3[a].trace = this.tempTablesArray[a].trace3;

        this.tables = this.tables.concat(this.tempTablesArray3[a]);
      }
    }
    console.log(this.tempTablesArray1);
    console.log(this.tempTablesArray);
    console.log(this.tempTablesArray2);
    console.log(this.tempTablesArray3);
    console.log('this.tables before sort ');
    console.log(this.tables);

    for (let i: number = 0; i < this.tables.length; i++) {
      if (!("nameValue" in this.tables[i])) {
        this.tables.splice(i,1);
      }
    }

    this.tables = this.tables.sort(function(a, b) {
      let nameA = "";
      let nameB = "";
      if (a.groups) {
        if (typeof a.groups.nameValue !== "undefined" && a.groups.nameValue !== null) {
          nameA = a.groups.nameValue.toUpperCase(); // ignore upper and lowercase
        }
      }
      if (b.groups) {
        if (typeof b.groups.nameValue !== "undefined" && b.groups.nameValue !== null) {
          nameB = b.groups.nameValue.toUpperCase(); // ignore upper and lowercase
        }
      }
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
      //}
    });

    console.log('this.tables after sort: ');

    console.log("this.uniqueTables: ");
    console.log(this.uniqueTables);

    for (let i: number = 0; i < this.tables.length; i++) {
      console.log(i);
      if ("nameValue" in this.tables[i]) {
        console.log("--->" + i);
        this.tableNumbers.push(this.tables[i].number);
      }
    }

    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }

    this.uniqueTables = this.tableNumbers.filter( onlyUnique );
    this.tablesOccupied = this.uniqueTables.length;

    this.getTablesOccupied.emit(this.tablesOccupied);
    this.getTablesforAzListe.emit(this.tables);

    console.log(this.tables);
    console.log("this.tablesOccupied" + this.tablesOccupied);

    console.log(tables);
    */
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
}
