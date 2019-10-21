import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html'
})
export class EventThumbnailComponent {
  // Due modi di passatre informazioni input output e template variables

  // input
  @Input() event: any;


 // template variables
 //  someProperty: any = 'some value';
 //  logFoo() {
 //    console.log('foo');
 //  }
  // <event-thumbnail #thumb  [event]="event"></event-thumbnail>
  //   <h3>{{thumb.someProperty}}</h3>
  //   <button class="btn btn-primary" (click)="thumb.logFoo()" >Log me some foo</button>




}
