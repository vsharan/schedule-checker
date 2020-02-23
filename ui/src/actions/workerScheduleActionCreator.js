import * as actionTypes from "../constants/actionTypes";

export const addWorkerSchedule = payload => ({
  type: actionTypes.ADD_WORKER_SCHEDULE,
  payload
});

export const deleteWorkerSchedule = payload => ({
  type: actionTypes.DELETE_WORKER_SCHEDULE,
  payload
});
