import { createReducer, on, ReducerTypes, REDUCER_FACTORY } from "@ngrx/store";
import { Action } from "rxjs/internal/scheduler/Action";
import { customInputAdd, customInputReduce, decrement, increment, reset } from "./counter.actions";
import { initialState } from "./counter.state";

const _counterReducer = createReducer(initialState,
    on(increment, state => {
        return {
            ...state,
            counter: state.counter + 1
        }
    }),
    on(decrement, state => {
        return {
            ...state,
            counter: state.counter - 1
        }
    }),
    on(reset, state => {
        return {
            ...state,
            counter: 0
        }
    }),
    on(customInputAdd, (state, action) => {
        return {
            ...state,
            counter: state.counter + action.addValue
        }
    }),
    on(customInputReduce, (state, action) => {
        console.log(action)
        return {
            ...state,
            counter: state.counter - action.reduceValue
        }
    })
);

export function counterReducer(state, action) {
    return _counterReducer(state, action);
} 