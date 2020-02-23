import { ADD_WORKER, DELETE_WORKER } from "../constants/actionTypes";

export const initialWorkerState = {
  workerList: []
};

export const workerReducer = (state = initialWorkerState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_WORKER: {
      return Object.assign({}, state, {
        workerList: payload
      });
    }
    case DELETE_WORKER: {
      return Object.assign({}, state, {
        workerList: payload
      });
    }
    default: {
      return state;
    }
  }
};
