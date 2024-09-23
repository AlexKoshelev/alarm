import * as a from "./actions";

export const setLoading = () => ({
  type: a.LOADING,
});

export const fetchAlarms = (data) => ({
  type: a.FETCH_ALARMS,
  payload: data,
});

export const setError = (error) => ({
  type: a.ERROR,
  payload: error,
});

export const createAlarm = (newAlarm) => {
  return {
    type: a.CREATE_ALARM,
    payload: newAlarm,
  };
};
export const toggleStatus = (updatedAlarm) => {
  return {
    type: a.TOGGLE_ALARM_STATUS,
    payload: updatedAlarm,
  };
};

export const sortByStatus = () => ({
  type: a.SORT_ALARMS_BY_STATUS,
});

export const sortByNextTigger = () => ({
  type: a.SORT_ALARMS_BY_NEXT_TRIGGER,
});

export const getCurrentAlarm = (id) => ({
  type: a.GET_ALARM_BY_ID,
  payload: id,
});

export const editAlarm = (editedAlarm) => {
  return {
    type: a.EDIT_ALARM,
    payload: editedAlarm,
  };
};

export const removeAlarm = (id) => {
  return {
    type: a.REMOVE_ALARM,
    payload: id,
  };
};
