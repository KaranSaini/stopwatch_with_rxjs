import { Component } from '@angular/core';
import { Observable, interval, of, BehaviorSubject } from 'rxjs';
import { map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  result: any;
  tenthSecond$ = interval(100);
  stop = document.querySelector('#stop');
  startClicked$;

  behavior = new BehaviorSubject(this.startClicked$);

  startClicked() {
    this.startClicked$ = this.tenthSecond$.pipe(
      map(item => item / 10)
    )
    .subscribe(num => {
      this.result = num + 's';
    });
  }

  stopClicked() {
    this.startClicked$.unsubscribe();
  }
}
