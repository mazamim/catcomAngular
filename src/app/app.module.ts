import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardsComponent } from './components/cards/cards.component';
import { TablesComponent } from './components/tables/tables.component';
import { ProgresstasklistComponent } from './components/progresstasklist/progresstasklist.component';
import { ActivityComponent } from './components/activity/activity.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

import {BreadcrumbModule} from 'xng-breadcrumb';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { EmployeesComponent } from './employees/employees.component';
import { environment } from 'src/environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardsComponent,
    TablesComponent,
    ProgresstasklistComponent,
    ActivityComponent,
    FooterComponent,
    HomeComponent,
    SectionHeaderComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BreadcrumbModule,
    BsDropdownModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
