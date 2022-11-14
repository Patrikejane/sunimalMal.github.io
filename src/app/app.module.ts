import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppMaterialModule} from "./app.material.module";
import {routing} from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
