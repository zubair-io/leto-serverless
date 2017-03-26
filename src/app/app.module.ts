import { NgModule, NgZone } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppSharedModule } from './app.shared.module';



@NgModule({
  imports: [
    AppSharedModule
  ],
  declarations: [

  ],
  bootstrap: [AppComponent],
  providers: [

  ]

})
export class AppModule { }

