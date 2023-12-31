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
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import { HttpDemo } from './DemoClientHttp/demohttp.component';
import { DemoRoute } from './TemplateForm/demoRoute.component';
import { HelloworldService } from './ServiceUtilities/helloworld.serivce';
@NgModule({
  declarations: [
    AppComponent,
    Header,
    SideBar,
    Crud,
    TDS,
    TemplateForm,
    HttpDemo,
    DemoRoute
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [HttpClientModule,HelloworldService],
  bootstrap: [AppComponent]
})
export class AppModule { }
