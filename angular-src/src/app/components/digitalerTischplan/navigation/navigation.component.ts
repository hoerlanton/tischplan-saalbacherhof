import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { TischplanService } from '../../../services/tischplan.service';
import { Http } from '@angular/http';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.css']
})
export class NavigationComponent implements OnInit {
  filesToUpload: Array<File> = [];
  @Input('tablesTempAbreise') tablesTempAbreise: any[] = [];
  @Input('newInformationElements') newInformationElements: any[] = [];
  @Input('tablesOccupied') tablesOccupied: number;
  @Output()
  umsetzenExport:EventEmitter<any> = new EventEmitter();
  @Output()
  abreisenExport:EventEmitter<any> = new EventEmitter();
  term: string;
  @Output()
  termExport:EventEmitter<any> = new EventEmitter();
  dateTodayGenerated: any;
  date: any[] = [];
  parts: any[] = [];
  parsedDate: any[] = [];
  quellTisch: any;
  zielTisch: any;
  tableInformation: any[] = [];

  constructor(private tischplanService: TischplanService, private http: Http, private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
  }

  delete(informationElement, j, event) {
    console.log(informationElement);
    console.log(j);
    event.stopPropagation();
    this.tischplanService.deleteInformationElement(informationElement)
      .subscribe(informationElement => {
        this.newInformationElements.splice(j, 1);
      });
  }

  none(event) {
    event.stopPropagation();
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
    popupWinindow.document.write('<html><head><style> .row .t1 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t2 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t3 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t4 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t5 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t6 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t7 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t8 { width: 100px; height: 90px; border: solid 1px #0a7a74; position: absolute; } .row .t9 { width: 40px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t10 { width: 40px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t11 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t12 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t13 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t14 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t15 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t16 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t17 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t18 { position: absolute; } .row .t19 { position: absolute; }.row .t20 { position: absolute; } .row .t21 { position: absolute; }  .row .t22 { position: absolute; } .row .t23 { position: absolute; } .row .t24 { position: absolute; } .row .t40 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t41 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t42 { width: 80px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t43 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t44 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t45 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t46 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t47 { width: 80px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t48 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t49 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t50 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t51 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t52 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t53 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t54 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t55 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t56 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t57 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t58 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t59 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t60 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t61 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t62 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t63 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t64 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t65 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t66 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t67 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t68 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t69 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t70 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t71 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t72 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t73 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t74 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t75 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t76 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t77 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t78 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t79 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t80 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t81 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t82 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t83 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t84 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t85 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t86 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t87 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t88 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t89 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t501 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t502 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t503 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t504 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t505 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t506 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t507 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t508 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t509 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t510 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t511 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t512 { width: 80px; height: 45px; border: solid 1px #0a7a74; position: absolute; } .row .t513 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t514 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t515 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t516 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t517 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(10deg); } .row .t518 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(30deg); } .row .t519 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(50deg); } .row .t520 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(70deg); } .row .t521 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(90deg); } .row .t522 { width: 80px; height: 45px; border: solid 1px #0a7a74; position: absolute; } .row .t523 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t524 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t525 { width: 40px; height: 40px; position: absolute; transform: rotate(45deg); } .t25 { position: absolute; } .t26 { position: absolute; } .t30 { position: absolute; } .t31 { position: absolute; } .t32 { position: absolute; } .t33 { position: absolute; } .t34 { position: absolute; } .t35 { position: absolute; } .t36 { position: absolute; } .t37 { position: absolute; } .t38 { position: absolute; }  .t90 { position: absolute; } .t91 { position: absolute; } .t92 { position: absolute; } .t93 { position: absolute; } .t94 { position: absolute; } .t95 { position: absolute; } .t96 { position: absolute; } .t97 { position: absolute; } .t98 { position: absolute; } .t99 { position: absolute; } </style></head><body onload="window.print()">' + innerContents + '</html>');
    popupWinindow.document.close();
  }

  printToCart3(printSectionId3: string){
    let popupWinindow;
    let innerContents = document.getElementById(printSectionId3).innerHTML;
    popupWinindow = window.open('', '_blank', 'width=1000,height=1000,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    popupWinindow.document.open();
    popupWinindow.document.write('<html><head><style></style></head><body onload="window.print()">' + innerContents + '</html>');
    popupWinindow.document.close();
  }

  neuLaden() {
    window.location.reload()
  }


  umsetzen() {
      event.preventDefault();
      console.log("UMSETZTEN CALLED");
      let quellTisch = this.quellTisch;
      let zielTisch = this.zielTisch;
      //this.umsetzenExport.emit({quellTisch, zielTisch});

    // let targetTable = this.quellTisch.zielTisch;
    // let quellTischNumber = this.quellTisch.quellTisch;
    // let targetTableNumber = Number(this.quellTisch.zielTisch);
    // let quellTischNumberNumber = Number(this.quellTisch.quellTisch);
    console.log('targetTable' + zielTisch);
    console.log('quellTischNumber' + quellTisch);
    let tableToMove = {department: "Empty", number: "0", targetTable: "0", targetDepartment: "Empty"};
    let j = 0;

    if (Number(this.quellTisch) >= 30 && Number(this.quellTisch) <= 47) {
      tableToMove.department = "berglerStubeHubertusStube";
      j = 1;
    } else if (Number(this.quellTisch) >= 10 && Number(this.quellTisch) <= 26) {
      tableToMove.department = "Bauernstube";
      j = 0;
    } else if (Number(this.quellTisch) >= 50 && Number(this.quellTisch) <= 77) {
      tableToMove.department = "waeldlerStubeKristallStube";
      j = 4;
    } else if (Number(this.quellTisch) >= 80 && Number(this.quellTisch) <= 99) {
      tableToMove.department = "edelweissKaminStube";
      j = 3;
    } else if (Number(this.quellTisch) >= 1 && Number(this.quellTisch) <= 6) {
      tableToMove.department = "teestubeTeelounge";
      j = 2;
    }

    if (Number(this.zielTisch) >= 30 && Number(this.zielTisch) <= 47) {
      tableToMove.targetDepartment = "berglerStubeHubertusStube";
    } else if (Number(this.zielTisch) >= 10 && Number(this.zielTisch) <= 26) {
      tableToMove.targetDepartment = "Bauernstube";
    } else if (Number(this.zielTisch) >= 50 && Number(this.zielTisch) <= 77) {
      tableToMove.targetDepartment = "waeldlerStubeKristallStube";
    } else if (Number(this.zielTisch) >= 80 && Number(this.zielTisch) <= 99) {
      tableToMove.targetDepartment = "edelweissKaminStube";
    } else if (Number(this.zielTisch) >= 1 && Number(this.zielTisch) <= 6) {
      tableToMove.targetDepartment = "teestubeTeelounge";
    }
    let indexZiel = 0;
    let indexQuell = 0;

    tableToMove.number = this.quellTisch;
    tableToMove.targetTable = this.zielTisch;
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
                this.tableInformation.push(tableToMove);
              }
            }
          }
        }
        for (let a = 0; a < tables.length; a++) {
          for (let b = 0; b < tables[a].tables.length; b++) {
            if (tables[a].department === tableToMove.targetDepartment) {
              if (tables[a].tables[b].number === tableToMove.targetTable) {
                indexZiel = b;
              }
            }
          }
        }
        for (let a = 0; a < tables.length; a++) {
          for (let b = 0; b < tables[a].tables.length; b++) {
            if (tables[a].department === tableToMove.department) {
              if (tables[a].tables[b].number === tableToMove.number) {
                indexQuell = b;
              }
            }
          }
        }
        let tableInformationExport = this.tableInformation;
        this.umsetzenExport.emit({tableToMove, indexZiel, indexQuell, tableInformationExport});
      });
    //this.departmentsComponent.umsetzen(this.tableInformation, index);
  };

  keyDownFunction(event) {
    if(event.keyCode == 13) {
      //alert('you just clicked enter');
      this.termExport.emit(this.term);
    }
  }

  onKey(event: any) { // without type in
    this.term = event.target.value;
    console.log(this.term);
    this.termExport.emit(this.term);

  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

  upload(){
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

  dispenseIfAbreise() {
    let tables = this.tablesTempAbreise;
    console.log('=================================================dispenseIfAbreise');
    this.dateTodayGenerated = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

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
        let abreisenExport = tables[a].tables[b];
        if (dateToday.indexOf(this.parsedDate[0] || this.parsedDate[1] || this.parsedDate[2] || this.parsedDate[3] || this.parsedDate[4] || this.parsedDate[5] || this.parsedDate[6] || this.parsedDate[7] || this.parsedDate[8] || this.parsedDate[9] || this.parsedDate[10] || this.parsedDate[11] || this.parsedDate[12] || this.parsedDate[13] || this.parsedDate[14] || this.parsedDate[15]) !== -1) {
          this.abreisenExport.emit({abreisenExport, b});
        }
      }
    }
  }

}