import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TischplanService {
  constructor(private http: Http) {
    console.log('Task service initialized!');
  }

  getImHausListe() {
    return this.http.get('imHausListe')
      .map(res => res.json());
  }

  getAnreiseListe() {
    return this.http.get('anreiseListe')
      .map(res => res.json());
  }

  getTracesListe() {
    return this.http.get('tracesListe')
      .map(res => res.json());
  }

  getTables() {
    return this.http.get('tables')
      .map(res => res.json());
  }

  getInformationElements() {
    return this.http.get('information')
      .map(res => res.json());
  }


  occupyTable(dataString) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('occupyTable', dataString, {headers: headers})
      .map(res => res.json());
  }

  moveTable(dataString) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('moveTable', dataString, {headers: headers})
      .map(res => res.json());
  }

  dispenseTable(tableSonnbergZirbn) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('dispenseTable', tableSonnbergZirbn, {headers: headers})
      .map(res => res.json()
      );
  }

  removePlaceholder(dataString) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('removePlaceholder', dataString, {headers: headers})
      .map(res => res.json()
      );
  }

  addPlaceholder(tableSonnbergZirbn) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('addPlaceholder', tableSonnbergZirbn, {headers: headers})
      .map(res => res.json()
      );
  }

  addInformationToTable(dataString) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('addInformationToTable', dataString, {headers: headers})
      .map(res => res.json()
      );
  }
  sendInformation(newInformation) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(headers);
    return this.http.post('newInformationToTables', newInformation, {headers: headers} )
      .map(res => res.json());
  }

  sendInformationToBox(newInformation) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(headers);
    return this.http.post('newInformationToBox', newInformation, {headers: headers} )
      .map(res => res.json());
  }


  deleteInformationElement(informationElement) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(headers);
    return this.http.post('deleteInformationElement', informationElement, {headers: headers})
      .map(res => res.json());
  }

  updateImHausListeElement(informationElements2) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(headers);
    return this.http.post('updateImHausListeElement', informationElements2, {headers: headers})
      .map(res => res.json());
  }

  updateAnreiseListeElement(informationElements2) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(headers);
    return this.http.post('updateAnreiseListeElement', informationElements2, {headers: headers})
      .map(res => res.json());
  }

  updateTracesListeElement(informationElements2) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(headers);
    return this.http.post('updateTracesListeElement', informationElements2, {headers: headers})
      .map(res => res.json());
  }
}
