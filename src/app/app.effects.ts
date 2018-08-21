import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { MeetingsEffects } from './store/meetings';

export const effects: any = [MeetingsEffects];
