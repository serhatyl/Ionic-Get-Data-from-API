import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PeopleServiceProvider } from '../../providers/people-service/people-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [PeopleServiceProvider]
})
export class HomePage {
  //This variable for rest
  public peopleData:any;

  constructor(public peopleService:PeopleServiceProvider , public navCtrl: NavController) {
    this.loadPeople();
  }
  

  //this function will run on constructor
  loadPeople(){
    this.peopleService.load()
    .then(data => {
      this.peopleData = data;
      /*log from response*/
      this.peopleData.forEach(element => {
        console.log(element);
      });

    });
  }

}
