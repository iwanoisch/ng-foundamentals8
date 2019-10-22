import {Injectable} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {EVENTS} from '../event';

@Injectable({providedIn: 'root', })
export class EventService {

  constructor() {}

  getEvents() {
    const subject = new Subject();
    setTimeout(() => {subject.next(EVENTS); subject.complete(); },
      100);
    return subject;
  }

  // getEvents(): Observable<any[]> {
  //   return of(EVENTS);
  // }

  getEvent(id: number) {
    return EVENTS.find(event => event.id === id);
  }

}

