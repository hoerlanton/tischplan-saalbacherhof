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

  constructor(private tischplanService: TischplanService) { }

  ngOnInit() {
  }
  updateImHausListeElement(informationElements2) {
    this.tischplanService.updateImHausListeElement(informationElements2)
      .subscribe(response => {
        //this.imHausListeElemente = response;
        console.log('updateImHausListeElement response: ');
        console.log(response);
      });
  }
}
