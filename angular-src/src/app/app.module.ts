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
import { ImHausListeComponent } from './components/digitalerTischplan/im-haus-liste/im-haus-liste.component';
import { TableplanComponent } from './components/digitalerTischplan/tableplan/tableplan.component';
import { NavigationComponent } from './components/digitalerTischplan/navigation/navigation.component';
import { PrintComponent } from './components/digitalerTischplan/print/print.component';
import { FormComponent } from './components/digitalerTischplan/form/form.component';
import { DepartmentsComponent } from './components/digitalerTischplan/departments/departments.component';
import { DepartmentmenuComponent } from './components/digitalerTischplan/departmentmenu/departmentmenu.component';
import { ErdeComponent } from './components/digitalerTischplan/departments/erde/erde.component';
import { LuftComponent } from './components/digitalerTischplan/departments/luft/luft.component';
import { WasserComponent } from './components/digitalerTischplan/departments/wasser/wasser.component';
import { MetallComponent } from './components/digitalerTischplan/departments/metall/metall.component';
import { FeuerComponent } from './components/digitalerTischplan/departments/feuer/feuer.component';
import { AlleComponent } from './components/digitalerTischplan/departments/alle/alle.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/digitalerTischplan/login/login.component';
import { RegisterComponent } from './components/digitalerTischplan/register/register.component';
import { HomeComponent } from './components/digitalerTischplan/home/home.component';
import { ProfileComponent } from './components/digitalerTischplan/profile/profile.component';

import { AuthGuard } from './guards/auth.guard';
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';


const appRoutes: Routes =  [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: TischplanComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]}
];


@NgModule({
  declarations: [
    AppComponent,
    TischplanComponent,
    ImHausListeComponent,
    TableplanComponent,
    NavigationComponent,
    PrintComponent,
    FormComponent,
    DepartmentsComponent,
    DepartmentmenuComponent,
    ErdeComponent,
    FeuerComponent,
    LuftComponent,
    WasserComponent,
    MetallComponent,
    AlleComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    DragulaModule,
    ReactiveFormsModule,
    BrowserModule,
    BsDropdownModule.forRoot(),
    Ng2SearchPipeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
