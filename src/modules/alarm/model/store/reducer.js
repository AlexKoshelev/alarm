import {
  FETCH_ALARMS_REQUEST,
  FETCH_ALARMS_SUCCESS,
  FETCH_ALARMS_FAILURE,
  ADD_ALARM_REQUEST,
  ADD_ALARM_SUCCESS,
  ADD_ALARM_FAILURE,
  UPDATE_ALARM_REQUEST,
  UPDATE_ALARM_SUCCESS,
  UPDATE_ALARM_FAILURE,
  SET_CURRENTLY_PLAYING_ALARM,
  SORT_ALARMS,
} from "./action-types.js";
import { sortAlarmsByNextTrigger } from "@/modules/alarm/model/store/operations/sort-alarms-by-next-trigger.js";

const initialState = {
  alarms: [],
  currentlyPlayingAlarm: null,
  loading: false,
  error: null,
};

export const alarmReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALARMS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_ALARMS_SUCCESS:
      return {
        ...state,
        loading: false,
        alarms: action.payload,
      };
    case FETCH_ALARMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ADD_ALARM_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_ALARM_SUCCESS:
      return {
        ...state,
        loading: false,
        alarms: [...state.alarms, action.payload],
      };
    case ADD_ALARM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case UPDATE_ALARM_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UPDATE_ALARM_SUCCESS:
      return {
        ...state,
        loading: false,
        alarms: state.alarms.map((alarm) =>
          alarm.id === action.payload.id ? action.payload : alarm
        ),
      };
    case UPDATE_ALARM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case SET_CURRENTLY_PLAYING_ALARM:
      return {
        ...state,
        currentlyPlayingAlarm: action.payload,
      };

    case SORT_ALARMS:
      return {
        alarms: sortAlarmsByNextTrigger(state.alarms),
        ...state,
      };

    default:
      return state;
  }
};
