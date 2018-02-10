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
  tempTablesArray2: any[] = [];
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
  tablesTempAbreise: any[] = [];
  abreiseTablePlusIndex: any;
  umsetzenInfoVar: any;
  showTablePlanBool: boolean;
  buttonBgColorShowTablePlan: string;
  fontColorShowTablePlan: string;


  constructor(private tischplanService: TischplanService, private http: Http, private _flashMessagesService: FlashMessagesService, private dragulaService: DragulaService) {

    this.buttonBgColorInfoForm = "0a7a74";
    this.buttonBgColorNotizForm = "0a7a74";
    this.fontColorInfoForm = "f3efe4";
    this.fontColorNotizForm = "f3efe4";
    this.buttonBgColorShowTablePlan = "0a7a74";
    this.fontColorShowTablePlan = "f3efe4";
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

    this.tischplanService.getNotizElements()
      .subscribe(informationElemente => {
        if (informationElemente === null) {
          return;
        } else {
          this.notizElements = informationElemente;
          console.log(this.notizElements);
        }
      });

    this.getTables();
    this.reloadLists();

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

  showBauernStubn() {
    this.departmentmenuComponent.showBauernStubn();
  }

  showBergler() {
    this.departmentmenuComponent.showBergler();
  }

  showWaeldler() {
    this.departmentmenuComponent.showWaeldler();
  }

  showEdelweiss() {
    this.departmentmenuComponent.showEdelweiss();
  }

  showTeestube() {
    this.departmentmenuComponent.showTeestube();
  }

  /*
  moveTable(table, j) {
    this.tableplanComponent.moveTable(table, j);
  }
  */

  sendInformation(event) {
    this.formComponent.sendInformation(event);
  }

  delete(informationElement, j, event) {
    this.navigationComponent.delete(informationElement, j, event);
  }

  changeBgColorIfAnreise() {
    this.departmentsComponent.changeBgColorIfAnreise();
  }

  abreisenRemoval() {
    this.departmentsComponent.occupy(this.abreiseTablePlusIndex.abreisenExport, this.abreiseTablePlusIndex.b);
  }
  umsetzen() {
    this.departmentsComponent.addInformationToTable(this.umsetzenInfoVar.tableInformationExport, this.umsetzenInfoVar.indexZiel);
    this.departmentsComponent.occupyTableOnDrop(this.umsetzenInfoVar.tableToMove, this.umsetzenInfoVar.indexZiel);
    setTimeout(() => {
      this.departmentsComponent.occupy(this.umsetzenInfoVar.tableToMove, this.umsetzenInfoVar.indexQuell);
    }, 2000);
  }

  reloadLists(){
    this.tischplanService.getImHausListe()
      .subscribe(imHausListeElemente => {
        //console.log('IM-HAUS-LISTE before:');
        //console.log(imHausListeElemente);

        imHausListeElemente.sort(function (a, b) {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
        this.imHausListeElemente = imHausListeElemente;
        console.log('IM-HAUS-LISTE:');
        console.log(this.imHausListeElemente);
        setTimeout(() => {
          this.imHausListeComponent.sortList();
        }, 3000);
      });

    this.tischplanService.getAnreiseListe()
      .subscribe(anreiseListeElemente => {
        anreiseListeElemente.sort(function (a, b) {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
        this.anreiseListeElemente = anreiseListeElemente;
        console.log(this.anreiseListeElemente);
      });


    this.tischplanService.getTracesListe()
      .subscribe(tracesListeElemente => {
        console.log(tracesListeElemente);
        tracesListeElemente.sort(function (a, b) {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });

        //console.log("2:" + tracesListeElemente[0].data[0]);
        //console.log(tracesListeElemente[0].data.length);
        //this.tracesListeElemente = tracesListeElemente[0].data;
        this.tracesListeElemente = tracesListeElemente;
        //this.formatTracesListeElements(tracesListeElemente);
      });
  }
  updateAzList(){
    setTimeout(() => {
      this.getTables();
      setTimeout(() => {
        this.tables = this.tablesBauernstube.concat(this.tablesTeestubeTeelounge).concat(this.tablesBerglerStubeHubertusStube).concat(this.tablesEdelweissKaminStube).concat(this.tablesWaeldlerStubeKristallStube);
        console.log('this.tables: in updateAzList');
        console.log(this.tables);
        this.printComponent.formatAzListe(this.tables);
      }, 3000);
    }, 1000);
  }

  getTables(){
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
        this.tablesTempAbreise = tables;

        this.tables = this.tablesBauernstube.concat(this.tablesTeestubeTeelounge).concat(this.tablesBerglerStubeHubertusStube).concat(this.tablesEdelweissKaminStube).concat(this.tablesWaeldlerStubeKristallStube);
        this.changeBgColorIfAnreise();
        this.printComponent.formatAzListe(this.tables);
        //this.dispenseIfAbreise(tables);

      });
  }
}






