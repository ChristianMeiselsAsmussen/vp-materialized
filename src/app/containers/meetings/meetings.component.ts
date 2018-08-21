import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { getMeetings } from '../../store';
import { MeetingState, LoadMeetings, MeetingsEffects } from '../../store/meetings';
import { Meeting } from '../../models/meeting.model';


@Component({
  selector: 'app-meetings',
  template: `
    <div>
      <p *ngIf="!((meetings | async)?.length)">No meetings right now - trying to load</p>
      <div *ngFor="let meeting of (meetings | async)">{{meeting.title}}</div>
    </div>
  `,
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit {
  meetings: Observable<Meeting[]>;
  constructor(private store: Store<MeetingState>) { }

  ngOnInit() {
    this.meetings = this.store.select<any>(getMeetings);
    setTimeout(() => {
      this.store.dispatch(new LoadMeetings());
    }, 3000);
  }

}
