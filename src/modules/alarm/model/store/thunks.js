import {
  fetchAlarmsRequest,
  fetchAlarmsSuccess,
  fetchAlarmsFailure,
  addAlarmRequest,
  addAlarmSuccess,
  addAlarmFailure,
  updateAlarmRequest,
  updateAlarmSuccess,
  updateAlarmFailure,
  deleteAlarmRequest,
  deleteAlarmSuccess,
  deleteAlarmFailure,
  sortAlarms,
} from "./action-creators.js";

const API_URL = "http://localhost:3000/alarms";

export const fetchAlarms = () => {
  return async (dispatch) => {
    dispatch(fetchAlarmsRequest());
    try {
      const response = await fetch(`${API_URL}?_sort=enabled`);
      const data = await response.json();

      dispatch(fetchAlarmsSuccess(data));
      dispatch(sortAlarms());
    } catch (error) {
      dispatch(fetchAlarmsFailure(error.message));
    }
  };
};

export const addAlarm = (newAlarm) => {
  return async (dispatch) => {
    dispatch(addAlarmRequest());

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAlarm),
      });

      const data = await response.json();
      dispatch(addAlarmSuccess(data));
      dispatch(sortAlarms());
    } catch (error) {
      dispatch(addAlarmFailure(error.message));
    }
  };
};

export const updateAlarm = (updatedAlarm) => {
  return async (dispatch) => {
    dispatch(updateAlarmRequest());
    try {
      const response = await fetch(`${API_URL}/${updatedAlarm.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedAlarm),
      });
      const data = await response.json();
      dispatch(updateAlarmSuccess(data));
      dispatch(sortAlarms());
    } catch (error) {
      dispatch(updateAlarmFailure(error.message));
    }
  };
};

export const deleteAlarm = (id) => {
  return async (dispatch) => {
    dispatch(deleteAlarmRequest());
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        dispatch(deleteAlarmSuccess(id));
        dispatch(sortAlarms());
      }
    } catch (error) {
      dispatch(deleteAlarmFailure(error.message));
    }
  };
};