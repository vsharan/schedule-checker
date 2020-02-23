import { combineReducers } from "redux";
import { workerReducer, initialWorkerState } from "./workerReducer";
import { workerScheduleReducer, initialScheduleState } from "./workerScheduleReducer";

export const initialState = {
  workerInfo: initialWorkerState,
  workerSchedule: initialScheduleState
};

export default combineReducers({
  worker: workerReducer,
  workerSchedule: workerScheduleReducer
});
