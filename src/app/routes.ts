import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  // EventRouteActivator,
  EventsListResolver, CreateSessionComponent, EventResolver
} from './events/index';
import {Error404Component} from './errors/404.component';

export const appRoutes = [
  {path: 'events/new', component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent']},

  {path: 'events', component: EventsListComponent,
    resolve: {events: EventsListResolver}
    },

  {path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventResolver}
    // canActivate: [EventRouteActivator]
  },
  {path: 'events/session/new', component: CreateSessionComponent},

  {path: '404', component: Error404Component},
  {path: '', redirectTo: '/events', pathMatch: 'full'},
  {path: 'user', loadChildren: './user/user.module#UserModule'}

];
