import { Component } from '@angular/core';
import {AuthService} from '../user/auth.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavbarComponent {
  constructor(private auth: AuthService) {
  }

}
