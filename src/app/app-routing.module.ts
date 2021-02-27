import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
  { path: 'about', loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule)},
  { path: 'contact', loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule)}, 
  { path: "**",  component: PageNotFoundComponent }    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
