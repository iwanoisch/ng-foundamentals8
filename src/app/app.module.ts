import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventsListResolver, CreateSessionComponent, SessionListComponent, AlphabeticPipe,
} from './events/index';
import {NavbarComponent} from './nav/navbar.component';
import {Toastr, TOASTR_TOKEN} from './common/toastr.service';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {Error404Component} from './errors/404.component';
import {AuthService} from './user/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CollapsibleWellComponent} from './common/collapsible-well.component';

let toastr: Toastr = window['toastr'];

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
    Error404Component,
    SessionListComponent,
    CollapsibleWellComponent,
    AlphabeticPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
      EventRouteActivator,
    { provide: TOASTR_TOKEN, useValue: toastr },
      EventsListResolver,
      AuthService,
      {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState}
    ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel ?');
  }
}
