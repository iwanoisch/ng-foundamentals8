import {Component, Injectable, OnInit} from '@angular/core';
import {EventService} from './shared/event.service';
import {ActivatedRoute} from '@angular/router';
import {IEvent} from './shared';

@Component({
  // tslint:disable-next-line:component-selector
 // selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})


export class EventsListComponent implements OnInit {
  events: IEvent[];

  constructor(private eventService: EventService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    // this.eventService.getEvents().subscribe(events => this.events = events);
    this.events = this.route.snapshot.data['events'];
    // this.events = EVENTS;
  }

}
