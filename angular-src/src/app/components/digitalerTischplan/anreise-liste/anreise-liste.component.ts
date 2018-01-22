import { Component, OnInit, Input } from '@angular/core';
import { TischplanService } from '../../../services/tischplan.service';
import { AnreiseListe } from '../../../../../AnreiseListe';

@Component({
  selector: 'app-anreise-liste',
  templateUrl: 'anreise-liste.component.html',
  styleUrls: ['../tischplan.component.css']
})
export class AnreiseListeComponent implements OnInit {

  constructor(private tischplanService: TischplanService) { }

  @Input('anreiseListeElemente') anreiseListeElemente: AnreiseListe[];

  ngOnInit() {
  }
  updateAnreiseListeElement(informationElements2) {
    this.tischplanService.updateAnreiseListeElement(informationElements2)
      .subscribe(response => {
        //this.imHausListeElemente = response;
        console.log('updateAnreiseListeElement response: ');
        console.log(response);
      });
  }
}
