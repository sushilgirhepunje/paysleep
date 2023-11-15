import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoRoute } from './TemplateForm/demoRoute.component';

const routes: Routes = [
  {path: '' , component:DemoRoute  },
  // {path:'form',component.TemplateForm}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
