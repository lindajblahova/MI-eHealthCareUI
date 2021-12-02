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

const routes: Routes = [
  {path: 'doctors', component: DoctorsComponent},
  {path: 'my-hospitalizations', component: HospitalizationsComponent},
  {path: 'hospitalization', component: HospitalizationDetailComponent},
  {path: 'my-hospitalizations/add', component: NewHospitalizationComponent },
  {path: 'my-hospitalizations/all', component: HospitalizationsComponent},
  {path: 'my-hospitalizations/ongoing', component: HospitalizationsComponent},
  {path: 'my-hospitalizations/closed', component: HospitalizationsComponent},
  {path: 'patients/add', component: NewPatientComponent},
  {path: 'patients', component: PatientsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: '', redirectTo: 'patients', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
