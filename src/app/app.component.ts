import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
import { NasaApiService } from './nasa-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  results:any;
  constructor(private nasaapiservice:NasaApiService, private route:ActivatedRoute){}

  ngOnInit(){}

  submitData():void
  {
    this.route.params.subscribe(params => {
      const lat = params['latitude']
      const lon = params['longitude']
      const dim = params['dimension']
      const date = params['date']
      const c_score = params['cloud_score']
      const a_key = params['api_key']
      this.nasaapiservice
        .getData(lat,lon,dim,date,c_score,a_key)
          .subscribe(results => this.results = results)
    })
  }
}
