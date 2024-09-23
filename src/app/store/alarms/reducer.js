import { sortAlarmsByNextTrigger } from "../../../shared/utils/sort-alarms-by-next-trigger";
import * as a from "./actions";

const initialState = {
  alarms: [],
  loading: true,
  error: null,
  currentAlarm: undefined,
};

export const alarmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case a.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case a.FETCH_ALARMS:
      return {
        ...state,
        loading: false,
        alarms: action.payload,
      };

    case a.CREATE_ALARM:
      return {
        alarms: [...state.alarms, action.payload],
        loading: false,
        error: null,
      };
    case a.TOGGLE_ALARM_STATUS:
      return {
        alarms: [
          ...state.alarms.map((alarm) =>
            alarm.id === action.payload.id
              ? { ...alarm, status: !alarm.status }
              : alarm
          ),
        ],
        loading: false,
        error: null,
      };
    case a.SORT_ALARMS_BY_STATUS:
      return {
        ...state,
        alarms: state.alarms.sort((a, b) => {
          if (a.status < b.status) return 1;
          if (a.status > b.status) return -1;
          return 0;
        }),
      };
    case a.SORT_ALARMS_BY_NEXT_TRIGGER:
      return {
        ...state,
        alarms: sortAlarmsByNextTrigger(state.alarms),
      };
    case a.GET_ALARM_BY_ID:
      return {
        ...state,
        currentAlarm: state.alarms.find((alarm) => alarm.id === action.payload),
      };
    case a.REMOVE_ALARM:
      return {
        ...state,
        alarms: state.alarms.filter((alarm) => alarm.id !== action.payload),
        currentAlarm: undefined,
        loading: false,
      };
    case a.EDIT_ALARM:
      return {
        ...state,
        alarms: state.alarms.map((alarm) =>
          alarm.id === action.payload.id ? action.payload : alarm
        ),
        currentAlarm: undefined,
        loading: false,
      };
    default:
      return state;
  }
};
