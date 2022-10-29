import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {DataService} from "./data.service";
import {HttpClientModule} from "@angular/common/http";
import {ProductsModule} from "./products/products.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        HttpClientInMemoryWebApiModule.forRoot(DataService),
        HttpClientModule,
        BrowserModule,
        ProductsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
