import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PatientsComponent } from './components/patients/patients.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NewPatientComponent } from './components/new-patient/new-patient.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NewHospitalizationComponent } from './components/new-hospitalization/new-hospitalization.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, NativeDateAdapter} from '@angular/material/core';
import { SignInComponent } from './components/sign-in/sign-in.component';
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';
import { HospitalizationsComponent } from './components/hospitalizations/hospitalizations.component';
import {MatTableModule} from '@angular/material/table';
import { HospitalizationDetailComponent } from './components/hospitalization-detail/hospitalization-detail.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AcceptanceComponent } from './components/hospitalization-detail/acceptance/acceptance.component';
import { AnamnesisComponent } from './components/hospitalization-detail/anamnesis/anamnesis.component';
import { InfoRowComponent } from './components/hospitalization-detail/info-row/info-row.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { DismissalComponent } from './components/hospitalization-detail/dismissal/dismissal.component';
import { FormComponentComponent } from './components/form-component/form-component.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { MatTableFilterModule } from 'mat-table-filter';
import { PatientDetailComponent } from './components/patient-detail/patient-detail.component';
import {MatIconModule} from '@angular/material/icon';
import { RoomsComponent } from './components/rooms/rooms.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from './components/rooms/bottom-sheet/bottom-sheet.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { DatePipe } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalClosedHospitalizationComponent } from './components/modal-closed-hospitalization/modal-closed-hospitalization.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PatientsComponent,
    DoctorsComponent,
    ProfileComponent,
    NewPatientComponent,
    NewHospitalizationComponent,
    SignInComponent,
    HospitalizationsComponent,
    HospitalizationDetailComponent,
    AcceptanceComponent,
    AnamnesisComponent,
    InfoRowComponent,
    DismissalComponent,
    FormComponentComponent,
    PatientDetailComponent,
    RoomsComponent,
    BottomSheetComponent,
    ModalClosedHospitalizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatMomentDateModule,
    NgxMatSelectSearchModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatExpansionModule,
    MatTableModule,
    MatTabsModule,
    FlexLayoutModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    ScrollingModule,
    MatTableFilterModule,
    MatIconModule,
    MatBottomSheetModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    DatePipe
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
