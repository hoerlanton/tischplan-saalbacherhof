import { Component, Directive, Input, ElementRef, ViewChild, Renderer } from '@angular/core';
import { TischplanService } from '../../services/tischplan.service';
import { DragulaService } from "ng2-dragula";
import { Http } from '@angular/http';
import { OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ImHausListe } from '../../../../ImHausListe';
import { AnreiseListe } from '../../../../AnreiseListe';
import { Table } from '../../../../Table';
import { LeftValue } from '../../../../LeftValue';
import {Pipe, PipeTransform} from '@angular/core';
import { PrintComponent }  from './print/print.component';
import { DepartmentmenuComponent }  from './departmentmenu/departmentmenu.component';
import { FormComponent }  from './form/form.component';
import { ImHausListeComponent } from './im-haus-liste/im-haus-liste.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TableplanComponent } from './tableplan/tableplan.component';
import { AnreiseListeComponent } from './anreise-liste/anreise-liste.component';
import { TracesListeComponent } from './traces-liste/traces-liste.component';
import { UploadComponent } from './upload/upload.component';
import { DepartmentsComponent } from './departments/departments.component';

@Component({
  selector: 'tischplan',
  templateUrl: 'tischplan.component.html',
  styleUrls: ['tischplan.component.css'],
})

export class TischplanComponent {

  @ViewChild(PrintComponent)
  private printComponent: PrintComponent;
  @ViewChild(DepartmentmenuComponent)
  private departmentmenuComponent: DepartmentmenuComponent;
  @ViewChild(FormComponent)
  private formComponent: FormComponent;
  @ViewChild(DepartmentsComponent)
  private departmentsComponent: DepartmentsComponent;
  @ViewChild(ImHausListeComponent)
  private imHausListeComponent: ImHausListeComponent;
  @ViewChild(NavigationComponent)
  private navigationComponent: NavigationComponent;
  @ViewChild(TableplanComponent)
  private tableplanComponent: TableplanComponent;
  @ViewChild(AnreiseListeComponent)
  private anreiseListeComponent: AnreiseListeComponent;
  @ViewChild(TracesListeComponent)
  private tracesListeComponent: TracesListeComponent;
  @ViewChild(UploadComponent)
  private uploadComponent: UploadComponent;

  buttonBgColor1: string;
  buttonBgColor2: string;
  buttonBgColor3: string;
  buttonBgColor4: string;
  buttonBgColor5: string;
  buttonBgColor6: string;
  fontColor1: string;
  fontColor2: string;
  fontColor3: string;
  fontColor4: string;
  fontColor5: string;
  fontColor6: string;
  leftValues: LeftValue[];
  topValues: any[] = [];
  dateGenerated: any;
  dateGeneratedListe: any;
  newInformationElements: any[] = [];
  imHausListeElemente: ImHausListe[];
  anreiseListeElemente: AnreiseListe[];
  tracesListeElemente: any[] = [];
  tables: any[] = [];
  uniqueTables: any[] = [];
  tableNumbers: any[] = [];
  tablesOccupied: number;
  tablesTemp: any[] = [];
  tempTablesArray: any[] = [];
  tempTablesArray2:  any[] = [];
  tempTablesArray1: any[] = [];
  tempTablesArray3: any[] = [];
  tablesBerglerStubeHubertusStube: Table[] = [];
  tablesBauernstube: Table[] = [];
  tablesWaeldlerStubeKristallStube: Table[] = [];
  tablesEdelweissKaminStube: Table[] = [];
  tablesTeestubeTeelounge: Table[] = [];
  title: string;
  filesToUpload: Array<File> = [];
  isDropped: any[] = [];
  showBauernStubnBool: boolean;
  showBerglerBool: boolean;
  showWaeldlerBool: boolean;
  showEdelweissBool: boolean;
  showTeeStubeBool: boolean;
  showAlleBool: boolean;
  roomNumber: string;
  tableNumber: string;
  employee: string;
  nameTraceInput: string;
  backgroundColor: string;
  buttonBgColorInfoForm: string;
  buttonBgColorNotizForm: string;
  fontColorInfoForm: string;
  fontColorNotizForm: string;
  showInfoshowNotizFormBoolFormBool: boolean;
  showNotizFormBool: boolean;
  notizElements: any[] = [];
  term: string;
  dateTodayGenerated: any;
  date: any[] = [];
  parts: any[] = [];
  parsedDate: any[] = [];
  quellTisch: any;
  zielTisch: any;
  tableInformation: any[] = [];


  constructor(private tischplanService: TischplanService, private http: Http, private _flashMessagesService: FlashMessagesService, private dragulaService: DragulaService ) {

    this.buttonBgColorInfoForm = "0a7a74";
    this.buttonBgColorNotizForm = "0a7a74";
    this.fontColorInfoForm = "f3efe4";
    this.fontColorNotizForm = "f3efe4";
    this.dateGeneratedListe = new Date();
    this.buttonBgColor1 = "0a7a74";
    this.buttonBgColor2 = "0a7a74";
    this.buttonBgColor3 = "0a7a74";
    this.buttonBgColor4 = "0a7a74";
    this.buttonBgColor5 = "0a7a74";
    this.buttonBgColor6 = "0a7a74";
    this.fontColor1 = "f3efe4";
    this.fontColor2 = "f3efe4";
    this.fontColor3 = "f3efe4";
    this.fontColor4 = "f3efe4";
    this.fontColor5 = "f3efe4";
    this.fontColor6 = "f3efe4";
    this.tablesOccupied = 0;
    this.backgroundColor = "ffffff";
    this.showBauernStubnBool = false;
    this.showBerglerBool = false;
    this.showWaeldlerBool = false;
    this.showEdelweissBool = false;
    this.showTeeStubeBool = false;

    this.tischplanService.getImHausListe()
      .subscribe(imHausListeElemente => {
        //console.log('IM-HAUS-LISTE before:');
        //console.log(imHausListeElemente);
        imHausListeElemente.sort(function(a, b){
          if(a.name < b.name) return -1;
          if(a.name > b.name) return 1;
          return 0;
        });
        this.imHausListeElemente = imHausListeElemente;
        console.log('IM-HAUS-LISTE:');
        console.log(this.imHausListeElemente);
      });

    this.tischplanService.getAnreiseListe()
      .subscribe(anreiseListeElemente => {
        anreiseListeElemente.sort(function(a, b){
          if(a.name < b.name) return -1;
          if(a.name > b.name) return 1;
          return 0;
        });
        this.anreiseListeElemente = anreiseListeElemente;
        console.log(this.anreiseListeElemente);
      });

    this.tischplanService.getNotizElements()
      .subscribe(informationElemente => {
        if(informationElemente === null) {
          return;
        } else {
          this.notizElements = informationElemente;
          console.log(this.notizElements);
        }
      });

    this.tischplanService.getTables()
      .subscribe(tables => {
        console.log("TABLES LENGTH: " + tables.length);
        if (tables === null) {
          return;
        } else {
          for (let a = 0; a < tables.length; a++) {
            if (tables[a].department === "Bauernstube") {
              this.tablesBauernstube = tables[a].tables;
            }
            else if (tables[a].department === "edelweissKaminStube") {
              this.tablesEdelweissKaminStube = tables[a].tables;
              console.log('Test' + JSON.stringify(this.tablesEdelweissKaminStube));
            }
            else if (tables[a].department === "berglerStubeHubertusStube") {
              this.tablesBerglerStubeHubertusStube = tables[a].tables;
            }
            else if (tables[a].department === "waeldlerStubeKristallStube") {
              this.tablesWaeldlerStubeKristallStube = tables[a].tables;
            }
            else if (tables[a].department === "teestubeTeelounge") {
              this.tablesTeestubeTeelounge = tables[a].tables;
            }
          }
        }


        console.log(this.tablesBauernstube);
        console.log(this.tablesEdelweissKaminStube);
        console.log(this.tablesBerglerStubeHubertusStube);
        console.log(this.tablesWaeldlerStubeKristallStube);
        console.log(this.tablesTeestubeTeelounge);



        this.tables = this.tables.concat(this.tablesBauernstube).concat(this.tablesTeestubeTeelounge).concat(this.tablesBerglerStubeHubertusStube).concat(this.tablesEdelweissKaminStube).concat(this.tablesWaeldlerStubeKristallStube);
        this.changeBgColorIfAnreise(tables);
        this.printComponent.formatAzListe(this.tables);
        this.dispenseIfAbreise(tables);

      });



    this.tischplanService.getTracesListe()
      .subscribe(tracesListeElemente => {
        console.log(tracesListeElemente);
        tracesListeElemente.sort(function(a, b){
          if(a.name < b.name) return -1;
          if(a.name > b.name) return 1;
          return 0;
        });

        //console.log("2:" + tracesListeElemente[0].data[0]);
        //console.log(tracesListeElemente[0].data.length);
        //this.tracesListeElemente = tracesListeElemente[0].data;
        this.tracesListeElemente = tracesListeElemente;
        //this.formatTracesListeElements(tracesListeElemente);
      });

    this.tischplanService.getInformationElements()
      .subscribe(informationElemente => {
        if (informationElemente === null) {
          return;
        } else {
          this.newInformationElements = informationElemente;
          console.log(this.newInformationElements);
        }
      });

    dragulaService.drag.subscribe((value) => {
      console.log(`drag: ${value[0]}`);
      this.onDrag(value.slice(1));
    });
    dragulaService.drop.subscribe((value) => {
      console.log(`drop: ${value[0]}`);
      this.onDrop(value.slice(1));
    });
    dragulaService.over.subscribe((value) => {
      console.log(`over: ${value[0]}`);
      this.onOver(value.slice(1));
    });
    dragulaService.out.subscribe((value) => {
      console.log(`out: ${value[0]}`);
      this.onOut(value.slice(1));
    });
  }

  private onDrag(args) {
    let [e, el] = args;
  }

  private onDrop(args) {
    let [e, el] = args;

    console.log("Args = " + JSON.stringify(args));
    console.log("Args1 = " + JSON.stringify(args[1]));
    console.log("Args2 = " + JSON.stringify(args[2]));
    console.log("Args3 = " + JSON.stringify(args[3]));
    console.log("Args4 = " + JSON.stringify(args[4]));
    console.log("e = " + JSON.stringify(e));
    console.log("el = " + JSON.stringify(el));

    let information = args[0].innerText;
      //console.log("information: " + information);
    let informationElements = information.split(/\n/);
      //console.log(informationElements);
    let informationElements2 = [];
    for (let s = 0; s < informationElements.length; s++) {
      informationElements2.push(informationElements[s].split(/:(.+)/)[1]);
      if (informationElements2[s] === undefined) {
        informationElements2[s] = informationElements[s]
      }
    }
      //console.log(informationElements2);
    let department = JSON.stringify(args[1].id);
      //console.log("departement" + department);
    let departementSubstring = department.substring(1, department.length - 1);
      //console.log("departementSubstring: " + departementSubstring);
    let tableNumber = args[1].innerText;
      //console.log("tableNumber: " + tableNumber);
    let tableNumberSubstring = tableNumber.toString().match(/\d+/);
    let numbers = tableNumber.match(/\d+/g);
      //console.log("numbers: " + numbers);
    let arrayIndex = numbers[1];
      //console.log("arrayIndex: " + arrayIndex);
      //console.log("tableNumberSubstring: " + tableNumberSubstring);
    let dataString = [];
    dataString.push(information + departementSubstring + tableNumberSubstring);
    let jBefore = tableNumber.toString().match(/\d+/g);
    let j = jBefore[1];
    //let j = jArray[1];
    let addPlaceholderDataString = [];

    addPlaceholderDataString.push(departementSubstring);
    addPlaceholderDataString.push(tableNumberSubstring);
    console.log('j ===================>>>>>>>>>>>' + addPlaceholderDataString + 'END');
    //console.log(departementSubstring);
    //console.log(tableNumberSubstring);
    this.departmentsComponent.addInformationToTable(dataString, arrayIndex);
    this.departmentsComponent.occupyTableOnDrop(dataString, arrayIndex);
    this.imHausListeComponent.updateImHausListeElement(informationElements2);
    this.anreiseListeComponent.updateAnreiseListeElement(informationElements2);
    this.tracesListeComponent.updateTracesListeElement(informationElements2);
  }

  private onOver(args) {
    let [e, el, container] = args;
    // do something
  }

  private onOut(args) {
    let [e, el, container] = args;
    // do something
  }

  ngOnInit() {
    // this.renderer.invokeElementMethod(this.input.nativeElement, 'focus');
  }

  upload() {
    this.uploadComponent.upload();
  }
  showBauernStubn(){
    this.departmentmenuComponent.showBauernStubn();
  }
  showBergler(){
    this.departmentmenuComponent.showBergler();
  }
  showWaeldler(){
    this.departmentmenuComponent.showWaeldler();
  }
  showEdelweiss(){
    this.departmentmenuComponent.showEdelweiss();
  }
  showTeestube(){
    this.departmentmenuComponent.showTeestube();
  }
  moveTable(table, j) {
    this.tableplanComponent.moveTable(table, j);
  }
  sendInformation(event) {
    this.formComponent.sendInformation(event);
  }
  delete(informationElement, j, event) {
    this.navigationComponent.delete(informationElement, j, event);
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
  dispenseIfAbreise(tables) {
    console.log('=================================================dispenseIfAbreise');
    this.dateTodayGenerated = new Date();

    for (let a = 0; a < tables.length; a++) {
      for (let b = 0; b < tables[a].tables.length; b++) {

        if (tables[a].tables[b].abreiseValue) {
          console.log('tables[a].tables[b].abreiseValue: ' + b + " " + tables[a].tables[b].anreiseValue);
          this.parts[0] = tables[a].tables[b].abreiseValue.match(/(\d+)/g);} else {
          this.parts[0] = "undefined";
        }
        if (tables[a].tables[b].abreiseValue2) {
          this.parts[1] = tables[a].tables[b].abreiseValue2.match(/(\d+)/g);}else {
          this.parts[1] = "undefined";
        }
        if (tables[a].tables[b].abreiseValue3) {
          this.parts[2] = tables[a].tables[b].abreiseValue3.match(/(\d+)/g);}else {
          this.parts[2] = "undefined";
        }
        if (tables[a].tables[b].abreiseValue4) {
          this.parts[3] = tables[a].tables[b].abreiseValue4.match(/(\d+)/g);}else {
          this.parts[3] = "undefined";
        }
        if (tables[a].tables[b].abreiseValue4) {
          this.parts[4] = tables[a].tables[b].abreiseValue4.match(/(\d+)/g);}else {
          this.parts[4] = "undefined";
        }
        if (tables[a].tables[b].abreiseValue4) {
          this.parts[5] = tables[a].tables[b].abreiseValue4.match(/(\d+)/g);}else {
          this.parts[5] = "undefined";
        }
        if (tables[a].tables[b].abreiseValue7) {
          this.parts[6] = tables[a].tables[b].abreiseValue7.match(/(\d+)/g);}else {
          this.parts[6] = "undefined";
        }
        if (tables[a].tables[b].abreiseValue8) {
          this.parts[7] = tables[a].tables[b].abreiseValue8.match(/(\d+)/g);}else {
          this.parts[7] = "undefined";
        }
        if (tables[a].tables[b].abreiseValue9) {
          this.parts[8] = tables[a].tables[b].abreiseValue9.match(/(\d+)/g);}else {
          this.parts[8] = "undefined";
        }
        if (tables[a].tables[b].abreiseValue10) {
          this.parts[9] = tables[a].tables[b].abreiseValue10.match(/(\d+)/g);}else {
          this.parts[9] = "undefined";
        }
        if (tables[a].tables[b].abreiseValue11) {
          this.parts[10] = tables[a].tables[b].abreiseValue11.match(/(\d+)/g);}else {
          this.parts[10] = "undefined";
        }
        if (tables[a].tables[b].abreiseValue12) {
          this.parts[11] = tables[a].tables[b].abreiseValue12.match(/(\d+)/g);}else {
          this.parts[11] = "undefined";
        }
        if (tables[a].tables[b].abreiseValue13) {
          this.parts[12] = tables[a].tables[b].abreiseValue13.match(/(\d+)/g);}else {
          this.parts[12] = "undefined";
        }
        if (tables[a].tables[b].abreiseValue14) {
          this.parts[13] = tables[a].tables[b].abreiseValue14.match(/(\d+)/g);}else {
          this.parts[13] = "undefined";
        }
        if (tables[a].tables[b].abreiseValue15) {
          this.parts[14] = tables[a].tables[b].abreiseValue15.match(/(\d+)/g);}else {
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
          this.departmentsComponent.occupy(tables[a].tables[b], b);
        }
      }
    }
  }


  umsetzen() {

    let targetTable = this.quellTisch.zielTisch;
    let quellTischNumber = this.quellTisch.quellTisch;
    let targetTableNumber = Number(this.quellTisch.zielTisch);
    let quellTischNumberNumber = Number(this.quellTisch.quellTisch);
    console.log('targetTable' + targetTable);
    console.log('quellTischNumber' + quellTischNumber);
    let tableToMove = {department: "Empty", number: "0", targetTable: "0", targetDepartment: "Empty"};
    let j = 0;

    if (Number(this.quellTisch.quellTisch) >= 30 && Number(this.quellTisch.quellTisch) <= 47) {
      tableToMove.department = "berglerStubeHubertusStube";
      j = 1;
    } else if (Number(this.quellTisch.quellTisch) >= 10 && Number(this.quellTisch.quellTisch) <= 26) {
      tableToMove.department = "Bauernstube";
      j = 0;
    } else if (Number(this.quellTisch.quellTisch) >= 50 && Number(this.quellTisch.quellTisch) <= 77) {
      tableToMove.department = "waeldlerStubeKristallStube";
      j = 4;
    } else if (Number(this.quellTisch.quellTisch) >= 80 && Number(this.quellTisch.quellTisch) <= 99) {
      tableToMove.department = "edelweissKaminStube";
      j = 3;
    } else if (Number(this.quellTisch.quellTisch) >= 1 && Number(this.quellTisch.quellTisch) <= 6) {
      tableToMove.department = "teestubeTeelounge";
      j = 2;
    }

    if (Number(this.quellTisch.zielTisch) >= 30 && Number(this.quellTisch.zielTisch) <= 47) {
      tableToMove.department = "berglerStubeHubertusStube";
    } else if (Number(this.quellTisch.zielTisch) >= 10 && Number(this.quellTisch.zielTisch) <= 26) {
      tableToMove.department = "Bauernstube";
    } else if (Number(this.quellTisch.zielTisch) >= 50 && Number(this.quellTisch.zielTisch) <= 77) {
      tableToMove.department = "waeldlerStubeKristallStube";
    } else if (Number(this.quellTisch.zielTisch) >= 80 && Number(this.quellTisch.zielTisch) <= 99) {
      tableToMove.department = "edelweissKaminStube";
    } else if (Number(this.quellTisch.zielTisch) >= 1 && Number(this.quellTisch.zielTisch) <= 6) {
      tableToMove.department = "teestubeTeelounge";
    }



    let index = 0;
    tableToMove.number = quellTischNumber;
    tableToMove.targetTable = targetTable;
    console.log(tableToMove);
    this.tischplanService.getTables()
      .subscribe(tables => {

        for (let a = 0; a < tables.length; a++) {
          for (let b = 0; b < tables[a].tables.length; b++) {
            if (tables[a].department === tableToMove.department) {
              console.log("YEEEES BEFORE");
              if (tables[a].tables[b].number === tableToMove.number) {
                console.log("YEEEEEEEESSSSS AFFFTEEEER!!!");
                console.log(tables[a].tables[b]);
                this.tableInformation.push(tables[a].tables[b]);
                console.log(this.tableInformation);
                console.log('index: ' + index);
                this.tableInformation.push(tableToMove);
              }
            }
          }
        }
        for (let a = 0; a < tables.length; a++) {
          for (let b = 0; b < tables[a].tables.length; b++) {
            if (tables[a].department === tableToMove.targetDepartment) {
              if (tables[a].tables[b].number === tableToMove.targetTable) {
                index = b;
              }
            }
          }
        }
        this.departmentsComponent.addInformationToTable(this.tableInformation, index);
        this.departmentsComponent.occupyTableOnDrop(tableToMove, index);
        //this.departmentsComponent.umsetzen(this.tableInformation, index);
      });
    this.departmentsComponent.occupy(tableToMove, j);
  }

}
