import { Component, OnInit, Input} from '@angular/core';
import { TischplanService } from '../../../services/tischplan.service';
import { ImHausListe } from '../../../../../ImHausListe';


@Component({
  selector: 'app-im-haus-liste',
  templateUrl: 'im-haus-liste.component.html',
  styleUrls: ['../tischplan.component.css']
})
export class ImHausListeComponent implements OnInit {

  @Input('imHausListeElemente') imHausListeElemente: ImHausListe[];
  dateTodayGenerated: any;
  parts: any[] = [];
  date: any;
  parsedDate: any;

  constructor(private tischplanService: TischplanService) { }

  ngOnInit() {
  }

  updateImHausListeElement(informationElements2) {
    this.tischplanService.updateImHausListeElement(informationElements2)
      .subscribe(response => {
        //this.imHausListeElemente = response;
        //console.log('updateImHausListeElement response: ');
        //console.log(response);
      });
  }

  sortList() {
    this.dateTodayGenerated = new Date();
    let dateToday = String(this.dateTodayGenerated).substring(0, 15);
    //console.log("===========================ANREISEN===============================");
    //console.log(dateToday);
    for (let i = 0; i < this.imHausListeElemente.length; i++) {
      this.imHausListeElemente[i].isAnreise = false;
      if (this.imHausListeElemente[i].anreise) {
        this.parts = this.imHausListeElemente[i].anreise.match(/(\d+)/g);
        //console.log(this.parts);
      }
      if (this.parts) {
        this.date = new Date(2018, this.parts[1] - 1, this.parts[0]);
        //console.log(this.date);
        this.parsedDate = String(this.date).substring(0, 15);
        //console.log(this.parsedDate);
      }
      if (dateToday.indexOf(this.parsedDate) !== -1) {
        this.imHausListeElemente[i].isAnreise = true;
      }
    }
  }

}
