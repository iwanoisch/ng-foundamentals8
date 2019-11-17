import {Component, OnInit} from '@angular/core';
import {EventService} from './shared/event.service';
import {ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {IEvent} from './shared';
import { saveAs } from 'file-saver';

@Component({
  // tslint:disable-next-line:component-selector
 // selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})


export class EventsListComponent implements OnInit {
  events: IEvent[];
  blob: Blob;

  public hrefDownloadPdf: string;

  constructor(private eventService: EventService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    // this.eventService.getEvents().subscribe(events => this.events = events);
    // Download Button example
    this.events = this.route.snapshot.data['events'];

    this.hrefDownloadPdf = 'http://localhost:4200/assets/pdf/vendoauto.pdf';
    // http://localhost:4200/assets/pdf/vendoauto.pdf
    // this.events = EVENTS;
  }

  downloadPdf(url:string)
  {
    this.eventService.downloadPdfFile(url).subscribe(
      data => {
        this.blob = new Blob([data], {type: 'application/pdf'});
        saveAs(this.blob, 'vendoauto.pdf')
      }
    )
    //this.blob = new Blob ([data], {})
  }
}
