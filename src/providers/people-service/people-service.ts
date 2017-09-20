import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PeopleServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class PeopleServiceProvider {
  //data for RestAPI
  data: any;

  constructor(public http: Http) {
    console.log('Hello PeopleServiceProvider Provider');
  }

  //Load method to make an HTTP request
  load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }
  
    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      this.http.get('https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=a96736504fda41f58b3af1ec5876d3b9')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data.results;
         resolve(this.data);
        });
    });
  }

  

}
