import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';

@Component({
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr>
      <div class="row">
        <div class="col-md-5" *ngFor="let event of events">
          <events-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></events-thumbnail>
        </div>
      </div>
    </div>
  `
})
export class EventListComponent implements OnInit {

  events: IEvent[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }
}
