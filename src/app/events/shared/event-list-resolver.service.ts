import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {map} from 'rxjs/operators';
import {EventService} from './event.service';
import {Observable} from 'rxjs';


// @ts-ignore
@Injectable
export class EventListResolver implements Resolve<any> {
  constructor(private eventService: EventService) {}
  resolve() {
    return this.eventService.getEvents().pipe(map(events => events));
  }


}
