import { Component, Input } from '@angular/core';
import { ISession } from '../shared';

@Component({
  selector: 'events-session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent {
  @Input() sessions: ISession[];
}
