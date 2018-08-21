import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { Meeting } from '../models/meeting.model';

@Injectable()
export class MeetingService {
  constructor(private http: HttpClient) { }

  getMeetings(): Observable<Meeting[]> {
    return this.http
      .get<Meeting[]>(`http://localhost:3000/meetings`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
