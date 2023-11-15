import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoRoute } from './TemplateForm/demoRoute.component';
import { TemplateForm } from './TemplateForm/demo.templateform';
// import { Crud } from './crud/crud.component';

const routes: Routes = [
  {path: '' , component:DemoRoute  },
  {path:'templateForm',component:TemplateForm}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
