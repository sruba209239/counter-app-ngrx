import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from './counter.state';

const getCounterState = createFeatureSelector<CounterState>('counter');

export const getCount = createSelector(getCounterState, (data) => data.counter);
export const getText = createSelector(getCounterState, (data) => data.text);
