import {Component, Input, OnChanges, Pipe, PipeTransform} from '@angular/core';
import {ISession} from '../shared';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges{
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  visibleSessions: ISession[] = [];

  ngOnChanges() {
    if(this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name' ? this.visibleSessions.sort(this.sortByNameAsc) : this.visibleSessions.sort(this.sortByVoteDesc);
    }
  }

  filterSessions(filter) {
    if(filter ==='all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() === filter;
      })
    }
  }

  sortByNameAsc(s1: ISession, s2:ISession) {
    if (s1.name > s2.name) return 1;
    else if (s1.name === s2.name) return 0;
    else return -1;
  }

  sortByVoteDesc(s1: ISession, s2:ISession) {
    return s2.voters.length - s1.voters.length;
  }

}

@Pipe({
  name: 'alphabeticPipe'
})

export class AlphabeticPipe implements PipeTransform {
  transform(visibleSessions: ISession[]) {
    visibleSessions.sort((a: ISession, b: ISession) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
    return visibleSessions;
  }
}
