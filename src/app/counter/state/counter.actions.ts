import { createAction, props } from "@ngrx/store";

export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');

export const customInputAdd = createAction('customInputAdd', props<{ addValue: number }>());
export const customInputReduce = createAction('customInputReduce', props<{ reduceValue: number }>());