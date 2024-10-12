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
  DELETE_ALARM_REQUEST,
  DELETE_ALARM_SUCCESS,
  DELETE_ALARM_FAILURE, SET_CURRENTLY_PLAYING_ALARM, SORT_ALARMS,
} from './action-types.js';

export const fetchAlarmsRequest = () => ({
  type: FETCH_ALARMS_REQUEST,
});

export const fetchAlarmsSuccess = (alarms) => ({
  type: FETCH_ALARMS_SUCCESS,
  payload: alarms,
});

export const fetchAlarmsFailure = (error) => ({
  type: FETCH_ALARMS_FAILURE,
  payload: error,
});

export const addAlarmRequest = () => ({
  type: ADD_ALARM_REQUEST,
});

export const addAlarmSuccess = (alarm) => ({
  type: ADD_ALARM_SUCCESS,
  payload: alarm,
});

export const addAlarmFailure = (error) => ({
  type: ADD_ALARM_FAILURE,
  payload: error,
});

export const updateAlarmRequest = () => ({
  type: UPDATE_ALARM_REQUEST,
});

export const updateAlarmSuccess = (alarm) => ({
  type: UPDATE_ALARM_SUCCESS,
  payload: alarm,
});

export const updateAlarmFailure = (error) => ({
  type: UPDATE_ALARM_FAILURE,
  payload: error,
});

export const deleteAlarmRequest = () => ({
  type: DELETE_ALARM_REQUEST,
});

export const deleteAlarmSuccess = (id) => ({
  type: DELETE_ALARM_SUCCESS,
  payload: id,
});

export const deleteAlarmFailure = (error) => ({
  type: DELETE_ALARM_FAILURE,
  payload: error,
});

export const setCurrentlyPlayingAlarm = (alarm) => ({
  type: SET_CURRENTLY_PLAYING_ALARM,
  payload: alarm,
});

export const sortAlarms = () => ({
  type: SORT_ALARMS,
});

