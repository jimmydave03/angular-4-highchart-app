import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpParams } from "@angular/common/http";


@Injectable()
export class HttpService {

  constructor(public http: HttpClient) { }


  //getting json file data for chart series 1 from asset folder.
  getChratData1(){
    return this.http.get('/assets/data.json');
  }

  //getting json file data for chart series 2 from asset folder.
  getChratData2(){
    return this.http.get('/assets/datas.json');
  }

}
