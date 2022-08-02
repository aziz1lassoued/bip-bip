import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { NotifierModule } from 'angular-notifier';
import { NgToastModule } from 'ng-angular-popup';

import { NgToastService } from 'ng-angular-popup';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,
    NgToastModule
    ,

    NotifierModule.withConfig({
      // Custom options in here
    })


  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
