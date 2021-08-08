import { Action, createReducer, on } from '@ngrx/store';
import * as FrogActions from './frog.action';
import Frog from './frog.model';
import FrogState, { initializeState } from './frog.state';

const initialState = initializeState();

const reducer = createReducer(initialState,
  on(FrogActions.GetFrogAction, state => state),
  on(FrogActions.CreateFrogAction, (state: FrogState, frog: Frog) => {
    return { ...state, frogs: [...state.frogs, frog], frogError: null };
  }),
  on(FrogActions.SuccessGetFrogAction, (state: FrogState, { payload }) => {
    return { ...state, frogs: payload, frogError: null };
  }),
  on(FrogActions.SuccessCreateFrogAction, (state: FrogState, { payload }) => {
    return { ...state, frogs: [...state.frogs, payload], frogError: null };
  }),
  on(FrogActions.ErrorFrogAction, (state: FrogState, error: Error) => {
    // remove below line and use different telemetry logging
    console.error(error);
    return { ...state, frogError: error };
  })
);

export function FrogReducer(
  state: FrogState | undefined,
  action: Action
): FrogState {
  return reducer(state, action);
}
