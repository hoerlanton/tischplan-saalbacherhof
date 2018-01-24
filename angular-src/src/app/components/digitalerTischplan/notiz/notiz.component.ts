import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notiz',
  templateUrl: 'notiz.component.html',
  styleUrls: ['../tischplan.component.css']
})
export class NotizComponent implements OnInit {
  @Input('notizElements') notizElements: any;
  @Input('showBauernStubnBool') showBauernStubnBool: boolean;
  @Input('showEdelweissBool') showEdelweissBool: boolean;
  @Input('showBerglerBool') showBerglerBool: boolean;
  @Input('showTeeStubeBool') showTeeStubeBool: boolean;
  @Input('showWaeldlerBool') showWaeldlerBool: boolean;
  @Input('showAlleBool') showAlleBool: boolean;

  constructor() {
  }

  ngOnInit() {
  }
}
