import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DateTiempoComponent } from './date-tiempo/date-tiempo.component';
import { VariosDiasClimaComponent } from './varios-dias-clima/varios-dias-clima.component';
import { DateClimaService } from './date-clima.service';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    DateTiempoComponent,
    VariosDiasClimaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'tiempoactual/:city', component: DateTiempoComponent },
      { path: 'prediction', component: VariosDiasClimaComponent },
    ]),
  ],
  providers: [DateClimaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
