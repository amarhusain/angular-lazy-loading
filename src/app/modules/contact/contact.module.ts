import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactusComponent } from './components/contactus/contactus.component';
import { LocationComponent } from './components/location/location.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component:ContactusComponent}
];

@NgModule({
  declarations: [ContactusComponent, LocationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactModule { }
