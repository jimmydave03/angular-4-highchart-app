/**

Parent module.

**/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { ChartModule } from 'angular-highcharts';
import { HighchartComponent } from './highchart/highchart.component';
import { HttpService } from './http-service.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    HighchartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    ChartModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
