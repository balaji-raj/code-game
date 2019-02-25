import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BoardService} from './app.boardservice.service';
import {DbconnectionService} from './dbconnection.service'
import { ChartmakerComponent } from './chartmaker/chartmaker.component'
@NgModule({
  declarations: [
    AppComponent,
    ChartmakerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BoardService,DbconnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
