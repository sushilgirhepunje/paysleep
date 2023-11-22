import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { DeleteemployeeComponent } from './deleteemployee/deleteemployee.component';


const routes: Routes = [
  // {path:'deleteemplink/:delete',component:DeleteemployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
