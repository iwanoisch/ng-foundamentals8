import {Component, OnInit} from '@angular/core';
import {EventService} from '../shared/event.service';
import {ActivatedRoute, Params} from '@angular/router';
import {IEvent, ISession} from '../shared';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})


export class EventDetailsComponent implements OnInit {

  event: IEvent;
  addMode: boolean;
  filterBy = 'all';
  sortBy: string = 'votes';

  constructor(private eventService: EventService, private route: ActivatedRoute) {}

  ngOnInit() {
    // Inserisco questo altrimeti quando clicco sullo search nella modale vengo reindirizzato solo al primo click
    this.route.params.forEach((params: Params) => {
      this.event = this.eventService.getEvent(+params['id']);
      this.addMode = false
    });

    // this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    // this.eventService.getEvent(1).subscribe(events => this.events = events);
  }

  addSession() {
     this.addMode = true
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map( s => s.id));
    session.id = nextId +1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }
  cancelAddSession() {
    this.addMode = false
  }


}
