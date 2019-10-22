import {Injectable} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {EVENTS} from '../event';
import {IEvent} from './event.model';

@Injectable({providedIn: 'root', })
export class EventService {

  constructor() {}

  getEvents(): Observable<IEvent[]> {
    const subject = new Subject<IEvent[]>();
    setTimeout(() => {subject.next(EVENTS); subject.complete(); },
      100);
    return subject;
  }

  // getEvents(): Observable<any[]> {
  //   return of(EVENTS);
  // }

  getEvent(id: number): IEvent {
    return EVENTS.find(event => event.id === id);
  }

}

