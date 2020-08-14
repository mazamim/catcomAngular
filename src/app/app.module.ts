import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardsComponent } from './components/cards/cards.component';
import { TablesComponent } from './components/tables/tables.component';
import { ProgresstasklistComponent } from './components/progresstasklist/progresstasklist.component';

import { SortableModule } from 'ngx-bootstrap/sortable';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

import {BreadcrumbModule} from 'xng-breadcrumb';
import { SectionHeaderComponent } from './components/section-header/section-header.component';

import { environment } from 'src/environments/environment';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { EmployeeService } from './_services/employee.service';



import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TaskAddComponent } from './task/task-add/task-add.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { ClientAddComponent } from './client/client-add/client-add.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectsAddComponent } from './projects/projects-add/projects-add.component';

import { FileUploadModule } from 'ng2-file-upload';
import { PhotoEditorComponent } from './employee/photo-editor/photo-editor.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AttendanceComponent } from './employee/attendance/attendance.component';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { MomentModule } from 'ngx-moment';
import { AttendanceReportComponent } from './reports/attendance-report/attendance-report.component';

import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { RefreshComponent } from './refresh/refresh.component';
import { ProjectsEditComponent } from './projects/projects-edit/projects-edit.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { NgxSpinnerModule } from "ngx-spinner";
import { AddBulkTicketComponent } from './projects/add-bulk-ticket/add-bulk-ticket.component';
import { ShowallprojectsComponent } from './projects/showallprojects/showallprojects.component';
import { MatTableExporterModule } from 'mat-table-exporter';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';

//material
import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  AmazonLoginProvider,
} from 'angularx-social-login';
import { TestComponent } from './test/test.component';
import { AddUsingTableComponent } from './projects/add-using-table/add-using-table.component';
import { AddJobTypesComponent } from './projects/add-job-types/add-job-types.component';
import { AddBulkRatecardComponent } from './ratecard/add-bulk-ratecard/add-bulk-ratecard.component';
import { RatecardComponent } from './ratecard/ratecard/ratecard.component';







@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,

    CardsComponent,
    TablesComponent,
    ProgresstasklistComponent,


    HomeComponent,
    SectionHeaderComponent,





    EmployeeListComponent,
    EmployeeAddComponent,
    TaskAddComponent,
    TaskListComponent,
    EmployeeEditComponent,
    ClientAddComponent,
    ClientListComponent,
    ProjectsListComponent,
    ProjectsAddComponent,

    PhotoEditorComponent,
    AttendanceComponent,
    AttendanceReportComponent,

    CustomerListComponent,
    CustomerAddComponent,
    RefreshComponent,
    ProjectsEditComponent,

    AddBulkTicketComponent,
    ShowallprojectsComponent,
    TestComponent,
    AddUsingTableComponent,
    AddJobTypesComponent,
    AddBulkRatecardComponent,
    RatecardComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BreadcrumbModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    BsDatepickerModule.forRoot(),
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    NgxPaginationModule,
    AccordionModule.forRoot(),
    FileUploadModule,
    HttpClientModule,
    TabsModule.forRoot(),
    CarouselModule,
    TimepickerModule.forRoot(),
    MomentModule,
    SortableModule.forRoot(),
    PaginationModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    MatSliderModule,
    MatTableModule,
    MatPaginatorModule,
    NgxSpinnerModule,
    MatTableExporterModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    SocialLoginModule,
    MatIconModule,
    MatDialogModule,
    MatToolbarModule,
    MatGridListModule,
    MatRadioModule,
    MatSelectModule,
    NgxChartsModule



  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true},
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '688957477804-7t5edtk8pfr8kcqhj1qt3988ids1jr26.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('clientId'),
          },
          {
            id: AmazonLoginProvider.PROVIDER_ID,
            provider: new AmazonLoginProvider(
              'clientId'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
