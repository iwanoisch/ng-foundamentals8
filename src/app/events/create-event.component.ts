import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';



@Component({
  // tslint:disable-next-line:component-selector
  selector: 'create-event-details',
  templateUrl: './create-event-details.component.html',
  styleUrls: ['./create-event-details.component.css']
})


export class CreateEventComponent implements OnInit {

  event: any;

  constructor(private router: Router) {}
  isDirty = true;
  ngOnInit() {
  }
  cancel() {
    this.router.navigate(['/events']);
  }
}
