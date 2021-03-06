import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {EventService} from './shared';



@Component({
  // tslint:disable-next-line:component-selector
  selector: 'create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})


export class CreateEventComponent  {
  isDirty = true;


  constructor(private router: Router, private eventService: EventService) {}


  saveEvent(formValues) {
    // console.log(formValues);

    this.eventService.saveEvent(formValues);
    this.router.navigate(['/events']);
    //this.isDirty = false;
  }

  cancel() {
    console.log('cancel');
    this.router.navigate(['/events']);
  }
}
