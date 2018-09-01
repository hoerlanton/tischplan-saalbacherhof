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
  @Input('fontColor1') fontColor1: string;
  @Input('fontColor2') fontColor2: string;
  @Input('fontColor3') fontColor3: string;
  @Input('fontColor4') fontColor4: string;
  @Input('fontColor5') fontColor5: string;
  @Input('fontColor6') fontColor6: string;
  @Input('showErdeBool') showErdeBool: boolean;
  @Input('showFeuerBool') showFeuerBool: boolean;
  @Input('showLuftBool') showLuftBool: boolean;
  @Input('showMetallBool') showMetallBool: boolean;
  @Input('showWasserBool') showWasserBool: boolean;
  @Input('showAlleBool') showAlleBool: boolean;
  @Output() showErdeBoolChange: EventEmitter<boolean> = new EventEmitter();
  @Output() showFeuerBoolChange: EventEmitter<boolean> = new EventEmitter();
  @Output() showLuftBoolChange: EventEmitter<boolean> = new EventEmitter();
  @Output() showMetallBoolChange: EventEmitter<boolean> = new EventEmitter();
  @Output() showWasserBoolChange: EventEmitter<boolean> = new EventEmitter();
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


  showErde() {

    //console.log("showErde!");
    this.showErdeBool = true;
    this.showFeuerBool = false;
    this.showMetallBool = false;
    this.showLuftBool = false;
    this.showWasserBool = false;
    this.showAlleBool = false;
    this.showAbteilungen = false;

    if (this.buttonBgColor1 === "154846") {
      this.buttonBgColor1 = "0d2f2e";
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

    this.showErdeBoolChange.emit(this.showErdeBool);
    this.showFeuerBoolChange.emit(this.showFeuerBool);
    this.showLuftBoolChange.emit(this.showLuftBool);
    this.showMetallBoolChange.emit(this.showMetallBool);
    this.showWasserBoolChange.emit(this.showWasserBool);
    this.showAlleBoolChange.emit(this.showAlleBool);
  }

  showFeuer() {
    //console.log("showFeuer!");
    this.showAbteilungen = false;
    this.showErdeBool = false;
    this.showFeuerBool = true;
    //console.log(this.showFeuerBool);
    this.showMetallBool = false;
    this.showLuftBool = false;
    this.showWasserBool = false;
    this.showAlleBool = false;

    if (this.buttonBgColor2 === "154846") {
      this.buttonBgColor2 = "0d2f2e";
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
    this.showErdeBoolChange.emit(this.showErdeBool);
    this.showFeuerBoolChange.emit(this.showFeuerBool);
    this.showLuftBoolChange.emit(this.showLuftBool);
    this.showMetallBoolChange.emit(this.showMetallBool);
    this.showWasserBoolChange.emit(this.showWasserBool);
    this.showAlleBoolChange.emit(this.showAlleBool);
  }

  showMetall() {
    //console.log("showMetall!");
    this.showErdeBool = false;
    this.showFeuerBool = false;
    this.showMetallBool = true;
    this.showLuftBool = false;
    this.showWasserBool = false;
    this.showAlleBool = false;
    this.showAbteilungen = false;

    if (this.buttonBgColor3 === "154846") {
      this.buttonBgColor3 = "0d2f2e";
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
    this.showErdeBoolChange.emit(this.showErdeBool);
    this.showFeuerBoolChange.emit(this.showFeuerBool);
    this.showLuftBoolChange.emit(this.showLuftBool);
    this.showMetallBoolChange.emit(this.showMetallBool);
    this.showWasserBoolChange.emit(this.showWasserBool);
    this.showAlleBoolChange.emit(this.showAlleBool);
  }

  showLuft() {
    //console.log("showLuft!");
    this.showErdeBool = false;
    this.showFeuerBool = false;
    this.showMetallBool = false;
    this.showLuftBool = true;
    this.showWasserBool = false;
    this.showAlleBool = false;
    this.showAbteilungen = false;

    if (this.buttonBgColor4 === "154846") {
      this.buttonBgColor4 = "0d2f2e";
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
    this.showErdeBoolChange.emit(this.showErdeBool);
    this.showFeuerBoolChange.emit(this.showFeuerBool);
    this.showLuftBoolChange.emit(this.showLuftBool);
    this.showMetallBoolChange.emit(this.showMetallBool);
    this.showWasserBoolChange.emit(this.showWasserBool);
    this.showAlleBoolChange.emit(this.showAlleBool);
  }

  showWasser() {
    //console.log("showWasser!");
    this.showErdeBool = false;
    this.showFeuerBool = false;
    this.showMetallBool = false;
    this.showLuftBool = false;
    this.showWasserBool = true;
    this.showAlleBool = false;
    this.showAbteilungen = false;

    if (this.buttonBgColor5 === "154846") {
      this.buttonBgColor5 = "0d2f2e";
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
      this.fontColor6 = "f3efe4";
    } else {
      this.fontColor5 = "f3efe4";
    }
    this.showErdeBoolChange.emit(this.showErdeBool);
    this.showFeuerBoolChange.emit(this.showFeuerBool);
    this.showLuftBoolChange.emit(this.showLuftBool);
    this.showMetallBoolChange.emit(this.showMetallBool);
    this.showWasserBoolChange.emit(this.showWasserBool);
    this.showAlleBoolChange.emit(this.showAlleBool);
  }

  showAlle() {
    //console.log("showAlle!");
    this.showErdeBool = false;
    this.showFeuerBool = false;
    this.showMetallBool = false;
    this.showLuftBool = false;
    this.showWasserBool = false;
    this.showAlleBool = true;
    this.showAbteilungen = false;

    if (this.buttonBgColor6 === "154846") {
      this.buttonBgColor6 = "0d2f2e";
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
    this.showErdeBoolChange.emit(this.showErdeBool);
    this.showFeuerBoolChange.emit(this.showFeuerBool);
    this.showLuftBoolChange.emit(this.showLuftBool);
    this.showMetallBoolChange.emit(this.showMetallBool);
    this.showWasserBoolChange.emit(this.showWasserBool);
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

  mouseEnterErde() {
    //console.log("mouse enter mouseEnterErde: ");
    if (this.buttonBgColor1 === "0a7a74") {
      //console.log('mouse enter1 mouseEnterErde:');
      this.buttonBgColor1 = "154846";
    }
  }

  mouseLeaveErde() {
    if (this.buttonBgColor1 === "0a7a74") {
      //console.log('mouse leave1 mouseLeaveErde:');
      this.buttonBgColor1 = "154846";
    } else if (this.buttonBgColor1 === "154846") {
      //console.log('mouse leave2 mouseLeaveErde:');
      this.buttonBgColor1 = "0a7a74";
    }
  }

  mouseEnterFeuer() {
    //console.log("mouse enter mouseEnterShowTablePlan: ");
    if (this.buttonBgColor2 === "0a7a74") {
      //console.log('mouse enter1 mouseEnterShowTablePlan:');
      this.buttonBgColor2 = "154846";
    }
  }

  mouseLeaveFeuer() {
    if (this.buttonBgColor2 === "0a7a74") {
      //console.log('mouse leave1 mouseEnterShowTablePlan:');
      this.buttonBgColor2 = "154846";
    } else if (this.buttonBgColor2 === "154846") {
      //console.log('mouse leave2 mouseEnterShowTablePlan:');
      this.buttonBgColor2 = "0a7a74";
    }
  }

  mouseEnterMetall() {
    //console.log("mouse enter mouseEnterShowTablePlan: ");
    if (this.buttonBgColor3 === "0a7a74") {
      //console.log('mouse enter1 mouseEnterShowTablePlan:');
      this.buttonBgColor3 = "154846";
    }
  }

  mouseLeaveMetall() {
    if (this.buttonBgColor3 === "0a7a74") {
      //console.log('mouse leave1 mouseEnterShowTablePlan:');
      this.buttonBgColor3 = "154846";
    } else if (this.buttonBgColor3 === "154846") {
      //console.log('mouse leave2 mouseEnterShowTablePlan:');
      this.buttonBgColor3 = "0a7a74";
    }
  }

  mouseEnterLuft() {
    //console.log("mouse enter mouseEnterShowTablePlan: ");
    if (this.buttonBgColor4 === "0a7a74") {
      //console.log('mouse enter1 mouseEnterShowTablePlan:');
      this.buttonBgColor4 = "154846";
    }
  }

  mouseLeaveLuft() {
    if (this.buttonBgColor4 === "0a7a74") {
      //console.log('mouse leave1 mouseEnterShowTablePlan:');
      this.buttonBgColor4 = "154846";
    } else if (this.buttonBgColor4 === "154846") {
      //console.log('mouse leave2 mouseEnterShowTablePlan:');
      this.buttonBgColor4 = "0a7a74";
    }
  }

  mouseEnterWasser() {
    //console.log("mouse enter mouseEnterShowTablePlan: ");
    if (this.buttonBgColor5 === "0a7a74") {
      //console.log('mouse enter1 mouseEnterShowTablePlan:');
      this.buttonBgColor5 = "154846";
    }
  }

  mouseLeaveWasser() {
    if (this.buttonBgColor5 === "0a7a74") {
      //console.log('mouse leave1 mouseEnterShowTablePlan:');
      this.buttonBgColor5 = "154846";
    } else if (this.buttonBgColor5 === "154846") {
      //console.log('mouse leave2 mouseEnterShowTablePlan:');
      this.buttonBgColor5 = "0a7a74";
    }
  }

  mouseEnterAlle() {
    //console.log("mouse enter mouseEnterShowTablePlan: ");
    if (this.buttonBgColor6 === "0a7a74") {
      //console.log('mouse enter1 mouseEnterShowTablePlan:');
      this.buttonBgColor6 = "154846";
    }
  }

  mouseLeaveAlle() {
    if (this.buttonBgColor6 === "0a7a74") {
      //console.log('mouse leave1 mouseEnterShowTablePlan:');
      this.buttonBgColor6 = "154846";
    } else if (this.buttonBgColor6 === "154846") {
      //console.log('mouse leave2 mouseEnterShowTablePlan:');
      this.buttonBgColor6 = "0a7a74";
    }
  }

  none(event) {
    event.stopPropagation();
  }


}
