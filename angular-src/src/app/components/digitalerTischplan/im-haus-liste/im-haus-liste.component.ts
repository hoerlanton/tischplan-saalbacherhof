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
  tomorrow: boolean;
  bgColorTomorrow: string;
  bgColorToday: string;

  constructor(private tischplanService: TischplanService) {

    this.tomorrow = false;
    this.bgColorTomorrow = "ffffff";
    this.bgColorToday = "ffffff";
  }

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


  changeDayToToday(){
    this.tomorrow = null;
    this.bgColorTomorrow = "ffffff";
    this.bgColorToday = "0a7a74";
  }

  changeDayToTomorrow() {
    this.tomorrow = true;
    this.bgColorTomorrow = "0a7a74";
    this.bgColorToday = "ffffff";

  }

  mouseEnterChangeTodayButton() {
    //console.log("mouse enter : ");
    if (this.bgColorToday === "ffffff") {
      //console.log('mouse enter1 :');
      this.bgColorToday = "bdbdbd";
    }
    if (this.bgColorToday === "0a7a74") {
      //console.log('mouse enter1 :');
      this.bgColorToday = "05504c";
    }
  }

  mouseLeaveChangeTodayButton() {
    if (this.bgColorToday === "bdbdbd") {
      //console.log('mouse leave1 :');
      this.bgColorToday = "ffffff";
    }
    if (this.bgColorToday === "05504c") {
      //console.log('mouse enter1 :');
      this.bgColorToday = "0a7a74";
    }
  }

  mouseEnterChangeTomorrowButton() {
    //console.log("mouse enter : ");
    if (this.bgColorTomorrow === "ffffff") {
      //console.log('mouse enter1 :');
      this.bgColorTomorrow = "bdbdbd";
    }
    if (this.bgColorTomorrow === "0a7a74") {
      //console.log('mouse enter1 :');
      this.bgColorTomorrow = "05504c";
    }
  }

  mouseLeaveChangeTomorrowButton() {
    if (this.bgColorTomorrow === "bdbdbd") {
      //console.log('mouse leave1 :');
      this.bgColorTomorrow = "ffffff";
    }
    if (this.bgColorTomorrow === "05504c") {
      //console.log('mouse enter1 :');
      this.bgColorTomorrow = "0a7a74";
    }
  }

  sortList() {
    if (this.tomorrow) {
      this.dateTodayGenerated = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    } else {
      this.dateTodayGenerated = new Date();
    }
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
