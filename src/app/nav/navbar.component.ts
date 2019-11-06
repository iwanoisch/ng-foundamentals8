import { Component } from '@angular/core';
import {AuthService} from '../user/auth.service';
import {EventService, ISession} from '../events/shared';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavbarComponent {
  searchTerm: string ="";
  foundSessions: ISession[];

  constructor(private auth: AuthService, private eventService: EventService) {
  }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(
      sessions => {
        this.foundSessions = sessions;
        console.log(this.foundSessions)

      })
  }
}
