import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable} from 'angularfire2';

import '../../public/css/styles.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  items: FirebaseListObservable<any[]>;
  user: any;

  constructor(private af: AngularFire) {}

  ngOnInit() {
    this.items = this.af.database.list('/courses', {
      query: {
        orderByChild: 'votes'
      }
    }).map(items => {
      items.sort((a: any, b: any) => {
        return a.votes > b.votes;
      });
      return items.reverse();
    }) as FirebaseListObservable<any[]>;

    this.af.auth.subscribe(user => {
      this.user = user;
    });
  }
}
