import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PatientsComponent} from "./components/patients/patients.component";
import {DoctorsComponent} from "./components/doctors/doctors.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {NewPatientComponent} from "./components/new-patient/new-patient.component";
import {NewHospitalizationComponent} from "./components/new-hospitalization/new-hospitalization.component";
import {SignInComponent} from "./components/sign-in/sign-in.component";
import {HospitalizationsComponent} from "./components/hospitalizations/hospitalizations.component";
import {HospitalizationDetailComponent} from "./components/hospitalization-detail/hospitalization-detail.component";
import {PatientDetailComponent} from "./components/patient-detail/patient-detail.component";
import {RoomsComponent} from "./components/rooms/rooms.component";

const routes: Routes = [
  {path: 'doctors', component: DoctorsComponent},
  {path: 'hospitalizations/add', component: NewHospitalizationComponent },
  {path: 'hospitalizations', component: HospitalizationsComponent},
  {path: 'hospitalization/:id', component: HospitalizationDetailComponent},
  {path: 'patient/:id', component: PatientDetailComponent},
  {path: 'patients/add', component: NewPatientComponent},
  {path: 'patients', component: PatientsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'rooms', component: RoomsComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: '', redirectTo: 'patients', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
