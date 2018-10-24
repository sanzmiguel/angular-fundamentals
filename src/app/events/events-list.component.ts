import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';

@Component({
  selector: 'events-list',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr>
      <div class="well">
        <div>Hello World</div>
      </div>
      <div class="row">
        <div class="col-md-5" *ngFor="let event of events">
          <events-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></events-thumbnail>
        </div>
      </div>
    </div>
  `
})
export class EventListComponent implements OnInit {

  events: any[];

  constructor(private eventService: EventService, private toastrService: ToastrService) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName) {
    this.toastrService.success(eventName);
  }
}
