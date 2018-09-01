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
  @Input('tablesErde') tablesErde: Table[];
  @Input('tablesLuft') tablesLuft: Table[];
  @Input('tablesFeuer') tablesFeuer: Table[];
  @Input('tablesMetall') tablesMetall: Table[];
  @Input('tablesWasser') tablesWasser: Table[];
  @Input('showInfoFormBool') showInfoFormBool: boolean;
  @Input('showNotizFormBool') showNotizFormBool: boolean;
  @Input('notizElements') notizElements: any;
  @Input('showErdeBool') showErdeBool: boolean;
  @Input('showLuftBool') showLuftBool: boolean;
  @Input('showFeuerBool') showFeuerBool: boolean;
  @Input('showWasserBool') showWasserBool: boolean;
  @Input('showMetallBool') showMetallBool: boolean;
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
    this.departments = ["Erde", "Luft", "Feuer", "Wasser", "Metall" ];
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
              if (Information.tables[0].department === "Erde") {
                for (let i = 0; i < this.tablesErde.length; i++) {
                  if (this.tablesErde[i].number === Information.tables[0].number) {
                    this.tablesErde[i] = Information.tables[0];
                  }
                }
              } else if (Information.tables[0].department === "Wasser") {
                for (let i = 0; i < this.tablesWasser.length; i++) {
                  if (this.tablesWasser[i].number === Information.tables[0].number) {
                    this.tablesWasser[i] = Information.tables[0];
                  }
                }
              } else if (Information.tables[0].department === "Luft") {
                for (let i = 0; i < this.tablesLuft.length; i++) {
                  if (this.tablesLuft[i].number === Information.tables[0].number) {
                    this.tablesLuft[i] = Information.tables[0];
                  }
                }
              } else if (Information.tables[0].department === "Feuer") {
                for (let i = 0; i < this.tablesFeuer.length; i++) {
                  if (this.tablesFeuer[i].number === Information.tables[0].number) {
                    this.tablesFeuer[i] = Information.tables[0];
                  }
                }
              } else if (Information.tables[0].department === "Metall") {
                for (let i = 0; i < this.tablesMetall.length; i++) {
                  if (this.tablesMetall[i].number === Information.tables[0].number) {
                    this.tablesMetall[i] = Information.tables[0];
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
