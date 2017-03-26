import { AppComponent } from './';
import { NgModule, Component } from '@angular/core';
import { ServerModule } from "@angular/platform-server";
import { BrowserModule } from '@angular/platform-browser';


let components = [
    AppComponent,
]

@NgModule({
    declarations: components,
    imports: [
        BrowserModule.withServerTransition({
            appId: 'Leto'
        }),

    ],
    providers: [
    ],
    exports: components
})
export class AppSharedModule { }
