import PropTypes from "prop-types";
import { DayOfWeekSelect } from "./day-of-weeks-select";
import { SoundSelect } from "./sound-select/sound-select";
import { TimeSelector } from "./time-selector/time-selector";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Button } from "@/common/ui/button/button";

const sevenOclock = 7 * 60;
const tomorrow = [new Date().getDay() + 1];
const firstSoundId = "0";

export const AlarmForm = ({ bottomContent, handleSubmit }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { alarms } = useSelector((state) => state.alarm);
  const currentAlarm = alarms.find((alarm) => alarm.id === id);

  const [triggerTimeMinutes, setTriggerTimeMinutes] = useState(
    currentAlarm ? currentAlarm.triggerTimeMinutes : sevenOclock
  );
  const [selectedDaysOfWeek, setSelectedDaysOfWeek] = useState(
    currentAlarm ? [...currentAlarm.daysOfWeek] : tomorrow
  );
  const [selectedSoundId, setSelectedSoundId] = useState(
    currentAlarm ? currentAlarm.selectedSoundId : firstSoundId
  );

  const handleConfirm = () => {
    handleSubmit(dispatch, {
      triggerTimeMinutes,
      selectedDaysOfWeek,
      selectedSoundId,
    });
  };

  return (
    <div className="ms w-96 mx-auto p-2 m-8">
      <section className="flex-wrap justify-center p-4">
        <TimeSelector
          triggerTimeMinutes={triggerTimeMinutes}
          setTriggerTimeMinutes={setTriggerTimeMinutes}
        />
        <DayOfWeekSelect
          selectedDays={selectedDaysOfWeek}
          setSelectedDays={setSelectedDaysOfWeek}
        />
        <SoundSelect
          selectedSoundId={selectedSoundId}
          setSelectedSoundId={setSelectedSoundId}
        />
        <div className="flex justify-around">
          {bottomContent} <Button onClick={handleConfirm}>Сохранить</Button>
        </div>
      </section>
    </div>
  );
};

AlarmForm.propTypes = {
  bottomContent: PropTypes.node.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
