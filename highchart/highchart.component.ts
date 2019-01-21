/**
Highchart component to serve and render Highchart and related functionalities.
**/

import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { HttpService } from '../http-service.service';
import { Response } from "@angular/http";
import { Subject } from "rxjs";

@Component({
  selector: 'highchart',
  templateUrl: './highchart.component.html',
  styleUrls: ['./highchart.component.css']
})
export class HighchartComponent implements OnInit {

  //field for chart series 1.
  chartSeries1:any;

  //field for chart series 2.
  chartSeries2:any;

  //field for chart object.
  chart:any;
 
  constructor(private httpService:HttpService) { 
  	
  	//here we are getting data for series 1 from json file via http client.
  	this.httpService.getChratData1().subscribe((res: Response) => {
  		this.chartSeries1 = res;
  		if(this.chartSeries1){
  			this.loadChart();
  		}
  	},(error: any) => { }
    );

  	//here we are getting data for series 2 from json file via http client.
    this.httpService.getChratData2().subscribe((res: Response) => {
  		this.chartSeries2 = res;
  		if(this.chartSeries2){
  			this.loadChart();
  		}
  	},(error: any) => { }
    );
 
  }
  	
  ngOnInit() { }

  //here is chart initialize
  loadChart(){
  	this.chart = new Chart({
	    chart: {
	        type: 'spline'
	    },
	    title:{
	    	text:'Spline Chart'
	    },
    	series: [{},{}]
  	});

	  //initialize series 1
  	this.chart.options.series[0].data = this.chartSeries1;

  	//initialize series 2
  	this.chart.options.series[1].data = this.chartSeries2;
  }
}
