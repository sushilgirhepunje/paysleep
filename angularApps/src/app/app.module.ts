import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header } from './layout/header.component';
import { SideBar } from './layout/sidebar.component';
import { Crud } from './crud/crud.component';
import { TDS } from './CustomPipe/tds.component';
import { TemplateForm } from './TemplateForm/demo.templateform';
@NgModule({
  declarations: [
    AppComponent,
    Header,
    SideBar,
    Crud,
    TDS,
    TemplateForm
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
