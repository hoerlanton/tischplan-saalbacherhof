import { Component, OnInit, Input, ViewChild, AfterViewInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-departmentmenu',
  templateUrl: 'departmentmenu.component.html',
  styleUrls: ['departmentmenu.component.css']
})
export class DepartmentmenuComponent implements OnInit {

  @Input('buttonBgColor1') buttonBgColor1: string;
  @Input('buttonBgColor2') buttonBgColor2: string;
  @Input('buttonBgColor3') buttonBgColor3: string;
  @Input('buttonBgColor4') buttonBgColor4: string;
  @Input('buttonBgColor5') buttonBgColor5: string;
  @Input('buttonBgColor6') buttonBgColor6: string;
  @Input('buttonBgColor7') buttonBgColor7: string;
  @Input('buttonBgColor8') buttonBgColor8: string;
  @Input('fontColor1') fontColor1: string;
  @Input('fontColor2') fontColor2: string;
  @Input('fontColor3') fontColor3: string;
  @Input('fontColor4') fontColor4: string;
  @Input('fontColor5') fontColor5: string;
  @Input('fontColor6') fontColor6: string;
  @Input('fontColor7') fontColor7: string;
  @Input('fontColor8') fontColor8: string;
  @Input('showBauernStubnBool') showBauernStubnBool: boolean;
  @Input('showBerglerBool') showBerglerBool: boolean;
  @Input('showEdelweissBool') showEdelweissBool: boolean;
  @Input('showWaeldlerBool') showWaeldlerBool: boolean;
  @Input('showTeeStubeBool') showTeeStubeBool: boolean;
  @Input('showTerasseBool') showTerasseBool: boolean;
  @Input('showTerrasseEdelweissBool') showTerrasseEdelweissBool: boolean;
  @Input('showAlleBool') showAlleBool: boolean;
  @Output() showBauernStubnBoolChange: EventEmitter<boolean> = new EventEmitter();
  @Output() showBerglerBoolChange: EventEmitter<boolean> = new EventEmitter();
  @Output() showEdelweissBoolChange: EventEmitter<boolean> = new EventEmitter();
  @Output() showWaeldlerBoolChange: EventEmitter<boolean> = new EventEmitter();
  @Output() showTeeStubeBoolChange: EventEmitter<boolean> = new EventEmitter();
  @Output() showTerasseBoolChange: EventEmitter<boolean> = new EventEmitter();
  @Output() showTerrasseEdelweissBoolChange: EventEmitter<boolean> = new EventEmitter();
  @Output() showAlleBoolChange: EventEmitter<boolean> = new EventEmitter();
  @Input('buttonBgColorInfoForm') buttonBgColorInfoForm: string;
  @Input('fontColorInfoForm') fontColorInfoForm: string;
  @Input('fontColorNotizForm') fontColorNotizForm: string;
  @Input('buttonBgColorNotizForm') buttonBgColorNotizForm: string;
  @Input('buttonBgColorShowTablePlan') buttonBgColorShowTablePlan: string;
  @Input('fontColorShowTablePlan') fontColorShowTablePlan: string;
  @Input('showNotizFormBool') showNotizFormBool: boolean;
  @Input('showInfoFormBool') showInfoFormBool: boolean;
  @Input('showTablePlanBool') showTablePlanBool: boolean;
  @Output() showNotizFormBoolChange: EventEmitter<boolean> = new EventEmitter();
  @Output() showInfoFormBoolChange: EventEmitter<boolean> = new EventEmitter();
  @Output() showTablePlanBoolChange: EventEmitter<boolean> = new EventEmitter();
  showAbteilungen: boolean;
  buttonBgColorDropdownToggle: string;
  constructor() {
    this.showAbteilungen = true;
    this.buttonBgColorShowTablePlan = "0a7a74";
    this.buttonBgColorInfoForm = "0a7a74";
    this.buttonBgColorNotizForm = "0a7a74";
    this.buttonBgColorDropdownToggle = "0a7a74";
  }

  ngOnInit() {
  }


  showBauernStubn() {

    //console.log("showBauernStubn!");
    this.showBauernStubnBool = true;
    this.showBerglerBool = false;
    this.showWaeldlerBool = false;
    this.showEdelweissBool = false;
    this.showTeeStubeBool = false;
    this.showTerasseBool = false;
    this.showTerrasseEdelweissBool = false;
    this.showAlleBool = false;
    this.showAbteilungen = false;

    if (this.buttonBgColor1 === "154846") {
      this.buttonBgColor1 = "0d2f2e";
      this.buttonBgColor2 = "0a7a74";
      this.buttonBgColor3 = "0a7a74";
      this.buttonBgColor4 = "0a7a74";
      this.buttonBgColor5 = "0a7a74";
      this.buttonBgColor6 = "0a7a74";
      this.buttonBgColor7 = "0a7a74";
      this.buttonBgColor8 = "0a7a74";
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
      this.fontColor7 = "f3efe4";
      this.fontColor8 = "f3efe4";
    } else {
      this.fontColor1 = "f3efe4";
    }

    this.showBauernStubnBoolChange.emit(this.showBauernStubnBool);
    this.showBerglerBoolChange.emit(this.showBerglerBool);
    this.showEdelweissBoolChange.emit(this.showEdelweissBool);
    this.showWaeldlerBoolChange.emit(this.showWaeldlerBool);
    this.showTeeStubeBoolChange.emit(this.showTeeStubeBool);
    this.showTerasseBoolChange.emit(this.showTerasseBool);
    this.showTerrasseEdelweissBoolChange.emit(this.showTerrasseEdelweissBool);
    this.showAlleBoolChange.emit(this.showAlleBool);
  }

  showBergler() {
    //console.log("showBergler!");
    this.showAbteilungen = false;
    this.showBauernStubnBool = false;
    this.showBerglerBool = true;
    //console.log(this.showBerglerBool);
    this.showWaeldlerBool = false;
    this.showEdelweissBool = false;
    this.showTeeStubeBool = false;
    this.showTerasseBool = false;
    this.showTerrasseEdelweissBool = false;
    this.showAlleBool = false;

    if (this.buttonBgColor2 === "154846") {
      this.buttonBgColor2 = "0d2f2e";
      this.buttonBgColor1 = "0a7a74";
      this.buttonBgColor3 = "0a7a74";
      this.buttonBgColor4 = "0a7a74";
      this.buttonBgColor5 = "0a7a74";
      this.buttonBgColor6= "0a7a74";
      this.buttonBgColor7 = "0a7a74";
      this.buttonBgColor8 = "0a7a74";

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
      this.fontColor7 = "f3efe4";
      this.fontColor8 = "f3efe4";

    } else {
      this.fontColor2 = "f3efe4";
    }
    this.showBauernStubnBoolChange.emit(this.showBauernStubnBool);
    this.showBerglerBoolChange.emit(this.showBerglerBool);
    this.showEdelweissBoolChange.emit(this.showEdelweissBool);
    this.showWaeldlerBoolChange.emit(this.showWaeldlerBool);
    this.showTeeStubeBoolChange.emit(this.showTeeStubeBool);
    this.showTerasseBoolChange.emit(this.showTerasseBool);
    this.showTerrasseEdelweissBoolChange.emit(this.showTerrasseEdelweissBool);
    this.showAlleBoolChange.emit(this.showAlleBool);
  }

  showWaeldler() {
    //console.log("showWaeldler!");
    this.showBauernStubnBool = false;
    this.showBerglerBool = false;
    this.showWaeldlerBool = true;
    this.showEdelweissBool = false;
    this.showTeeStubeBool = false;
    this.showTerasseBool = false;
    this.showTerrasseEdelweissBool = false;
    this.showAlleBool = false;
    this.showAbteilungen = false;

    if (this.buttonBgColor3 === "154846") {
      this.buttonBgColor3 = "0d2f2e";
      this.buttonBgColor1 = "0a7a74";
      this.buttonBgColor2 = "0a7a74";
      this.buttonBgColor4 = "0a7a74";
      this.buttonBgColor5 = "0a7a74";
      this.buttonBgColor6 = "0a7a74";
      this.buttonBgColor7 = "0a7a74";
      this.buttonBgColor8 = "0a7a74";

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
      this.fontColor7 = "f3efe4";
      this.fontColor8 = "f3efe4";

    } else {
      this.fontColor3 = "f3efe4";
    }
    this.showBauernStubnBoolChange.emit(this.showBauernStubnBool);
    this.showBerglerBoolChange.emit(this.showBerglerBool);
    this.showEdelweissBoolChange.emit(this.showEdelweissBool);
    this.showWaeldlerBoolChange.emit(this.showWaeldlerBool);
    this.showTeeStubeBoolChange.emit(this.showTeeStubeBool);
    this.showTerasseBoolChange.emit(this.showTerasseBool);
    this.showTerrasseEdelweissBoolChange.emit(this.showTerrasseEdelweissBool);
    this.showAlleBoolChange.emit(this.showAlleBool);
  }

  showEdelweiss() {
    //console.log("showEdelweiss!");
    this.showBauernStubnBool = false;
    this.showBerglerBool = false;
    this.showWaeldlerBool = false;
    this.showEdelweissBool = true;
    this.showTeeStubeBool = false;
    this.showTerasseBool = false;
    this.showTerrasseEdelweissBool = false;
    this.showAlleBool = false;
    this.showAbteilungen = false;

    if (this.buttonBgColor4 === "154846") {
      this.buttonBgColor4 = "0d2f2e";
      this.buttonBgColor1 = "0a7a74";
      this.buttonBgColor2 = "0a7a74";
      this.buttonBgColor3 = "0a7a74";
      this.buttonBgColor5 = "0a7a74";
      this.buttonBgColor6 = "0a7a74";
      this.buttonBgColor7 = "0a7a74";
      this.buttonBgColor8 = "0a7a74";

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
      this.fontColor7 = "f3efe4";
      this.fontColor8 = "f3efe4";
    } else {
      this.fontColor4 = "f3efe4";
    }
    this.showBauernStubnBoolChange.emit(this.showBauernStubnBool);
    this.showBerglerBoolChange.emit(this.showBerglerBool);
    this.showEdelweissBoolChange.emit(this.showEdelweissBool);
    this.showWaeldlerBoolChange.emit(this.showWaeldlerBool);
    this.showTeeStubeBoolChange.emit(this.showTeeStubeBool);
    this.showTerasseBoolChange.emit(this.showTerasseBool);
    this.showTerrasseEdelweissBoolChange.emit(this.showTerrasseEdelweissBool);
    this.showAlleBoolChange.emit(this.showAlleBool);
  }

  showTeestube() {
    //console.log("showTeeStube!");
    this.showBauernStubnBool = false;
    this.showBerglerBool = false;
    this.showWaeldlerBool = false;
    this.showEdelweissBool = false;
    this.showTeeStubeBool = true;
    this.showTerasseBool = false;
    this.showTerrasseEdelweissBool = false;
    this.showAlleBool = false;
    this.showAbteilungen = false;

    if (this.buttonBgColor5 === "154846") {
      this.buttonBgColor5 = "0d2f2e";
      this.buttonBgColor1 = "0a7a74";
      this.buttonBgColor2 = "0a7a74";
      this.buttonBgColor3 = "0a7a74";
      this.buttonBgColor4 = "0a7a74";
      this.buttonBgColor6 = "0a7a74";
      this.buttonBgColor7 = "0a7a74";
      this.buttonBgColor8 = "0a7a74";

    } else {
      this.buttonBgColor5 = "0a7a74";
    }
    if (this.fontColor5 === "f3efe4") {
      this.fontColor5 = "0a7a74";
      this.fontColor4 = "f3efe4";
      this.fontColor1 = "f3efe4";
      this.fontColor2 = "f3efe4";
      this.fontColor3 = "f3efe4";
      this.fontColor6 = "f3efe4";
      this.fontColor7 = "f3efe4";
      this.fontColor8 = "f3efe4";

    } else {
      this.fontColor5 = "f3efe4";
    }
    this.showBauernStubnBoolChange.emit(this.showBauernStubnBool);
    this.showBerglerBoolChange.emit(this.showBerglerBool);
    this.showEdelweissBoolChange.emit(this.showEdelweissBool);
    this.showWaeldlerBoolChange.emit(this.showWaeldlerBool);
    this.showTeeStubeBoolChange.emit(this.showTeeStubeBool);
    this.showTerasseBoolChange.emit(this.showTerasseBool);
    this.showTerrasseEdelweissBoolChange.emit(this.showTerrasseEdelweissBool);
    this.showAlleBoolChange.emit(this.showAlleBool);
  }

  showTerasse() {
    //console.log("showAlle!");
    this.showBauernStubnBool = false;
    this.showBerglerBool = false;
    this.showWaeldlerBool = false;
    this.showEdelweissBool = false;
    this.showTeeStubeBool = false;
    this.showTerasseBool = true;
    this.showTerrasseEdelweissBool = false;
    this.showAlleBool = false;
    this.showAbteilungen = false;

    if (this.buttonBgColor6 === "154846") {
      this.buttonBgColor6 = "0d2f2e";
      this.buttonBgColor1 = "0a7a74";
      this.buttonBgColor2 = "0a7a74";
      this.buttonBgColor3 = "0a7a74";
      this.buttonBgColor4 = "0a7a74";
      this.buttonBgColor5 = "0a7a74";
      this.buttonBgColor7 = "0a7a74";
      this.buttonBgColor8 = "0a7a74";

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
      this.fontColor7 = "f3efe4";
      this.fontColor8 = "f3efe4";

    } else {
      this.fontColor6 = "f3efe4";
    }
    this.showBauernStubnBoolChange.emit(this.showBauernStubnBool);
    this.showBerglerBoolChange.emit(this.showBerglerBool);
    this.showEdelweissBoolChange.emit(this.showEdelweissBool);
    this.showWaeldlerBoolChange.emit(this.showWaeldlerBool);
    this.showTeeStubeBoolChange.emit(this.showTeeStubeBool);
    this.showTerasseBoolChange.emit(this.showTerasseBool);
    this.showTerrasseEdelweissBoolChange.emit(this.showTerrasseEdelweissBool);
    this.showAlleBoolChange.emit(this.showAlleBool);
  }

  showTerrasseEdelweiss() {
    //console.log("showAlle!");
    this.showBauernStubnBool = false;
    this.showBerglerBool = false;
    this.showWaeldlerBool = false;
    this.showEdelweissBool = false;
    this.showTeeStubeBool = false;
    this.showTerasseBool = false;
    this.showTerrasseEdelweissBool = true;
    this.showAlleBool = false;
    this.showAbteilungen = false;

    if (this.buttonBgColor7 === "154846") {
      this.buttonBgColor7 = "0d2f2e";
      this.buttonBgColor1 = "0a7a74";
      this.buttonBgColor2 = "0a7a74";
      this.buttonBgColor3 = "0a7a74";
      this.buttonBgColor4 = "0a7a74";
      this.buttonBgColor5 = "0a7a74";
      this.buttonBgColor6 = "0a7a74";
      this.buttonBgColor8 = "0a7a74";

    } else {
      this.buttonBgColor7 = "0a7a74";
    }
    if (this.fontColor7 === "f3efe4") {
      this.fontColor7 = "0a7a74";
      this.fontColor4 = "f3efe4";
      this.fontColor1 = "f3efe4";
      this.fontColor2 = "f3efe4";
      this.fontColor3 = "f3efe4";
      this.fontColor5 = "f3efe4";
      this.fontColor6 = "f3efe4";
      this.fontColor8 = "f3efe4";

    } else {
      this.fontColor7 = "f3efe4";
    }
    this.showBauernStubnBoolChange.emit(this.showBauernStubnBool);
    this.showBerglerBoolChange.emit(this.showBerglerBool);
    this.showEdelweissBoolChange.emit(this.showEdelweissBool);
    this.showWaeldlerBoolChange.emit(this.showWaeldlerBool);
    this.showTeeStubeBoolChange.emit(this.showTeeStubeBool);
    this.showTerasseBoolChange.emit(this.showTerasseBool);
    this.showTerrasseEdelweissBoolChange.emit(this.showTerrasseEdelweissBool);
    this.showAlleBoolChange.emit(this.showAlleBool);
  }

  showAlle() {
    //console.log("showAlle!");
    this.showBauernStubnBool = false;
    this.showBerglerBool = false;
    this.showWaeldlerBool = false;
    this.showEdelweissBool = false;
    this.showTeeStubeBool = false;
    this.showTerasseBool = false;
    this.showTerrasseEdelweissBool = false;
    this.showAlleBool = true;
    this.showAbteilungen = false;

    if (this.buttonBgColor8 === "154846") {
      this.buttonBgColor8 = "0d2f2e";
      this.buttonBgColor1 = "0a7a74";
      this.buttonBgColor2 = "0a7a74";
      this.buttonBgColor3 = "0a7a74";
      this.buttonBgColor4 = "0a7a74";
      this.buttonBgColor5 = "0a7a74";
      this.buttonBgColor6 = "0a7a74";
      this.buttonBgColor7 = "0a7a74";

    } else {
      this.buttonBgColor8 = "0a7a74";
    }
    if (this.fontColor8 === "f3efe4") {
      this.fontColor8 = "0a7a74";
      this.fontColor4 = "f3efe4";
      this.fontColor1 = "f3efe4";
      this.fontColor2 = "f3efe4";
      this.fontColor3 = "f3efe4";
      this.fontColor5 = "f3efe4";
      this.fontColor6 = "f3efe4";
      this.fontColor7 = "f3efe4";

    } else {
      this.fontColor8 = "f3efe4";
    }
    this.showBauernStubnBoolChange.emit(this.showBauernStubnBool);
    this.showBerglerBoolChange.emit(this.showBerglerBool);
    this.showEdelweissBoolChange.emit(this.showEdelweissBool);
    this.showWaeldlerBoolChange.emit(this.showWaeldlerBool);
    this.showTeeStubeBoolChange.emit(this.showTeeStubeBool);
    this.showTerasseBoolChange.emit(this.showTerasseBool);
    this.showTerrasseEdelweissBoolChange.emit(this.showTerrasseEdelweissBool);
    this.showAlleBoolChange.emit(this.showAlleBool);
  }

  showInfoForm() {
    //console.log("showTraceForm!");

    this.showNotizFormBool = false;
    this.showInfoFormBool = true;
    this.showTablePlanBool = false;

    if (this.buttonBgColorInfoForm === "154846") {
      this.buttonBgColorInfoForm = "0d2f2e";
      this.buttonBgColorNotizForm = "0a7a74";
      this.buttonBgColorShowTablePlan = "0a7a74";
    } else {
      this.buttonBgColorInfoForm = "0a7a74";
    }
    if (this.fontColorInfoForm === "f3efe4") {
      this.fontColorInfoForm = "0a7a74";
      this.fontColorNotizForm = "f3efe4";
      this.fontColorShowTablePlan = "f3efe4";
    } else {
      this.fontColorInfoForm = "f3efe4";
    }
    this.showNotizFormBoolChange.emit(this.showNotizFormBool);
    this.showInfoFormBoolChange.emit(this.showInfoFormBool);
    this.showTablePlanBoolChange.emit(this.showTablePlanBool);
  }

  showNotizForm() {
    //console.log("showNotizForm!");
    this.showNotizFormBool = true;
    this.showTablePlanBool = false;
    this.showInfoFormBool = false;

    if (this.buttonBgColorNotizForm === "154846") {
      this.buttonBgColorNotizForm = "0d2f2e";
      this.buttonBgColorInfoForm = "0a7a74";
      this.buttonBgColorShowTablePlan = "0a7a74";
    } else {
      this.buttonBgColorNotizForm = "0a7a74";
    }
    if (this.fontColorNotizForm === "f3efe4") {
      this.fontColorNotizForm = "0a7a74";
      this.fontColorInfoForm = "f3efe4";
      this.fontColorShowTablePlan = "f3efe4";
    } else {
      this.fontColorNotizForm = "f3efe4";
    }
    this.showNotizFormBoolChange.emit(this.showNotizFormBool);
    this.showInfoFormBoolChange.emit(this.showInfoFormBool);
    this.showTablePlanBoolChange.emit(this.showTablePlanBool);
  }
  showTablePlan(){
    //console.log("showTablePlan!");
    this.showNotizFormBool = false;
    this.showTablePlanBool = true;
    this.showInfoFormBool = false;

    if (this.buttonBgColorShowTablePlan = "154846") {
      this.buttonBgColorShowTablePlan = "0d2f2e";
      this.buttonBgColorNotizForm = "0a7a74";
      this.buttonBgColorInfoForm = "0a7a74";
    } else {
      this.buttonBgColorShowTablePlan = "0a7a74";
    }
    if (this.fontColorShowTablePlan = "f3efe4") {
      this.fontColorShowTablePlan = "0a7a74";
      this.fontColorNotizForm = "f3efe4";
      this.fontColorInfoForm = "f3efe4";
    } else {
      this.fontColorShowTablePlan = "0a7a74";
    }
    this.showNotizFormBoolChange.emit(this.showNotizFormBool);
    this.showInfoFormBoolChange.emit(this.showInfoFormBool);
    this.showTablePlanBoolChange.emit(this.showTablePlanBool);
  }

  mouseEnterShowInfoForm() {
    //console.log("mouse enter : ");
    if (this.buttonBgColorInfoForm === "0a7a74") {
      //console.log('mouse enter1 :');
      this.buttonBgColorInfoForm = "154846";
    }
  }

  mouseLeaveShowInfoForm() {
    if (this.buttonBgColorInfoForm === "0a7a74") {
      //console.log('mouse leave1 :');
      this.buttonBgColorInfoForm = "154846";
    } else if (this.buttonBgColorInfoForm === "154846") {
      //console.log('mouse leave2 :');
      this.buttonBgColorInfoForm = "0a7a74";
    }
  }

  mouseEnterShowNotizForm() {
    //console.log("mouse enter : ");
    if (this.buttonBgColorNotizForm === "0a7a74") {
      //console.log('mouse enter1 :');
      this.buttonBgColorNotizForm = "154846";
    }
  }

  mouseLeaveShowNotizForm() {
    if (this.buttonBgColorNotizForm === "0a7a74") {
      //console.log('mouse leave1 :');
      this.buttonBgColorNotizForm = "154846";
    } else if (this.buttonBgColorNotizForm === "154846") {
      //console.log('mouse leave2 :');
      this.buttonBgColorNotizForm = "0a7a74";
    }
  }

  mouseEnterShowTablePlan() {
    //console.log("mouse enter mouseEnterShowTablePlan: ");
    if (this.buttonBgColorShowTablePlan === "0a7a74") {
      //console.log('mouse enter1 mouseEnterShowTablePlan:');
      this.buttonBgColorShowTablePlan = "154846";
    }
  }

  mouseLeaveShowTablePlan() {
    if (this.buttonBgColorShowTablePlan === "0a7a74") {
      //console.log('mouse leave1 mouseEnterShowTablePlan:');
      this.buttonBgColorShowTablePlan = "154846";
    } else if (this.buttonBgColorShowTablePlan === "154846") {
      //console.log('mouse leave2 mouseEnterShowTablePlan:');
      this.buttonBgColorShowTablePlan = "0a7a74";
    }
  }


  mouseEnterDropdownToggle() {
    //console.log("mouse enter mouseEnterShowTablePlan: ");
    if (this.buttonBgColorDropdownToggle === "0a7a74") {
      //console.log('mouse enter1 mouseEnterShowTablePlan:');
      this.buttonBgColorDropdownToggle = "154846";
    }
  }

  mouseLeaveDropdownToggle() {
    if (this.buttonBgColorDropdownToggle === "0a7a74") {
      //console.log('mouse leave1 mouseEnterShowTablePlan:');
      this.buttonBgColorDropdownToggle = "154846";
    } else if (this.buttonBgColorDropdownToggle === "154846") {
      //console.log('mouse leave2 mouseEnterShowTablePlan:');
      this.buttonBgColorDropdownToggle = "0a7a74";
    }
  }

  mouseEnterBauernStubn() {
    //console.log("mouse enter mouseEnterBauernStubn: ");
    if (this.buttonBgColor1 === "0a7a74") {
      //console.log('mouse enter1 mouseEnterBauernStubn:');
      this.buttonBgColor1 = "154846";
    }
  }

  mouseLeaveBauernStubn() {
    if (this.buttonBgColor1 === "0a7a74") {
      //console.log('mouse leave1 mouseLeaveBauernStubn:');
      this.buttonBgColor1 = "154846";
    } else if (this.buttonBgColor1 === "154846") {
      //console.log('mouse leave2 mouseLeaveBauernStubn:');
      this.buttonBgColor1 = "0a7a74";
    }
  }

  mouseEnterBergler() {
    //console.log("mouse enter mouseEnterShowTablePlan: ");
    if (this.buttonBgColor2 === "0a7a74") {
      //console.log('mouse enter1 mouseEnterShowTablePlan:');
      this.buttonBgColor2 = "154846";
    }
  }

  mouseLeaveBergler() {
    if (this.buttonBgColor2 === "0a7a74") {
      //console.log('mouse leave1 mouseEnterShowTablePlan:');
      this.buttonBgColor2 = "154846";
    } else if (this.buttonBgColor2 === "154846") {
      //console.log('mouse leave2 mouseEnterShowTablePlan:');
      this.buttonBgColor2 = "0a7a74";
    }
  }

  mouseEnterWaeldler() {
    //console.log("mouse enter mouseEnterShowTablePlan: ");
    if (this.buttonBgColor3 === "0a7a74") {
      //console.log('mouse enter1 mouseEnterShowTablePlan:');
      this.buttonBgColor3 = "154846";
    }
  }

  mouseLeaveWaeldler() {
    if (this.buttonBgColor3 === "0a7a74") {
      //console.log('mouse leave1 mouseEnterShowTablePlan:');
      this.buttonBgColor3 = "154846";
    } else if (this.buttonBgColor3 === "154846") {
      //console.log('mouse leave2 mouseEnterShowTablePlan:');
      this.buttonBgColor3 = "0a7a74";
    }
  }

  mouseEnterEdelweiss() {
    //console.log("mouse enter mouseEnterShowTablePlan: ");
    if (this.buttonBgColor4 === "0a7a74") {
      //console.log('mouse enter1 mouseEnterShowTablePlan:');
      this.buttonBgColor4 = "154846";
    }
  }

  mouseLeaveEdelweiss() {
    if (this.buttonBgColor4 === "0a7a74") {
      //console.log('mouse leave1 mouseEnterShowTablePlan:');
      this.buttonBgColor4 = "154846";
    } else if (this.buttonBgColor4 === "154846") {
      //console.log('mouse leave2 mouseEnterShowTablePlan:');
      this.buttonBgColor4 = "0a7a74";
    }
  }

  mouseEnterTeestube() {
    //console.log("mouse enter mouseEnterShowTablePlan: ");
    if (this.buttonBgColor5 === "0a7a74") {
      //console.log('mouse enter1 mouseEnterShowTablePlan:');
      this.buttonBgColor5 = "154846";
    }
  }

  mouseLeaveTeestube() {
    if (this.buttonBgColor5 === "0a7a74") {
      //console.log('mouse leave1 mouseEnterShowTablePlan:');
      this.buttonBgColor5 = "154846";
    } else if (this.buttonBgColor5 === "154846") {
      //console.log('mouse leave2 mouseEnterShowTablePlan:');
      this.buttonBgColor5 = "0a7a74";
    }
  }

  mouseEnterTerasse() {
    //console.log("mouse enter mouseEnterShowTablePlan: ");
    if (this.buttonBgColor6 === "0a7a74") {
      //console.log('mouse enter1 mouseEnterShowTablePlan:');
      this.buttonBgColor6 = "154846";
    }
  }

  mouseLeaveTerasse() {
    if (this.buttonBgColor6 === "0a7a74") {
      //console.log('mouse leave1 mouseEnterShowTablePlan:');
      this.buttonBgColor6 = "154846";
    } else if (this.buttonBgColor6 === "154846") {
      //console.log('mouse leave2 mouseEnterShowTablePlan:');
      this.buttonBgColor6 = "0a7a74";
    }
  }

  mouseEnterTerrasseEdelweiss() {
    //console.log("mouse enter mouseEnterShowTablePlan: ");
    if (this.buttonBgColor7 === "0a7a74") {
      //console.log('mouse enter1 mouseEnterShowTablePlan:');
      this.buttonBgColor7 = "154846";
    }
  }

  mouseLeaveTerrasseEdelweiss() {
    if (this.buttonBgColor7 === "0a7a74") {
      //console.log('mouse leave1 mouseEnterShowTablePlan:');
      this.buttonBgColor7 = "154846";
    } else if (this.buttonBgColor7 === "154846") {
      //console.log('mouse leave2 mouseEnterShowTablePlan:');
      this.buttonBgColor7 = "0a7a74";
    }
  }

  mouseEnterAlle() {
    //console.log("mouse enter mouseEnterShowTablePlan: ");
    if (this.buttonBgColor8 === "0a7a74") {
      //console.log('mouse enter1 mouseEnterShowTablePlan:');
      this.buttonBgColor8 = "154846";
    }
  }

  mouseLeaveAlle() {
    if (this.buttonBgColor8 === "0a7a74") {
      //console.log('mouse leave1 mouseEnterShowTablePlan:');
      this.buttonBgColor8 = "154846";
    } else if (this.buttonBgColor8 === "154846") {
      //console.log('mouse leave2 mouseEnterShowTablePlan:');
      this.buttonBgColor8 = "0a7a74";
    }
  }

  none(event) {
    event.stopPropagation();
  }


}
