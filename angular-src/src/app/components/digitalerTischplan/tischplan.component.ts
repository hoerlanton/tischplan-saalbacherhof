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

@Component({
  selector: 'tischplan',
  templateUrl: 'tischplan.component.html',
  styleUrls: ['tischplan.component.css'],
})

export class TischplanComponent implements OnInit {
  buttonBgColor1: string;
  buttonBgColor2: string;
  buttonBgColor3: string;
  buttonBgColor4: string;
  buttonBgColor5: string;
  fontColor1: string;
  fontColor2: string;
  fontColor3: string;
  fontColor4: string;
  fontColor5: string;
  leftValues: LeftValue[];
  topValues: any[] = [];

  imHausListeElemente: ImHausListe[];
  anreiseListeElemente: AnreiseListe[];
  tracesListeElemente: any[] = [];
  tables: Table[];
  tablesSonnbergZirbn: Table[] = [];
  tablesBauernstube: Table[] = [];
  tablesRestaurant: Table[] = [];
  tablesWintergarten: Table[] = [];
  title: string;
  filesToUpload: Array<File> = [];

  isDropped: any[] = [];
  showBauernStubnBool: boolean;
  showBerglerBool: boolean;
  showWaeldlerBool: boolean;
  showEdelweissBool: boolean;
  showTeeStubeBool: boolean;

  constructor(private tischplanService: TischplanService, private http: Http, private _flashMessagesService: FlashMessagesService, private dragulaService: DragulaService, private element: ElementRef, private renderer: Renderer) {
    let DomBaseElement = this.element.nativeElement;
    let wrapperElementsChildNames = [];

    this.tischplanService.getImHausListe()
      .subscribe(imHausListeElemente => {
        if(imHausListeElemente === null) {
          return;
        } else {
          this.imHausListeElemente = imHausListeElemente[0].data;
          console.log('IM-HAUS-LISTE: ' + this.imHausListeElemente);
        }
      });

    this.tischplanService.getAnreiseListe()
      .subscribe(anreiseListeElemente => {
        if(anreiseListeElemente === null) {
          return;
        } else {
          this.anreiseListeElemente = anreiseListeElemente[0].data;
          console.log(this.anreiseListeElemente);
        }
      });

    this.tischplanService.getTables()
      .subscribe(tables => {
        console.log("TABLES LENGTH: " + tables.length);
        if(tables === null) {
          return;
        } else {

          for (let a = 0; a < tables.length; a++) {
            if (tables[a].department === "Bauernstube") {
              this.tablesBauernstube = tables[a].tables;
            }
            else if (tables[a].department === "Wintergarten") {
              this.tablesWintergarten = tables[a].tables;
              console.log('Test' + JSON.stringify(this.tablesWintergarten));
            }
            else if (tables[a].department === "Sonnberg-Zirbn") {
              this.tablesSonnbergZirbn = tables[a].tables;
            }
            else if (tables[a].department === "Restaurant") {
              this.tablesRestaurant = tables[a].tables;
            }
          }
        }
        console.log(this.tablesBauernstube);
        console.log(this.tablesWintergarten);
        console.log(this.tablesSonnbergZirbn);
        console.log(this.tablesRestaurant);

      });

    this.tischplanService.getTracesListe()
      .subscribe(tracesListeElemente  => {
        console.log('92' + JSON.stringify(tracesListeElemente));
        //console.log("2:" + tracesListeElemente[0].data[0]);
        //console.log(tracesListeElemente[0].data.length);
        //this.tracesListeElemente = tracesListeElemente[0].data;
        this.formatTracesListeElements(tracesListeElemente);
      });

    this.buttonBgColor1 = "f3efe4";
    this.buttonBgColor2 = "f3efe4";
    this.buttonBgColor3 = "f3efe4";
    this.buttonBgColor4 = "f3efe4";
    this.buttonBgColor5 = "f3efe4";
    this.fontColor1 = "0a7a74";
    this.fontColor2 = "0a7a74";
    this.fontColor3 = "0a7a74";
    this.fontColor4 = "0a7a74";
    this.fontColor5 = "0a7a74";

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

  public formatTracesListeElements(tracesListeElemente) {
    for (let o = 0; o < tracesListeElemente[0].data.length; o++) {
      if (tracesListeElemente[0].data[o].length === 7) {
        tracesListeElemente[0].data[o].splice(0, 4);
        tracesListeElemente[0].data[o].splice(6, 7);
      }
    }
    for (let o = 0; o < tracesListeElemente[0].data.length; o++) {
      if (tracesListeElemente[0].data[o].length === 8) {
        tracesListeElemente[0].data.splice(o, 1);
      }
    }
    /*
    for (let o = 0; o < tracesListeElemente[0].data.length; o++) {
      if (tracesListeElemente[0].data[o].length === 24) {
        tracesListeElemente[0].data[o].splice(0, 12);
      }
    }

    for (let o = 0; o < tracesListeElemente[0].data.length; o++) {
      if (tracesListeElemente[0].data[o].length === 19) {
        tracesListeElemente[0].data[o].splice(0, 17);
      }
    }
     */
    for (let o = 0; o < tracesListeElemente[0].data.length; o++) {
      if (tracesListeElemente[0].data[o].length === 1) {
        tracesListeElemente[0].data.splice(o, 1);
      }
    }
    for (let o = 0; o < tracesListeElemente[0].data.length; o++) {
      if (tracesListeElemente[0].data[o].length === 13) {
        tracesListeElemente[0].data[o].splice(8, 12);
      }
    }
/*
    for (let o = 0; o < tracesListeElemente[0].data.length; o++) {
      if (tracesListeElemente[0].data[o].length === 2) {
        tracesListeElemente[0].data[o].splice(1, 2);
      }
    }
 */
    for (let o = 0; o < tracesListeElemente[0].data.length; o++) {
      console.log(o + tracesListeElemente[0].data[o]);
      console.log('length of : ' + o + tracesListeElemente[0].data[o].length);
    }

    let trace = [];

    for (let o = 0; o < tracesListeElemente[0].data.length; o++) {
      trace[o] = [];
    }

    for (let o = 1; o < tracesListeElemente[0].data.length; o++) {
      if (tracesListeElemente[0].data[o] !== undefined) {
       // if (tracesListeElemente[0].data[o].length === 13 || tracesListeElemente[0].data[o].length === 24) {
          trace[o] = tracesListeElemente[0].data[o].concat(tracesListeElemente[0].data[o + 1]);
          console.log('Trace before ->>' + trace[o]);
        //}
      }
    }
    trace[0] = tracesListeElemente[0].data[0].concat(tracesListeElemente[0].data[1]).concat(tracesListeElemente[0].data[2]);
    trace[0].unshift("","","","");
    trace[0].splice(20, 0, "");
    trace[0].splice(20, 0, "");
    trace[0].splice(20, 0, "");
    trace[0].splice(20, 0, "");
    trace[0].splice(20, 0, "");

    this.tracesListeElemente.push(trace[0]);

    for (let o = 1; o < tracesListeElemente[0].data.length; o+=2) {
      if (trace[o].length > 20) {
        this.tracesListeElemente.push(trace[o]);
      }
    }
    console.log('263' + tracesListeElemente[0].data);
    console.log('264 ' + this.tracesListeElemente);
    console.log(this.tracesListeElemente);
    for (let o = 0; o < this.tracesListeElemente.length; o++) {
      //if (trace[o].length === 25 || trace[o].length === 14) {

      //}
    }
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
    let department = JSON.stringify(args[1].id);
    console.log("departement" + department);
    let departementSubstring = department.substring(1, department.length - 1);
    console.log("departementSubstring: " + departementSubstring);
    let tableNumber = args[1].innerText;
    console.log("tableNumber: " + tableNumber);
    let tableNumberSubstring = tableNumber.toString().match(/\d+/);
    console.log("tableNumberSubstring: " + tableNumberSubstring);
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

    this.tischplanService.addInformationToTable(dataString)
      .subscribe(response => {
        // let arrayIndex = response[1];
        console.log("RESPONSE addInformationToTable:" + JSON.stringify(response));
        if(response === null) {
          return;
        } else {
          if (response.tables[0].department === "Sonnberg-Zirbn") {
            this.tablesSonnbergZirbn[response.tables[0].arrayIndex] = response.tables[0];
          }
          else if (response.tables[0].department === "Bauernstube") {
            this.tablesBauernstube[response.tables[0].arrayIndex] = response.tables[0];
          }
          else if (response.tables[0].department === "Restaurant") {
            this.tablesRestaurant[response.tables[0].arrayIndex] = response.tables[0];
          }
          else if (response.tables[0].department === "Wintergarten") {
            this.tablesWintergarten[response.tables[0].arrayIndex] = response.tables[0];
          }
        }
        // console.log(this.tablesSonnbergZirbn[arrayIndex]);
      });

    console.log("Occupy Table!");
    this.tischplanService.occupyTable(dataString)
      .subscribe(response => {
        //let arrayIndex = response[1];
        //console.log("arrayIndex:" + arrayIndex);
        //console.log("bgColor:" + JSON.stringify(response[0].tables[arrayIndex].bgColor));
        console.log("Response occupyTable:" + JSON.stringify(response));
        if(response === null) {
          return;
        } else {
          if (response.tables[0].department === "Sonnberg-Zirbn") {
            this.tablesSonnbergZirbn[response.tables[0].arrayIndex] = response.tables[0];
          }
          else if (response.tables[0].department === "Bauernstube") {
            this.tablesBauernstube[response.tables[0].arrayIndex] = response.tables[0];
          }
          else if (response.tables[0].department === "Restaurant") {
            this.tablesSonnbergZirbn[response.tables[0].arrayIndex] = response.tables[0];
          }
          else if (response.tables[0].department === "Wintergarten") {
            this.tablesSonnbergZirbn[response.tables[0].arrayIndex] = response.tables[0];
          }
        }

        //console.log("bgColor:" + JSON.stringify(this.tablesSonnbergZirbn[arrayIndex]));
      });
/*
    this.tischplanService.removePlaceholder(dataString)
      .subscribe(response => {
        //let arrayIndex = response[1];
        console.log("Response placeholder:" + JSON.stringify(response));
        if(response.tables[0].department === "Sonnberg-Zirbn") {
          this.tablesSonnbergZirbn[response.tables[0].arrayIndex].placeholder = response.tables[0].placeholder;
        }
        else if(response.tables[0].department === "Bauernstube") {
          this.tablesBauernstube[response.tables[0].arrayIndex].placeholder = response.tables[0].placeholder;
        }
        else if(response.tables[0].department === "Restaurant") {
          this.tablesRestaurant[response.tables[0].arrayIndex].placeholder = response.tables[0].placeholder;
        }
        else if(response.tables[0].department === "Wintergarten") {
          this.tablesWintergarten[response.tables[0].arrayIndex].placeholder = response.tables[0].placeholder;
        }
      });

        this.tischplanService.addPlaceholder(addPlaceholderDataString)
          .subscribe(response => {
          console.log("Add placeholder!");
          console.log("Add placeholder! : " + JSON.stringify(response));
          console.log("placeholder:" + JSON.stringify(response[0].tables[j].placeholder));
          //console.log(this.tablesSonnbergZirbn[j].placeholder);
          if(response[0].tables[j].department === "Sonnberg-Zirbn") {
            this.tablesSonnbergZirbn[j].placeholder = response[0].tables[j].placeholder;
          }
          else if(response[0].tables[j].department === "Bauernstube") {
            this.tablesBauernstube[j].placeholder = response[0].tables[j].placeholder;
          }
          else if(response[0].tables[j].department === "Restaurant") {
            this.tablesRestaurant[j].placeholder = response[0].tables[j].placeholder;
          }
          else if(response[0].tables[j].department === "Wintergarten") {
            this.tablesWintergarten[j].placeholder = response[0].tables[j].placeholder;
          }
        });
 */
        //console.log("placeholder:" + JSON.stringify(this.tablesSonnbergZirbn[arrayIndex]));

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
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;

    formData.append('uploads[]', files[0], files[0]['name']);

    this.http.post('/upload', formData)
      .map(files => files.json()).map(res =>
      // 1st parameter is a flash message text
      // 2nd parameter is optional. You can pass object with options.
      this._flashMessagesService.show('Erfolgreich CSV Datei hochgeladen', {cssClass: 'alert-success', timeout: 10000}))
      .subscribe(files => console.log('files', files));
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    //this.successMsg = "Hoi" + fileInput.target.files[0]['name'];
    //console.log(this.successMsg);
    //this.product.photo = fileInput.target.files[0]['name'];
  }

  occupy(table, j) {
    this.tischplanService.dispenseTable(table).subscribe(response => {
      console.log("Dispense Table:");
      console.log("bgColor:" + JSON.stringify(response[0].tables[j].bgColor));
      console.log("isBesetzt:" + JSON.stringify(response[0].tables[j].isBesetzt));
      if(response === null) {
        return;
      } else {
        if (response[0].tables[j].department === "Sonnberg-Zirbn") {
          this.tablesSonnbergZirbn[j] = response[0].tables[j];
        }
        else if (response[0].tables[j].department === "Bauernstube") {
          this.tablesBauernstube[j] = response[0].tables[j];
        }
        else if (response[0].tables[j].department === "Restaurant") {
          this.tablesSonnbergZirbn[j] = response[0].tables[j];
        }
        else if (response[0].tables[j].department === "Wintergarten") {
          this.tablesSonnbergZirbn[j] = response[0].tables[j];
        }
      }
    });

    this.tischplanService.addPlaceholder(table).subscribe(response => {
      console.log("Add placeholder!");
      console.log("Add placeholder! table ... " + JSON.stringify(table));
      console.log("placeholder:" + JSON.stringify(response[0].tables[j].placeholder));
      if(response === null) {
        return;
      } else {
        //console.log(this.tablesSonnbergZirbn[j].placeholder);
        if (response[0].tables[j].department === "Sonnberg-Zirbn") {
          this.tablesSonnbergZirbn[j].placeholder = response[0].tables[j].placeholder;
        }
        else if (response[0].tables[j].department === "Bauernstube") {
          this.tablesBauernstube[j].placeholder = response[0].tables[j].placeholder;
        }
        else if (response[0].tables[j].department === "Restaurant") {
          this.tablesRestaurant[j].placeholder = response[0].tables[j].placeholder;
        }
        else if (response[0].tables[j].department === "Wintergarten") {
          this.tablesWintergarten[j].placeholder = response[0].tables[j].placeholder;
        }
      }
    });

  }

  showBauernStubn() {

    console.log("showBauernStubn!");
    this.showBauernStubnBool = true;
    this.showBerglerBool = false;
    this.showWaeldlerBool = false;
    this.showEdelweissBool = false;
    this.showTeeStubeBool = false;

    if (this.buttonBgColor1 === "f3efe4") {
      this.buttonBgColor1 = "0a7a74";
      this.buttonBgColor2 = "f3efe4";
      this.buttonBgColor3 = "f3efe4";
      this.buttonBgColor4 = "f3efe4";
      this.buttonBgColor5 = "f3efe4";
    } else {
      this.buttonBgColor1 = "f3efe4";
    }
    if (this.fontColor1 === "0a7a74") {
      this.fontColor1 = "eaf3f3";
      this.fontColor2 = "0a7a74";
      this.fontColor3 = "0a7a74";
      this.fontColor4 = "0a7a74";
      this.fontColor5 = "0a7a74";
    } else {
      this.fontColor1 = "0a7a74";
    }
  }

  showBergler() {
    console.log("showBergler!");
    this.showBauernStubnBool = false;
    this.showBerglerBool = true;
    console.log(this.showBerglerBool);
    this.showWaeldlerBool = false;
    this.showEdelweissBool = false;
    this.showTeeStubeBool = false;


    if (this.buttonBgColor2 === "f3efe4") {
      this.buttonBgColor2 = "0a7a74";
      this.buttonBgColor1 = "f3efe4";
      this.buttonBgColor3 = "f3efe4";
      this.buttonBgColor4 = "f3efe4";
      this.buttonBgColor5 = "f3efe4";
    } else {
      this.buttonBgColor2 = "f3efe4";
    }
    if (this.fontColor2 === "0a7a74") {
      this.fontColor2 = "eaf3f3";
      this.fontColor1 = "0a7a74";
      this.fontColor3 = "0a7a74";
      this.fontColor4 = "0a7a74";
      this.fontColor5 = "0a7a74";
    } else {
      this.fontColor2 = "0a7a74";
    }
  }

  showWaeldler() {
    console.log("showWaeldler!");
    this.showBauernStubnBool = false;
    this.showBerglerBool = false;
    this.showWaeldlerBool = true;
    this.showEdelweissBool = false;
    this.showTeeStubeBool = false;


    if (this.buttonBgColor3 === "f3efe4") {
      this.buttonBgColor3 = "0a7a74";
      this.buttonBgColor1 = "f3efe4";
      this.buttonBgColor2 = "f3efe4";
      this.buttonBgColor4 = "f3efe4";
      this.buttonBgColor5 = "f3efe4";
    } else {
      this.buttonBgColor3 = "eaf3f3";
    }
    if (this.fontColor3 === "0a7a74") {
      this.fontColor3 = "eaf3f3";
      this.fontColor1 = "0a7a74";
      this.fontColor2 = "0a7a74";
      this.fontColor4 = "0a7a74";
      this.fontColor5 = "0a7a74";
    } else {
      this.fontColor3 = "0a7a74";
    }
  }

  showEdelweiss() {
    console.log("showEdelweiss!");
    this.showBauernStubnBool = false;
    this.showBerglerBool = false;
    this.showWaeldlerBool = false;
    this.showEdelweissBool = true;
    this.showTeeStubeBool = false;

    if (this.buttonBgColor4 === "f3efe4") {
      this.buttonBgColor4 = "0a7a74";
      this.buttonBgColor1 = "f3efe4";
      this.buttonBgColor2 = "f3efe4";
      this.buttonBgColor3 = "f3efe4";
      this.buttonBgColor5 = "f3efe4";
    } else {
      this.buttonBgColor4 = "eaf3f3";
    }
    if (this.fontColor4 === "0a7a74") {
      this.fontColor4 = "eaf3f3";
      this.fontColor1 = "0a7a74";
      this.fontColor2 = "0a7a74";
      this.fontColor3 = "0a7a74";
      this.fontColor5 = "0a7a74";
    } else {
      this.fontColor4 = "0a7a74";
    }
  }

  showTeestube() {
    console.log("showTeeStube!");
    this.showBauernStubnBool = false;
    this.showBerglerBool = false;
    this.showWaeldlerBool = false;
    this.showEdelweissBool = false;
    this.showTeeStubeBool = true;

    if (this.buttonBgColor5 === "f3efe4") {
      this.buttonBgColor5 = "0a7a74";
      this.buttonBgColor1 = "f3efe4";
      this.buttonBgColor2 = "f3efe4";
      this.buttonBgColor3 = "f3efe4";
      this.buttonBgColor4 = "f3efe4";
    } else {
      this.buttonBgColor5 = "f3efe4";
    }
    if (this.fontColor5 === "0a7a74") {
      this.fontColor5 = "eaf3f3";
      this.fontColor4 = "0a7a74";
      this.fontColor1 = "0a7a74";
      this.fontColor2 = "0a7a74";
      this.fontColor3 = "0a7a74"
    } else {
      this.fontColor5 = "0a7a74";
    }
  }

  moveTable(table, j) {

    console.log("moveTable clicked");
    console.log('table :' + table.number + 'j' +  j);
    this.tischplanService.moveTable(table).subscribe(response => {
      console.log('Response:' + JSON.stringify(response));

      //console.log("topValue:" + JSON.stringify(response[0].tables[0].topValue));
      console.log("topValue:" + JSON.stringify(response[0].tables[j].topValue));
      console.log("leftValue:" + JSON.stringify(response[0].tables[j].leftValue));

      if (response[0].tables[j].department === "Sonnberg-Zirbn") {
        this.tablesSonnbergZirbn = response[0].tables;
      } else if(response[0].tables[j].department === "Bauernstube") {
        this.tablesBauernstube = response[0].tables;
      } else if(response[0].tables[j].department === "Restaurant") {
        this.tablesRestaurant = response[0].tables;
      } else if(response[0].tables[j].department === "Wintergarten") {
        this.tablesWintergarten = response[0].tables;
      }
    });
  }

  printToCart1(printSectionId1: string) {
    let popupWinindow;
    let innerContents = document.getElementById(printSectionId1).innerHTML;
    popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    popupWinindow.document.open();
    popupWinindow.document.write('<html><head><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">\n' +
      '<script src="node_modules/core-js/client/shim.min.js"></script>\n' +
      '<script src="<your-libs-directory>/object-assign.min.js"></script></head><body onload="window.print()">' + innerContents + '</html>');
    popupWinindow.document.close();
  }

  printToCart2(printSectionId2: string){
    let popupWinindow;
    let innerContents = document.getElementById(printSectionId2).innerHTML;
    popupWinindow = window.open('', '_blank', 'width=1000,height=1000,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    popupWinindow.document.open();
    popupWinindow.document.write('<html><head><style> .row .t1 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t2 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t3 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t4 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t5 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t6 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t7 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t8 { width: 100px; height: 90px; border: solid 1px #0a7a74; position: absolute; } .row .t9 { width: 40px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t10 { width: 40px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t11 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t12 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t13 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t14 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t15 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t16 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t17 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t18 { position: absolute; } .row .t19 { position: absolute; }.row .t20 { position: absolute; } .row .t21 { position: absolute; }  .row .t22 { position: absolute; } .row .t23 { position: absolute; } .row .t24 { position: absolute; } .row .t40 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t41 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t42 { width: 80px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t43 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t44 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t45 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t46 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t47 { width: 80px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t48 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t49 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t50 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t51 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t52 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t53 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t54 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t55 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t56 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t57 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t58 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t59 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t60 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t61 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t62 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t63 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t64 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t65 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t66 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t67 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t68 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t69 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t70 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t71 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t72 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t73 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t74 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t75 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t76 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t77 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t78 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t79 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t80 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t81 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t82 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t83 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t84 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t85 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t86 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t87 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t88 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t89 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t501 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t502 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t503 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t504 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t505 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t506 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t507 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t508 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t509 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t510 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t511 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t512 { width: 80px; height: 45px; border: solid 1px #0a7a74; position: absolute; } .row .t513 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t514 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t515 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t516 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t517 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(10deg); } .row .t518 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(30deg); } .row .t519 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(50deg); } .row .t520 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(70deg); } .row .t521 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(90deg); } .row .t522 { width: 80px; height: 45px; border: solid 1px #0a7a74; position: absolute; } .row .t523 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t524 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t525 { width: 40px; height: 40px; position: absolute; transform: rotate(45deg); } </style></head><body onload="window.print()">' + innerContents + '</html>');
    popupWinindow.document.close();
  }
}
