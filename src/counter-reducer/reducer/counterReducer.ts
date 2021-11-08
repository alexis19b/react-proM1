import { CounterAction } from "../actions/actions";
import { CounterState } from "../interfaces/interfaceCouter";

export const counterReducer = (
    state: CounterState,
    action: CounterAction
  ): CounterState => {
    switch (action.type) {
      case "reset":
        return {
          counter: 0,
          previous: 0,
          changes: 0,
        };
      case "increaseBy":
        return {
          ...state,
          counter: state.counter + action.payload.value,
          changes: state.changes + 1,
          previous: state.counter,
        };
  
      default:
        return state;
    }
  };
  