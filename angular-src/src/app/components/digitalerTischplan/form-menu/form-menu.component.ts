import {Component, OnInit, Input, ViewChild, AfterViewInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-form-menu',
  templateUrl: 'form-menu.component.html',
  styleUrls: ['../tischplan.component.css']
})
export class FormMenuComponent implements OnInit {

  @Input('buttonBgColorInfoForm') buttonBgColorInfoForm: string;
  @Input('fontColorInfoForm') fontColorInfoForm: string;
  @Input('fontColorNotizForm') fontColorNotizForm: string;
  @Input('buttonBgColorNotizForm') buttonBgColorNotizForm: string;
  @Input('showNotizFormBool') showNotizFormBool: boolean;
  @Input('showInfoFormBool') showInfoFormBool: boolean;
  @Output() showNotizFormBoolChange: EventEmitter<boolean> = new EventEmitter();
  @Output() showInfoFormBoolChange: EventEmitter<boolean> = new EventEmitter();
  constructor() {  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }
  showInfoForm() {
    console.log("showInfoForm!");

    this.showNotizFormBool = true;
    this.showInfoFormBool = false;

    if (this.buttonBgColorInfoForm === "0a7a74") {
      this.buttonBgColorInfoForm = "f3efe4";
      this.buttonBgColorNotizForm = "0a7a74";
    } else {
      this.buttonBgColorInfoForm = "0a7a74";
    }
    if (this.fontColorInfoForm === "f3efe4") {
      this.fontColorInfoForm = "0a7a74";
      this.fontColorNotizForm = "f3efe4";
    } else {
      this.fontColorInfoForm = "f3efe4";
    }
    this.showNotizFormBoolChange.emit(this.showNotizFormBool);
    this.showInfoFormBoolChange.emit(this.showInfoFormBool);
  }

  showNotizForm() {
    console.log("showNotizForm!");
    this.showNotizFormBool = false;
    this.showInfoFormBool = true;

    if (this.buttonBgColorNotizForm === "0a7a74") {
      this.buttonBgColorNotizForm = "f3efe4";
      this.buttonBgColorInfoForm = "0a7a74";
    } else {
      this.buttonBgColorNotizForm = "0a7a74";
    }
    if (this.fontColorNotizForm === "f3efe4") {
      this.fontColorNotizForm = "0a7a74";
      this.fontColorInfoForm = "f3efe4";
    } else {
      this.fontColorNotizForm = "f3efe4";
    }
    this.showNotizFormBoolChange.emit(this.showNotizFormBool);
    this.showInfoFormBoolChange.emit(this.showInfoFormBool);
  }
}

