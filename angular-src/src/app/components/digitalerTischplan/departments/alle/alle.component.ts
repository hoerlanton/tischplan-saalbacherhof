import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Table } from '../../../../../../Table';
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'filter',
})


@Component({
  selector: 'app-alle',
  templateUrl: 'alle.component.html',
  styleUrls: ['../../tischplan.component.css']
})
export class AlleComponent implements PipeTransform {

  @Input('tables') tables: any;
  @Input('tablesErde') tablesErde: Table[];
  @Input('tablesTerasse') tablesTerasse: Table[];
  @Input('tablesTerrasseLuft') tablesTerrasseLuft: Table[];
  @Input('tablesFeuer') tablesFeuer: Table[];
  @Input('tablesLuft') tablesLuft: Table[];
  @Input('tablesMetall') tablesMetall: Table[];
  @Input('tablesWasser') tablesWasser: Table[];
  @Input('term') term: string;
  @Output()
  occupied:EventEmitter<any> = new EventEmitter();
  @Input('showAlleBool') showAlleBool: boolean;


  constructor() { }

  ngOnInit() {
  }


  occupy(table, j) {
    this.occupied.emit({table, j});
  }

  getStyle(j) {
    if (j.pinfo1Value != "" || j.pinfo2Value != "" || j.pinfo3Value != "") {
      return "solid 3px red";
    } else {
      return "";
    }
  }


  transform(tables: Array<any>, term: any) {
    //console.log("term");
    //console.log(term);
    if (Array.isArray(tables) && tables.length && term && term.length) {
      this.tables = tables.filter(item => {
        //console.log(item);
        let keys = Object.keys(item);
        //console.log(keys);
        if (Array.isArray(keys) && keys.length) {
          for (let key of keys) {
            if (item.hasOwnProperty(key) && item[key] && item[key].length && (item[key].toString().toLowerCase().replace(/ /g, '')).includes((term.toString().toLowerCase().replace(/ /g, '')))) {
              return true;
            }
          }
          return false;
        } else {
          return false;
        }
      });
    } else {
      return tables;
    }
  }


}
