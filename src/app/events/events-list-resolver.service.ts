
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {map} from 'rxjs/operators';
import {EventService} from './shared/event.service';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';





@Injectable()
export class EventsListResolver implements Resolve<any> {
  constructor(private eventService: EventService) {}

resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
  console.log(route)
  console.log(state)
  return this.eventService.getEvents().pipe(
    map(events => events)
  );
  }

  // resolve(): Observable<any> {
  //   return this.eventService.getEvents().pipe(
  //     map(events => events)
  //   );
  // }


}
