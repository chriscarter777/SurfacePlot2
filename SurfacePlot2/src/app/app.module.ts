import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRootComponent } from './app-root.component';
import { AppGraphicComponent } from './app-graphic.component';
import { DataService } from '../data/data.service'


@NgModule({
  declarations: [
      AppRootComponent,
      AppGraphicComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [DataService, Title],
  bootstrap: [AppRootComponent]
  
})
export class AppModule { }
