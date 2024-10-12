import { createSelector } from 'reselect';
import { getNextAlarm } from "@/modules/alarm/model/store/operations/get-next-alarm.js";

export const selectAlarms = (state) => state.alarms.alarms;

export const selectNextAlarm = createSelector(
    [selectAlarms],
    getNextAlarm
);