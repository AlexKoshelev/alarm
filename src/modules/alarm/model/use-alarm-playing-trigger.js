import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectNextAlarm } from "./store/selectors.js";
import { setCurrentlyPlayingAlarm } from "./store/action-creators.js";

export const useAlarmPlayingTrigger = () => {
  const dispatch = useDispatch();
  const nextAlarm = useSelector(selectNextAlarm);
  const currentlyPlayingAlarm = useSelector(
    (state) => state.alarm.currentlyPlayingAlarm
  );

  useEffect(() => {
    const checkAlarm = () => {
      if (!nextAlarm || currentlyPlayingAlarm) return;

      const now = new Date();
      const currentSeconds =
        (now.getHours() * 60 + now.getMinutes()) * 60 + now.getSeconds();
      const currentDay = now.getDay();
      const triggerTimeSeconds = nextAlarm.triggerTimeMinutes * 60;

      if (
        triggerTimeSeconds === currentSeconds &&
        nextAlarm.daysOfWeek.includes(currentDay)
      ) {
        dispatch(setCurrentlyPlayingAlarm(nextAlarm));
      }
    };

    const intervalId = setInterval(checkAlarm, 1000);

    return () => clearInterval(intervalId);
  }, [nextAlarm, currentlyPlayingAlarm, dispatch]);
};
