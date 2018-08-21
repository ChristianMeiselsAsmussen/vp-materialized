import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { InitialState } from '@ngrx/store/src/models';

import { switchMap, map } from 'rxjs/operators';

import { Meeting } from '../../models/meeting.model';
import { MeetingService } from '../../services/meeting.service'; // async

// Action Types
export const LOAD_MEETINGS = '[Meetings] Load Meetings';
export const LOAD_MEETINGS_SUCCESS = '[Meetings] Load Meetings Success';

// Action creators
export class LoadMeetings implements Action {
  readonly type = LOAD_MEETINGS;
}

export class LoadMeetingsSuccess implements Action {
  readonly type = LOAD_MEETINGS_SUCCESS;
  constructor(
    public payload: Meeting[]
  ) {}
}

// Action Creator Types
export type MeetingsAction = LoadMeetings | LoadMeetingsSuccess;


export interface MeetingState {
  data: Meeting[];
  loading: boolean;
  loaded: boolean;
}

export const initialState: MeetingState = {
  data: [],
  loading: false,
  loaded: false
};

// Reducer
export function reducer(state = initialState, action: MeetingsAction): MeetingState {
  const { type, payload } = action;
  switch (type) {
    case LOAD_MEETINGS:
      return {
        ...state,
        loading: true,
      };
    case LOAD_MEETINGS_SUCCESS:

      return {
        ...state,
        data: payload,
        loading: false,
        loaded: true
      };
  }
  return state;
}

// Selectors
export const getMeetings = (state: MeetingState) => state.data;
export const getMeetingsLoading = (state: MeetingState) => state.loading;
export const getMeetingsLoaded = (state: MeetingState) => state.loaded;

// Effects
@Injectable()
export class MeetingsEffects {
  constructor(
    private actions: Actions,
    private meetingService: MeetingService
  ) {}

  @Effect()
  loadMeetingsStream = this.actions.ofType(LOAD_MEETINGS)
    .pipe(
      switchMap(() => {
        return this.meetingService.getMeetings().pipe(
          map(meetings => new LoadMeetingsSuccess(meetings))
        );
      })
    );
}
