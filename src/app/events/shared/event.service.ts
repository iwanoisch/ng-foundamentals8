import {EventEmitter, Injectable} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {EVENTS} from '../event';
import {IEvent, ISession} from './event.model';
import {HttpClient} from '@angular/common/http';
import {error} from 'util';
import {catchError} from 'rxjs/operators';

@Injectable({providedIn: 'root', })
export class EventService {

  constructor(private http: HttpClient) {}

  // getEvents(): Observable<any[]> {
  //   return of(EVENTS);
  // }
  getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>('/api/events')
      .pipe(
        catchError(this.handleError<IEvent[]>('getEvents', []))
      )
    // const subject = new Subject<IEvent[]>();
    // setTimeout(() => {subject.next(EVENTS); subject.complete(); },
    //   100);
    // return subject;
  }

  getEvent(id: number): Observable<IEvent> {
    return  this.http.get<IEvent>('/api/events/' + id)
      .pipe(
        catchError(this.handleError<IEvent>('getEvents'))
      )
    //return EVENTS.find(event => event.id === id);
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
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of (result as T);
    }
  }

  downloadPdfFile(url: string): Observable<any> {
    const httpOptions = {
      responseType: 'blob' as 'json',
    };
    return this.http.get(url, httpOptions);
  }

}

