import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { TischplanComponent } from './components/digitalerTischplan/tischplan.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { DragulaModule } from 'ng2-dragula';
import {NgClass} from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {DropdownModule} from "ng2-dropdown";
import { UploadComponent } from './components/digitalerTischplan/upload/upload.component';
import { TracesListeComponent } from './components/digitalerTischplan/traces-liste/traces-liste.component';
import { ImHausListeComponent } from './components/digitalerTischplan/im-haus-liste/im-haus-liste.component';
import { AnreiseListeComponent } from './components/digitalerTischplan/anreise-liste/anreise-liste.component';
import { TableplanComponent } from './components/digitalerTischplan/tableplan/tableplan.component';
import { NavigationComponent } from './components/digitalerTischplan/navigation/navigation.component';
import { PrintComponent } from './components/digitalerTischplan/print/print.component';
import { FormComponent } from './components/digitalerTischplan/form/form.component';
import { DepartmentsComponent } from './components/digitalerTischplan/departments/departments.component';
import { DepartmentmenuComponent } from './components/digitalerTischplan/departmentmenu/departmentmenu.component';
import { BauernstubeComponent } from './components/digitalerTischplan/departments/bauernstube/bauernstube.component';
import { BerglerStubeHubertusStubeComponent } from './components/digitalerTischplan/departments/bergler-stube-hubertus-stube/bergler-stube-hubertus-stube.component';
import { WaeldlerStubeKristallStubeComponent } from './components/digitalerTischplan/departments/waeldler-stube-kristall-stube/waeldler-stube-kristall-stube.component';
import { EdelweissKaminStubeComponent } from './components/digitalerTischplan/departments/edelweiss-kamin-stube/edelweiss-kamin-stube.component';
import { TeestubeTeeloungeComponent } from './components/digitalerTischplan/departments/teestube-teelounge/teestube-teelounge.component';
import { FormMenuComponent } from './components/digitalerTischplan/form-menu/form-menu.component';
import { NotizComponent } from './components/digitalerTischplan/notiz/notiz.component';


@NgModule({
  declarations: [
    AppComponent, TischplanComponent, UploadComponent, TracesListeComponent, ImHausListeComponent, AnreiseListeComponent, TableplanComponent, NavigationComponent, PrintComponent, FormComponent, DepartmentsComponent, DepartmentmenuComponent, BauernstubeComponent, BerglerStubeHubertusStubeComponent, WaeldlerStubeKristallStubeComponent, EdelweissKaminStubeComponent, TeestubeTeeloungeComponent, FormMenuComponent, NotizComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    DragulaModule,
    ReactiveFormsModule,
    BrowserModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
