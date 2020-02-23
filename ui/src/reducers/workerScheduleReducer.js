import {
  ADD_WORKER_SCHEDULE,
  DELETE_WORKER_SCHEDULE
} from "../constants/actionTypes";

export const initialScheduleState = {
  workerScheduleList: []
};

export const workerScheduleReducer = (state = initialScheduleState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_WORKER_SCHEDULE: {
      return Object.assign({}, state, {
        workerScheduleList: payload
      });
    }
    case DELETE_WORKER_SCHEDULE: {
      return Object.assign({}, state, {
        workerScheduleList: payload
      });
    }
    default: {
      return state;
    }
  }
};
