import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TischplanService } from '../../../services/tischplan.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Table } from '../../../../../Table';

@Component({
  selector: 'app-form',
  templateUrl: 'form.component.html',
  styleUrls: ['../tischplan.component.css']
})
export class FormComponent implements OnInit {

  @Input('newInformationElements') newInformationElements: any[] = [];
  @Input('dateGenerated') dateGenerated: any;
  @Input('title') title: string;
  @Input('roomNumber') roomNumber: string;
  @Input('tableNumber') tableNumber: string;
  @Input('nameTraceInput') nameTraceInput: string;
  @Input('employee') employee: string;
  @Input('tablesBauernstube') tablesBauernstube: Table[];
  @Input('tablesBerglerStubeHubertusStube') tablesBerglerStubeHubertusStube: Table[];
  @Input('tablesEdelweissKaminStube') tablesEdelweissKaminStube: Table[];
  @Input('tablesTeestubeTeelounge') tablesTeestubeTeelounge: Table[];
  @Input('tablesWaeldlerStubeKristallStube') tablesWaeldlerStubeKristallStube: Table[];
  @Input('showInfoFormBool') showInfoFormBool: boolean;
  @Input('showNotizFormBool') showNotizFormBool: boolean;
  @Input('notizElements') notizElements: any;
  @Input('showBauernStubnBool') showBauernStubnBool: boolean;
  @Input('showBerglerBool') showBerglerBool: boolean;
  @Input('showEdelweissBool') showEdelweissBool: boolean;
  @Input('showWaeldlerBool') showWaeldlerBool: boolean;
  @Input('showTeeStubeBool') showTeeStubeBool: boolean;
  @Input('showAlleBool') showAlleBool: boolean;
  @Output()
  notizResponse:EventEmitter<any> = new EventEmitter();
  @Output()
  changeColorIfAnreiseExport:EventEmitter<any> = new EventEmitter();

  notizInput: string;
  departmentNotizInput: string;
  departments: any[] = [];
  notizDate: any;

  constructor(private tischplanService: TischplanService, private _flashMessagesService: FlashMessagesService) {
    this.departments = ["Bauernstube", "BerglerStubeHubertusStube", "EdelweissKaminStube", "WaeldlerStubeKristallStube", "TeestubeTeelounge" ];
  }

  ngOnInit() {
  }
  sendInformation(event) {
    event.preventDefault();
    this.dateGenerated = new Date();
    let newInformation = {
      text: this.title,
      roomNumber: this.roomNumber,
      tableNumber: this.tableNumber,
      date: this.dateGenerated,
      name: this.nameTraceInput,
      employee: this.employee
    };
    if (newInformation.text === undefined) {
      this._flashMessagesService.show('Die Nachricht ist leer ... ',
        {cssClass: 'alert-danger', timeout: 20000});
      return;
    } else {
      this._flashMessagesService.show('Erfolgreich Information gespeichert ... ',
        {cssClass: 'alert-success', timeout: 20000});

      console.log(newInformation.tableNumber);

      if (newInformation.tableNumber) {
        this.tischplanService.sendInformation(newInformation)
          .subscribe(Information => {
            //console.log('Information: ' + JSON.stringify(Information.tables[0].tableNumber));
            console.log('Information: ' + JSON.stringify(Information));
            console.log(Information.tables[0]);
            console.log("------");
            //console.log(Information[0].tables);
            if (Information === null) {
              return;
            } else {
              if (Information.tables[0].department === "Bauernstube") {
                for (let i = 0; i < this.tablesBauernstube.length; i++) {
                  if (this.tablesBauernstube[i].number === Information.tables[0].number) {
                    this.tablesBauernstube[i] = Information.tables[0];
                  }
                }
              } else if (Information.tables[0].department === "waeldlerStubeKristallStube") {
                for (let i = 0; i < this.tablesWaeldlerStubeKristallStube.length; i++) {
                  if (this.tablesWaeldlerStubeKristallStube[i].number === Information.tables[0].number) {
                    this.tablesWaeldlerStubeKristallStube[i] = Information.tables[0];
                  }
                }
              } else if (Information.tables[0].department === "berglerStubeHubertusStube") {
                for (let i = 0; i < this.tablesBerglerStubeHubertusStube.length; i++) {
                  if (this.tablesBerglerStubeHubertusStube[i].number === Information.tables[0].number) {
                    this.tablesBerglerStubeHubertusStube[i] = Information.tables[0];
                  }
                }
              } else if (Information.tables[0].department === "edelweissKaminStube") {
                for (let i = 0; i < this.tablesEdelweissKaminStube.length; i++) {
                  if (this.tablesEdelweissKaminStube[i].number === Information.tables[0].number) {
                    this.tablesEdelweissKaminStube[i] = Information.tables[0];
                  }
                }
              } else if (Information.tables[0].department === "teestubeTeelounge") {
                for (let i = 0; i < this.tablesTeestubeTeelounge.length; i++) {
                  if (this.tablesTeestubeTeelounge[i].number === Information.tables[0].number) {
                    this.tablesTeestubeTeelounge[i] = Information.tables[0];
                  }
                }
              }
            }
          });
        this.changeColorIfAnreiseExport.emit();
      }
      this.tischplanService.sendInformationToBox(newInformation)
        .subscribe(Information => {
          //console.log('Information: ' + JSON.stringify(Information.tables[0].tableNumber));
          console.log('Information: ' + JSON.stringify(Information));
          //console.log(Information.tables[0]);
          //console.log("------");
          //console.log(Information[0].tables);
          this.newInformationElements.push(Information);
          console.log('this.newInformationElements' + this.newInformationElements);
        });
    }
  }
  sendNotiz(event) {
    event.preventDefault();

    this.notizDate = String(new Date()).substring(0, 15);

    let newNotiz = {
      notizInput: this.notizInput,
      departmentNotizInput: this.departmentNotizInput,
      date: this.notizDate
    };
    if (newNotiz.notizInput === undefined) {
      this._flashMessagesService.show('Die Nachricht ist leer ... ',
        {cssClass: 'alert-danger', timeout: 20000});
      return;
    } else {
      this._flashMessagesService.show('Erfolgreich Information gespeichert ... ',
        {cssClass: 'alert-success', timeout: 20000});
    }
    this.tischplanService.sendInformationToNotizBlock(newNotiz)
      .subscribe(Notiz => {
        //console.log('Information: ' + JSON.stringify(Information.tables[0].tableNumber));
        console.log('Information: ' + JSON.stringify(Notiz));
        //console.log(Information.tables[0]);
        //console.log("------");
        //console.log(Information[0].tables);
        this.notizResponse.emit(Notiz);
        this.notizElements = Notiz;
        console.log('this.newInformationElements' + this.newInformationElements);
      });

  }
}
