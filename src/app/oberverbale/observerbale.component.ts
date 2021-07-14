import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map,filter } from 'rxjs/operators';

@Component({
  selector: 'app-observerbale',
  templateUrl: './observerbale.component.html',
  styleUrls: ['./observerbale.component.css']
})
export class ObserverbaleComponent implements OnInit {

  private firstSubscrition: Subscription;

  constructor() { }

  ngOnInit() {
    //my fist observerbale
    const customInternalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        /*if(count===2){
          observer.complete();
        }*/
        if (count > 3) {
          observer.error(new Error("Count is greather than 3"));

        }
        count++;
      }, 1000);

    });
    this.firstSubscrition = customInternalObservable.pipe(filter(d=>{
      return d >0;
    }),map((data:number)=>{
      return 'Round' + (data +1);
    })).subscribe(data => {
      console.log('===>', data);
    }, error => {
      console.log('===>', error);
      alert(error.message);
    },()=>{
      console.log('Complete, unsubscribe is not necessary. see observer complete')
    });
  }

  ngOnDestroy() {
    this.firstSubscrition.unsubscribe();


  }

}
