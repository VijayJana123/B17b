import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BookFilterComponent } from './components/book-filter/book-filter.component';
import { PriceFilterComponent } from './components/price-filter/price-filter.component';
import { FilterPipe } from './pipes/filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatSelectModule } from "@angular/material/select";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import {  MatDividerModule } from "@angular/material/divider";
import { MatSliderModule } from "@angular/material/slider";
import { MatAutocompleteModule } from "@angular/material/autocomplete"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BookCardComponent,
    BookFilterComponent,
    PriceFilterComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatSliderModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
