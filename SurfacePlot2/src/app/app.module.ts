import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app-root.component';
import { AppGraphicComponent } from './app-graphic.component';
import { DataService } from '../data/data.service'


@NgModule({
  declarations: [
      AppComponent,
      AppGraphicComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [DataService, Title],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
