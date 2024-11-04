import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectNextAlarm } from "./store/selectors.js";
import { setCurrentlyPlayingAlarm } from "./store/action-creators.js";

export const useAlarmPlayingTrigger = () => {
    const dispatch = useDispatch();
    const nextAlarm = useSelector(selectNextAlarm);
    const currentlyPlayingAlarm = useSelector(
        (state) => state.alarm.currentlyPlayingAlarm,
    );

    useEffect(() => {
        const checkAlarm = () => {
            const now = new Date();
            if (!nextAlarm || currentlyPlayingAlarm) return;

            const currentMinutes = now.getHours() * 60 + now.getMinutes();
            const currentDay = now.getDay();

            if (
                nextAlarm.triggerTimeMinutes === currentMinutes &&
                nextAlarm.daysOfWeek.includes(currentDay)
            ) {
                dispatch(setCurrentlyPlayingAlarm(nextAlarm));
            }
        };
        const now = new Date();
        const delay = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

        let intervalId;

        setTimeout(() => {
            checkAlarm();
            intervalId = setInterval(checkAlarm, 60000);
        }, delay);

        return () => clearInterval(intervalId);
    }, [nextAlarm, currentlyPlayingAlarm, dispatch]);
};
