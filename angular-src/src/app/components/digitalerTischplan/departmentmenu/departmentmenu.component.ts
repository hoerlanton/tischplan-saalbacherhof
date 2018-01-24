import { Component, OnInit, Input, ViewChild, AfterViewInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-departmentmenu',
  templateUrl: 'departmentmenu.component.html',
  styleUrls: ['../tischplan.component.css']
})
export class DepartmentmenuComponent implements OnInit {

  @Input('buttonBgColor1') buttonBgColor1: string;
  @Input('buttonBgColor2') buttonBgColor2: string;
  @Input('buttonBgColor3') buttonBgColor3: string;
  @Input('buttonBgColor4') buttonBgColor4: string;
  @Input('buttonBgColor5') buttonBgColor5: string;
  @Input('buttonBgColor6') buttonBgColor6: string;
  @Input('fontColor1') fontColor1: string;
  @Input('fontColor2') fontColor2: string;
  @Input('fontColor3') fontColor3: string;
  @Input('fontColor4') fontColor4: string;
  @Input('fontColor5') fontColor5: string;
  @Input('fontColor6') fontColor6: string;
  @Input('showBauernStubnBool') showBauernStubnBool: boolean;
  @Input('showBerglerBool') showBerglerBool: boolean;
  @Input('showEdelweissBool') showEdelweissBool: boolean;
  @Input('showWaeldlerBool') showWaeldlerBool: boolean;
  @Input('showTeeStubeBool') showTeeStubeBool: boolean;
  @Input('showAlleBool') showAlleBool: boolean;
  @Output() showBauernStubnBoolChange: EventEmitter<boolean> = new EventEmitter();
  @Output() showBerglerBoolChange: EventEmitter<boolean> = new EventEmitter();
  @Output() showEdelweissBoolChange: EventEmitter<boolean> = new EventEmitter();
  @Output() showWaeldlerBoolChange: EventEmitter<boolean> = new EventEmitter();
  @Output() showTeeStubeBoolChange: EventEmitter<boolean> = new EventEmitter();
  @Output() showAlleBoolChange: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  showBauernStubn() {

    console.log("showBauernStubn!");
    this.showBauernStubnBool = true;
    this.showBerglerBool = false;
    this.showWaeldlerBool = false;
    this.showEdelweissBool = false;
    this.showTeeStubeBool = false;
    this.showAlleBool = false;

    if (this.buttonBgColor1 === "0a7a74") {
      this.buttonBgColor1 = "f3efe4";
      this.buttonBgColor2 = "0a7a74";
      this.buttonBgColor3 = "0a7a74";
      this.buttonBgColor4 = "0a7a74";
      this.buttonBgColor5 = "0a7a74";
      this.buttonBgColor6 = "0a7a74";
    } else {
      this.buttonBgColor1 = "0a7a74";
    }
    if (this.fontColor1 === "f3efe4") {
      this.fontColor1 = "0a7a74";
      this.fontColor2 = "f3efe4";
      this.fontColor3 = "f3efe4";
      this.fontColor4 = "f3efe4";
      this.fontColor5 = "f3efe4";
      this.fontColor6 = "f3efe4";
    } else {
      this.fontColor1 = "f3efe4";
    }

    this.showBauernStubnBoolChange.emit(this.showBauernStubnBool);
    this.showBerglerBoolChange.emit(this.showBerglerBool);
    this.showEdelweissBoolChange.emit(this.showEdelweissBool);
    this.showWaeldlerBoolChange.emit(this.showWaeldlerBool);
    this.showTeeStubeBoolChange.emit(this.showTeeStubeBool);
    this.showAlleBoolChange.emit(this.showAlleBool);
  }

  showBergler() {
    console.log("showBergler!");
    this.showBauernStubnBool = false;
    this.showBerglerBool = true;
    console.log(this.showBerglerBool);
    this.showWaeldlerBool = false;
    this.showEdelweissBool = false;
    this.showTeeStubeBool = false;
    this.showAlleBool = false;

    if (this.buttonBgColor2 === "0a7a74") {
      this.buttonBgColor2 = "f3efe4";
      this.buttonBgColor1 = "0a7a74";
      this.buttonBgColor3 = "0a7a74";
      this.buttonBgColor4 = "0a7a74";
      this.buttonBgColor5 = "0a7a74";
      this.buttonBgColor6= "0a7a74";
    } else {
      this.buttonBgColor2 = "0a7a74";
    }
    if (this.fontColor2 === "f3efe4") {
      this.fontColor2 = "0a7a74";
      this.fontColor1 = "f3efe4";
      this.fontColor3 = "f3efe4";
      this.fontColor4 = "f3efe4";
      this.fontColor5 = "f3efe4";
      this.fontColor6 = "f3efe4";
    } else {
      this.fontColor2 = "f3efe4";
    }
    this.showBauernStubnBoolChange.emit(this.showBauernStubnBool);
    this.showBerglerBoolChange.emit(this.showBerglerBool);
    this.showEdelweissBoolChange.emit(this.showEdelweissBool);
    this.showWaeldlerBoolChange.emit(this.showWaeldlerBool);
    this.showTeeStubeBoolChange.emit(this.showTeeStubeBool);
    this.showAlleBoolChange.emit(this.showAlleBool);
  }

  showWaeldler() {
    console.log("showWaeldler!");
    this.showBauernStubnBool = false;
    this.showBerglerBool = false;
    this.showWaeldlerBool = true;
    this.showEdelweissBool = false;
    this.showTeeStubeBool = false;
    this.showAlleBool = false;

    if (this.buttonBgColor3 === "0a7a74") {
      this.buttonBgColor3 = "f3efe4";
      this.buttonBgColor1 = "0a7a74";
      this.buttonBgColor2 = "0a7a74";
      this.buttonBgColor4 = "0a7a74";
      this.buttonBgColor5 = "0a7a74";
      this.buttonBgColor6 = "0a7a74";
    } else {
      this.buttonBgColor3 = "0a7a74";
    }
    if (this.fontColor3 === "f3efe4") {
      this.fontColor3 = "0a7a74";
      this.fontColor1 = "f3efe4";
      this.fontColor2 = "f3efe4";
      this.fontColor4 = "f3efe4";
      this.fontColor5 = "f3efe4";
      this.fontColor6 = "f3efe4";
    } else {
      this.fontColor3 = "f3efe4";
    }
    this.showBauernStubnBoolChange.emit(this.showBauernStubnBool);
    this.showBerglerBoolChange.emit(this.showBerglerBool);
    this.showEdelweissBoolChange.emit(this.showEdelweissBool);
    this.showWaeldlerBoolChange.emit(this.showWaeldlerBool);
    this.showTeeStubeBoolChange.emit(this.showTeeStubeBool);
    this.showAlleBoolChange.emit(this.showAlleBool);
  }

  showEdelweiss() {
    console.log("showEdelweiss!");
    this.showBauernStubnBool = false;
    this.showBerglerBool = false;
    this.showWaeldlerBool = false;
    this.showEdelweissBool = true;
    this.showTeeStubeBool = false;
    this.showAlleBool = false;

    if (this.buttonBgColor4 === "0a7a74") {
      this.buttonBgColor4 = "f3efe4";
      this.buttonBgColor1 = "0a7a74";
      this.buttonBgColor2 = "0a7a74";
      this.buttonBgColor3 = "0a7a74";
      this.buttonBgColor5 = "0a7a74";
      this.buttonBgColor6 = "0a7a74";
    } else {
      this.buttonBgColor4 = "0a7a74";
    }
    if (this.fontColor4 === "f3efe4") {
      this.fontColor4 = "0a7a74";
      this.fontColor1 = "f3efe4";
      this.fontColor2 = "f3efe4";
      this.fontColor3 = "f3efe4";
      this.fontColor5 = "f3efe4";
      this.fontColor6 = "f3efe4";
    } else {
      this.fontColor4 = "f3efe4";
    }
    this.showBauernStubnBoolChange.emit(this.showBauernStubnBool);
    this.showBerglerBoolChange.emit(this.showBerglerBool);
    this.showEdelweissBoolChange.emit(this.showEdelweissBool);
    this.showWaeldlerBoolChange.emit(this.showWaeldlerBool);
    this.showTeeStubeBoolChange.emit(this.showTeeStubeBool);
    this.showAlleBoolChange.emit(this.showAlleBool);
  }

  showTeestube() {
    console.log("showTeeStube!");
    this.showBauernStubnBool = false;
    this.showBerglerBool = false;
    this.showWaeldlerBool = false;
    this.showEdelweissBool = false;
    this.showTeeStubeBool = true;
    this.showAlleBool = false;

    if (this.buttonBgColor5 === "0a7a74") {
      this.buttonBgColor5 = "f3efe4";
      this.buttonBgColor1 = "0a7a74";
      this.buttonBgColor2 = "0a7a74";
      this.buttonBgColor3 = "0a7a74";
      this.buttonBgColor4 = "0a7a74";
      this.buttonBgColor6 = "0a7a74";
    } else {
      this.buttonBgColor5 = "0a7a74";
    }
    if (this.fontColor5 === "f3efe4") {
      this.fontColor5 = "0a7a74";
      this.fontColor4 = "f3efe4";
      this.fontColor1 = "f3efe4";
      this.fontColor2 = "f3efe4";
      this.fontColor3 = "f3efe4";
      this.fontColor6 = "f3efe4"
    } else {
      this.fontColor5 = "f3efe4";
    }
    this.showBauernStubnBoolChange.emit(this.showBauernStubnBool);
    this.showBerglerBoolChange.emit(this.showBerglerBool);
    this.showEdelweissBoolChange.emit(this.showEdelweissBool);
    this.showWaeldlerBoolChange.emit(this.showWaeldlerBool);
    this.showTeeStubeBoolChange.emit(this.showTeeStubeBool);
    this.showAlleBoolChange.emit(this.showAlleBool);
  }

  showAlle() {
    console.log("showAlle!");
    this.showBauernStubnBool = false;
    this.showBerglerBool = false;
    this.showWaeldlerBool = false;
    this.showEdelweissBool = false;
    this.showTeeStubeBool = false;
    this.showAlleBool = true;

    if (this.buttonBgColor6 === "0a7a74") {
      this.buttonBgColor6 = "f3efe4";
      this.buttonBgColor1 = "0a7a74";
      this.buttonBgColor2 = "0a7a74";
      this.buttonBgColor3 = "0a7a74";
      this.buttonBgColor4 = "0a7a74";
      this.buttonBgColor5 = "0a7a74";
    } else {
      this.buttonBgColor6 = "0a7a74";
    }
    if (this.fontColor6 === "f3efe4") {
      this.fontColor6 = "0a7a74";
      this.fontColor4 = "f3efe4";
      this.fontColor1 = "f3efe4";
      this.fontColor2 = "f3efe4";
      this.fontColor3 = "f3efe4";
      this.fontColor5 = "f3efe4";
    } else {
      this.fontColor6 = "f3efe4";
    }
    this.showBauernStubnBoolChange.emit(this.showBauernStubnBool);
    this.showBerglerBoolChange.emit(this.showBerglerBool);
    this.showEdelweissBoolChange.emit(this.showEdelweissBool);
    this.showWaeldlerBoolChange.emit(this.showWaeldlerBool);
    this.showTeeStubeBoolChange.emit(this.showTeeStubeBool);
    this.showAlleBoolChange.emit(this.showAlleBool);
  }


}
