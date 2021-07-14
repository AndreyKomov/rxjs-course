import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {
    concat,
    fromEvent,
    interval,
    noop,
    observable,
    Observable,
    of,
    timer,
    merge,
    Subject,
    BehaviorSubject,
    AsyncSubject,
    ReplaySubject
} from 'rxjs';
import {delayWhen, filter, map, take, timeout} from 'rxjs/operators';
import {createHttpObservable} from '../common/util';


@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    ngOnInit() {
      const sourse1$ = of(1, 2, 3);
      const sourse2$ = of(4, 5, 6);
      const sourse3$ = of(7, 8, 9);
      const result$ = concat(sourse1$, sourse2$, sourse3$);
      result$.subscribe(val => console.log(val));

    }


}






