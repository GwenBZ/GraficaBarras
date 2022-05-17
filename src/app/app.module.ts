import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { BarraComponent } from './components/barra/barra.component';
import { NgChartsModule } from 'ng2-charts';
import { PruebaComponent } from './prueba/prueba.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    BarraComponent,
    PruebaComponent
  ],
  imports: [
    BrowserModule,
    NgChartsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
