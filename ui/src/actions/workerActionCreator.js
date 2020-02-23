import * as actionTypes from "../constants/actionTypes";

export const addWorker = payload => ({
  type: actionTypes.ADD_WORKER,
  payload
});

export const deleteWorker = payload => ({
  type: actionTypes.DELETE_WORKER,
  payload
});
