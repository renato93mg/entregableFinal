import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarraComponent } from './components/barra/barra.component';
import { MaterialModule } from './modules/material.module';
import { ListadoComponent } from './components/listado/listado.component';
import { FormComponent } from './components/form/form.component';
import { Pipe01Pipe } from './customPipes/pipe01.pipe';
import { Directive01Directive } from './customDirectives/directive01.directive';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    ListadoComponent,
    FormComponent,
    Pipe01Pipe,
    Directive01Directive
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

