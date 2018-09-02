import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { TischplanService } from '../../../services/tischplan.service';
import { Http } from '@angular/http';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

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
  abreisenExportExport:EventEmitter<any> = new EventEmitter();
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
  @Output()
  reloadLists:EventEmitter<any> = new EventEmitter();
  @Output()
  transformExport: EventEmitter<any> = new EventEmitter();
  printToCart1Button: string;
  printToCart2Button: string;
  printToCart3Button: string;
  abreiseAbbrechenButton: string;
  abreiseAusfuehrenButton: string;
  abreiseAusfuehrenMorgenButton: string;

  constructor(private tischplanService: TischplanService, private http: Http, private _flashMessagesService: FlashMessagesService, public authService: AuthService, private router: Router) {

    this.printToCart1Button = "ffffff";
    this.printToCart2Button = "ffffff";
    this.printToCart3Button = "ffffff";
    this.abreiseAbbrechenButton = "ffffff";
    this.abreiseAusfuehrenButton = "ff0000";
    this.abreiseAusfuehrenMorgenButton = "ff0000";
  }

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
    popupWinindow.document.write('<html><head><style> .row .tW001 { position: absolute; } .row .tW002 { position: absolute; } .row .tW003 { position: absolute; } .row .tW004 { position: absolute; } .row .tW005 { position: absolute; } .row .tW006 { position: absolute; } .row .tW007 { position: absolute; } .row .tW008 { position: absolute; } .row .tW009 { position: absolute; } .row .tW010 { position: absolute; } .row .tW011 { position: absolute; } .row .tW012 { position: absolute; } .row .tW013 { position: absolute; } .row .tW014 { position: absolute; } .row .tW015 { position: absolute; } .row .tW016 { position: absolute; } .row .tW017 { position: absolute; } .row .tW018 { position: absolute; } .row .tW019 { position: absolute; } .row .tW020 { position: absolute; } .row .tW021 { position: absolute; } .row .tW022 { position: absolute; } .row .tW023 { position: absolute; } .row .tW024 { position: absolute; } .row .tW025 { position: absolute; } .row .tW026 { position: absolute; } .row .tL001 { position: absolute; } .row .tL002 { position: absolute; } .row .tL003 { position: absolute; } .row .tL004 { position: absolute; } .row .tL005 { position: absolute; } .row .tL006 { position: absolute; } .row .tL007 { position: absolute; } .row .tL008 { position: absolute; } .row .tL009 { position: absolute; } .row .tL010 { position: absolute; } .row .tL011 { position: absolute; } .row .tL012 { position: absolute; } .row .tL013 { position: absolute; } .row .tL014 { position: absolute; } .row .tL015 { position: absolute; } .row .tL016 { position: absolute; } .row .tL017 { position: absolute; } .row .tL018 { position: absolute; } .row .tL019 { position: absolute; } .row .tL020 { position: absolute; } .row .tL021 { position: absolute; } .row .tL022 { position: absolute; } .row .tL023 { position: absolute; } .row .tL024 { position: absolute; } .row .tL025 { position: absolute; } .row .tL026 { position: absolute; } .row .tF001 { position: absolute; } .row .tF002 { position: absolute; } .row .tF003 { position: absolute; } .row .tF004 { position: absolute; } .row .tF005 { position: absolute; } .row .tF006 { position: absolute; } .row .tF007 { position: absolute; } .row .tF008 { position: absolute; } .row .tF009 { position: absolute; } .row .tF010 { position: absolute; } .row .tF011 { position: absolute; } .row .tF012 { position: absolute; } .row .tF013 { position: absolute; } .row .tF014 { position: absolute; } .row .tF015 { position: absolute; } .row .tF016 { position: absolute; } .row .tF017 { position: absolute; } .row .tF018 { position: absolute; } .row .tF019 { position: absolute; } .row .tF020 { position: absolute; } .row .tF021 { position: absolute; } .row .tF022 { position: absolute; } .row .tF023 { position: absolute; } .row .tF024 { position: absolute; } .row .tF025 { position: absolute; } .row .tF026 { position: absolute; } .row .tE001 { position: absolute; } .row .tE002 { position: absolute; } .row .tE003 { position: absolute; } .row .tE004 { position: absolute; } .row .tE005 { position: absolute; } .row .tE006 { position: absolute; } .row .tE007 { position: absolute; } .row .tE008 { position: absolute; } .row .tE009 { position: absolute; } .row .tE010 { position: absolute; } .row .tE011 { position: absolute; } .row .tE012 { position: absolute; } .row .tE013 { position: absolute; } .row .tE014 { position: absolute; } .row .tE015 { position: absolute; } .row .tE016 { position: absolute; } .row .tE017 { position: absolute; } .row .tE018 { position: absolute; } .row .tE019 { position: absolute; } .row .tE020 { position: absolute; } .row .tE021 { position: absolute; } .row .tE022 { position: absolute; } .row .tE023 { position: absolute; } .row .tE024 { position: absolute; } .row .tE025 { position: absolute; } .row .tE026 { position: absolute; } .row .tM001 { position: absolute; } .row .tM002 { position: absolute; } .row .tM003 { position: absolute; } .row .tM004 { position: absolute; } .row .tM005 { position: absolute; } .row .tM006 { position: absolute; } .row .tM007 { position: absolute; } .row .tM008 { position: absolute; } .row .tM009 { position: absolute; } .row .tM010 { position: absolute; } .row .tM011 { position: absolute; } .row .tM012 { position: absolute; } .row .tM013 { position: absolute; } .row .tM014 { position: absolute; } .row .tM015 { position: absolute; } .row .tM016 { position: absolute; } .row .tM017 { position: absolute; } .row .tM018 { position: absolute; } .row .tM019 { position: absolute; } .row .tM020 { position: absolute; } .row .tM021 { position: absolute; } .row .tM022 { position: absolute; } .row .tM023 { position: absolute; } .row .tM024 { position: absolute; } .row .tM025 { position: absolute; } .row .tM026 { position: absolute; } .row .tM001 { position: absolute; } .row .tM002 { position: absolute; } .row .tM003 { position: absolute; } .row .tM004 { position: absolute; } .row .tM005 { position: absolute; } .row .tM006 { position: absolute; } .row .tM007 { position: absolute; } .row .tM008 { position: absolute; } .row .tM009 { position: absolute; } .row .tM010 { position: absolute; } .row .tM011 { position: absolute; } .row .tM012 { position: absolute; } .row .tM013 { position: absolute; } .row .tM014 { position: absolute; } .row .tM015 { position: absolute; } .row .tM016 { position: absolute; } .row .tM017 { position: absolute; } .row .tM018 { position: absolute; } .row .tM019 { position: absolute; } .row .tM020 { position: absolute; } .row .tM021 { position: absolute; } .row .tM022 { position: absolute; } .row .tM023 { position: absolute; } .row .tM024 { position: absolute; } .row .tM025 { position: absolute; } .row .tM026 { position: absolute; } </style></head><body onload="window.print()">' + innerContents + '</html>');
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
      let quellTisch = this.quellTisch.charAt(0).toUpperCase() + this.quellTisch.slice(1);
      let zielTisch = this.zielTisch.charAt(0).toUpperCase() + this.zielTisch.slice(1);
      this.tableInformation = [];
      //this.umsetzenExport.emit({quellTisch, zielTisch});

    // let targetTable = this.quellTisch.zielTisch;
    // let quellTischNumber = this.quellTisch.quellTisch;
    // let targetTableNumber = Number(this.quellTisch.zielTisch);
    // let quellTischNumberNumber = Number(this.quellTisch.quellTisch);
    console.log('targetTable' + zielTisch);
    console.log('quellTischNumber' + quellTisch);
    let tableToMove = {department: "Empty", number: "0", targetTable: "0", targetDepartment: "Empty"};
    let indexZiel = 0;
    let indexQuell = 0;

    if (quellTisch.indexOf('W') !== -1) {
      tableToMove.department = "wasser";
      indexQuell = 3;
    } else if (quellTisch.indexOf('E') !== -1 ) {
      tableToMove.department = "erde";
      indexQuell = 2;
    } else if (quellTisch.indexOf('L') !== -1 ) {
      tableToMove.department = "luft";
      indexQuell = 1;
    } else if (quellTisch.indexOf('F') !== -1 ) {
      tableToMove.department = "feuer";
      indexQuell = 4;
    } else if (quellTisch.indexOf('M') !== -1 ) {
      tableToMove.department = "metall";
      indexQuell = 0;
    }
    if (zielTisch.indexOf('W') !== -1) {
      tableToMove.targetDepartment = "wasser";
      indexZiel = 3;
    } else if (zielTisch.indexOf('E') !== -1) {
      tableToMove.targetDepartment = "erde";
      indexZiel = 2;
    } else if (zielTisch.indexOf('L') !== -1) {
      tableToMove.targetDepartment = "luft";
      indexZiel = 1;
    } else if (zielTisch.indexOf('F') !== -1) {
      tableToMove.targetDepartment = "feuer";
      indexZiel = 4;
    } else if (zielTisch.indexOf('M') !== -1) {
      tableToMove.targetDepartment = "metall";
      indexZiel = 0;
    }
    tableToMove.number = quellTisch;
    tableToMove.targetTable = zielTisch;
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
                console.log(this.tableInformation);
              }
            }
          }
        }

        console.log("this.tableInformation IIIIIIIII");
        let tableInformationExport = this.tableInformation;
        this.umsetzenExport.emit({tableToMove, indexZiel, indexQuell, tableInformationExport});
      });
  };

  keyDownFunction(event) {
    if(event.keyCode == 13) {
      //alert('you just clicked enter');
      this.termExport.emit(this.term);
    }
  }

  brandClick() {
    window.location.reload()
  }


  onKey(event: any) { // without type in
    this.term = event.target.value;
    console.log(this.term);
    this.termExport.emit(this.term);
    this.transformExport.emit(this.term);
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

  upload() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;

    formData.append('uploads[]', files[0], files[0]['name']);

    this.http.post('/upload', formData)
      .map(files => files.json()).map(res => {
      // 1st parameter is a flash message text
      // 2nd parameter is optional. You can pass object with options.
      if (res[0].originalname) {
        this._flashMessagesService.show('Erfolgreich ' + JSON.stringify(res[0].originalname) + " hochgeladen", {
          cssClass: 'alert-success',
          timeout: 10000
        })} else {
        this._flashMessagesService.show(JSON.stringify(res), {
          cssClass: 'alert-danger',
          timeout: 10000
        })
      }})
      .subscribe(files => console.log("files", files));
    setTimeout(() => {
      this.reloadLists.emit();
    }, 3000);
  }

  dispenseIfAbreiseHeute() {
      this.dateTodayGenerated = new Date(); //Today
      this.dispenseIfAbreise();
    }

  dispenseIfAbreiseMorgen() {
    console.log("dispenseIfAbreiseMorgen");
    this.dateTodayGenerated = new Date(new Date().getTime() + 24 * 60 * 60 * 1000); //Tomorrow
    this.dispenseIfAbreise();
    console.log(this.dateTodayGenerated);
  }

    dispenseIfAbreise() {
    let tables = this.tablesTempAbreise;
    let abreisenExport = [];
    let a = 0;
    console.log('=================================================dispenseIfAbreise');
    for (let a = 0; a < tables.length; a++) {
      for (let b = 0; b < tables[a].tables.length; b++) {
        if (tables[a].tables[b].groups) {
          let abreisenExportObject = {
            table: tables[a].tables[b],
            group: [],
            date: String(this.dateTodayGenerated).substring(0, 15)
          };
          for (let c = 0; c < tables[a].tables[b].groups.length; c++) {
            if (tables[a].tables[b].groups[c].abreiseValue) {
              this.parts[0] = tables[a].tables[b].groups[c].abreiseValue.match(/(\d+)/g);
            } else {
              this.parts[0] = "undefined";
            }
            if (this.parts[0]) {
              this.date[0] = new Date(2018, this.parts[0][1] - 1, this.parts[0][0]);
              this.parsedDate[0] = String(this.date[0]).substring(0, 15);
            }
            let dateToday = String(this.dateTodayGenerated).substring(0, 15);
            if (dateToday.indexOf(this.parsedDate[0]) !== -1 || tables[a].tables[b].groups[c].newTraceText) {
              abreisenExportObject.group.push(c);
            }
            if(c === (tables[a].tables[b].groups.length -1) && (typeof abreisenExportObject.group !== 'undefined' && abreisenExportObject.group.length > 0)) {
              console.log("abreisenExport.push(abreisenExportObject)");
              abreisenExport.push(abreisenExportObject);
            }
          }
        }
      }
    }
    console.log(abreisenExport);
    setTimeout(() => {
      this.abreisenExportExport.emit({abreisenExport, a});
    }, 100);
  }

  onLogoutClick() {
    this.authService.logout();
    //this._flashMessagesService.show('You are logged out', {
    //  cssClass: 'alert-success',
    //  timeout: 3000
    //});
    this.router.navigate(['/login']);
    return false;
  }

  mouseEnterprintToCart1Button() {
    //console.log("mouse enter : ");
    if (this.printToCart1Button === "ffffff") {
      //console.log('mouse enter1 :');
      this.printToCart1Button = "cfcfcf";
    }
  }

  mouseLeaveprintToCart1Button() {
    if (this.printToCart1Button === "cfcfcf") {
      //console.log('mouse leave1 :');
      this.printToCart1Button = "ffffff";
    }
  }

  mouseEnterprintToCart2Button() {
    //console.log("mouse enter : ");
    if (this.printToCart2Button === "ffffff") {
      //console.log('mouse enter1 :');
      this.printToCart2Button = "cfcfcf";
    }
  }

  mouseLeaveprintToCart2Button() {
    if (this.printToCart2Button === "cfcfcf") {
      //console.log('mouse leave1 :');
      this.printToCart2Button = "ffffff";
    }
  }

  mouseEnterprintToCart3Button() {
    //console.log("mouse enter : ");
    if (this.printToCart3Button === "ffffff") {
      //console.log('mouse enter1 :');
      this.printToCart3Button = "cfcfcf";
    }
  }

  mouseLeaveprintToCart3Button() {
    if (this.printToCart3Button === "cfcfcf") {
      //console.log('mouse leave1 :');
      this.printToCart3Button = "ffffff";
    }
  }

  mouseEnterAbreiseAusfuehrenButton() {
    //console.log("mouse enter : ");
    if (this.abreiseAusfuehrenButton === "ff0000") {
      //console.log('mouse enter1 :');
      this.abreiseAusfuehrenButton = "a00000";
    }
  }

  mouseLeaveAbreiseAusfuehrenButton() {
    if (this.abreiseAusfuehrenButton === "a00000") {
      //console.log('mouse leave1 :');
      this.abreiseAusfuehrenButton = "ff0000";
    }
  }

  mouseEnterAbreiseMorgenAusfuehrenButton() {
    //console.log("mouse enter : ");
    if (this.abreiseAusfuehrenMorgenButton === "ff0000") {
      //console.log('mouse enter1 :');
      this.abreiseAusfuehrenMorgenButton = "a00000";
    }
  }

  mouseLeaveAbreiseMorgenAusfuehrenButton() {
    if (this.abreiseAusfuehrenMorgenButton === "a00000") {
      //console.log('mouse leave1 :');
      this.abreiseAusfuehrenMorgenButton = "ff0000";
    }
  }

  mouseEnterAbreiseAbbrechenButton() {
    //console.log("mouse enter : ");
    if (this.abreiseAbbrechenButton === "ffffff") {
      //console.log('mouse enter1 :');
      this.abreiseAbbrechenButton = "cfcfcf";
    }
  }

  mouseLeaveAbreiseAbbrechenButton() {
    if (this.abreiseAbbrechenButton === "cfcfcf") {
      //console.log('mouse leave1 :');
      this.abreiseAbbrechenButton = "ffffff";
    }
  }
}
