import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as meetingsSlice from './meetings';

export interface State {
  meetings: meetingsSlice.MeetingState;
}

export const reducers: ActionReducerMap<State> = {
  meetings: meetingsSlice.reducer
};

export const getMeetingState = createFeatureSelector<meetingsSlice.MeetingState>('meetings');
export const getMeetings = createSelector(getMeetingState, meetingsSlice.getMeetings);

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
