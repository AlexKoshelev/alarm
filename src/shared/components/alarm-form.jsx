import { memo } from "react";

import { WeekDaysSelect } from "./week-days-select";
import { TimeSelector } from "./time-selector";
import PropTypes from "prop-types";
import { SoundSelect } from "./sound-select";
export const AlarmForm = memo(
  ({
    children,
    time,
    setTime,
    selectedDays,
    setSelectedDays,
    selectedSoundIndex,
    setSelectedSoundIndex,
  }) => {
    return (
      <div className="ms w-96 mx-auto p-2 m-8">
        <section className="flex-wrap justify-center p-4">
          <TimeSelector time={time} setTime={setTime} />
          <WeekDaysSelect
            selectedDays={selectedDays}
            setSelectedDays={setSelectedDays}
          />
          <SoundSelect
            selectedSoundIndex={selectedSoundIndex}
            setSelectedSoundIndex={setSelectedSoundIndex}
          />
          <div className="flex justify-around">{children}</div>
        </section>
      </div>
    );
  }
);
AlarmForm.displayName = "AlarmForm";

AlarmForm.propTypes = {
  children: PropTypes.node.isRequired,
  time: PropTypes.shape({
    h: PropTypes.string.isRequired,
    m: PropTypes.string.isRequired,
  }).isRequired,
  setTime: PropTypes.func.isRequired,
  selectedDays: PropTypes.array.isRequired,
  setSelectedDays: PropTypes.func.isRequired,
  selectedSoundIndex: PropTypes.number.isRequired,
  setSelectedSoundIndex: PropTypes.func.isRequired,
};
