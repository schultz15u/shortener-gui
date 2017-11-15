import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListeComponent } from './liste/liste.component';
import {DataRetrieverService} from './data-retriever.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ListeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataRetrieverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
