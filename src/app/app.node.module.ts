import { AppComponent } from './';
import { NgModule, Component } from '@angular/core';
import { ServerModule } from "@angular/platform-server";
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from "@angular/common";
import { AppSharedModule } from './app.shared.module';




@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    
  ],
  imports: [
   AppSharedModule,
   ServerModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ]
})
export class AppNodeModule { }
