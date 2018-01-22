import { Component, OnInit, Input } from '@angular/core';
import { TischplanService } from '../../../services/tischplan.service';
import { TracesListElement } from '../../../../../TracesListElement';

@Component({
  selector: 'app-traces-liste',
  templateUrl: 'traces-liste.component.html',
  styleUrls: ['../tischplan.component.css']
})
export class TracesListeComponent implements OnInit {

  constructor(private tischplanService: TischplanService) { }

  @Input('tracesListeElemente') tracesListeElemente: TracesListElement[];

  ngOnInit() {
  }

  updateTracesListeElement(informationElements2) {
    this.tischplanService.updateTracesListeElement(informationElements2)
      .subscribe(response => {
        //this.imHausListeElemente = response;
        console.log('updateTracesListeElement response: ');
        console.log(response);
      });
  }
}
