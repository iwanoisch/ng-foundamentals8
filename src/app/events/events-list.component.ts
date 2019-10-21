import {Component, Injectable, OnInit} from '@angular/core';
import {EventService} from './shared/event.service';
import {ToastrService} from '../common/toastr.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
 // selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})


export class EventsListComponent implements OnInit {
  events: any;

  constructor(private eventService: EventService,
              private toastr: ToastrService,
              private route: ActivatedRoute) {}
z
  ngOnInit() {
    // this.eventService.getEvents().subscribe(events => this.events = events);
    this.events = this.route.snapshot.data['events'];
    // this.events = EVENTS;
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }
}
