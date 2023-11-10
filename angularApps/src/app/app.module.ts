import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header } from './layout/header.component';
import { SideBar } from './layout/sidebar.component';
import { Crud } from './crud/crud.component';
@NgModule({
  declarations: [
    AppComponent,
    Header,
    SideBar,
    Crud
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
