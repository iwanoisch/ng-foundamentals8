import {EventEmitter, Injectable} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {EVENTS} from '../event';
import {IEvent, ISession} from './event.model';

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

  saveEvent(event){
    event.id = 999;
    event.session = [];
    EVENTS.push(event);
  }

  updateEvent(event) {
  let index = EVENTS.findIndex(x=>x.id = event.id);
    EVENTS[index] = event
  }

  searchSessions(searchTerm: string) {
    var term =  searchTerm.toLocaleLowerCase();
    var results: ISession[] = [];

    EVENTS.forEach(event => {
      var matchingSessions = event.sessions.filter(
        session => session.name.toLocaleLowerCase().indexOf(term) > -1
      );
      matchingSessions = matchingSessions.map((session:any) => {
        session.eventId = event.id;
        return session;
      });
      results = results.concat(matchingSessions);
    });
    var emitter = new EventEmitter(true);
    setTimeout(() => {
      emitter.emit(results);
    }, 100);
    return emitter;
  }
}

