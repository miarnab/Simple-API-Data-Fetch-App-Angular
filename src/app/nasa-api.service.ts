import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {

  url = "https://api.nasa.gov/planetary/earth/imagery";
  constructor(private http:HttpClient) { }

  getData(lat:number,lon:number,dim:number,date:string,cloud_score:boolean,api_key:string)
  {
    return this.http.get(`${this.url}/${lat}/${lon}/${dim}/${date}/${cloud_score}/${api_key}`);
  }
}
