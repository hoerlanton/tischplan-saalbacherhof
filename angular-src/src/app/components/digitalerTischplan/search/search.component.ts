import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['../tischplan.component.css']
})
export class SearchComponent implements OnInit {

  term: string;
  @Output()
  termExport:EventEmitter<any> = new EventEmitter();


  constructor() { }

  onKey(event: any) { // without type in
    this.term = event.target.value;
    console.log(this.term);
    this.termExport.emit(this.term);
  }

  ngOnInit() {
  }

}
