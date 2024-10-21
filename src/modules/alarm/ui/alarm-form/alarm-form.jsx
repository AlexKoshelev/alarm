import PropTypes from "prop-types";
import { DayOfWeekSelect } from "./day-of-weeks-select";
import { SoundSelect } from "./sound-select/sound-select";
import { TimeSelector } from "./time-selector/time-selector";

export const AlarmForm = ({
  bottomContent,
  triggerTimeMinutes,
  setTriggerTimeMinutes,
  selectedDaysOfWeek,
  setSelectedDaysOfWeek,
  selectedSoundId,
  setSelectedSoundId,
}) => (
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
      <div className="flex justify-around">{bottomContent}</div>
    </section>
  </div>
);

AlarmForm.propTypes = {
  bottomContent: PropTypes.node.isRequired,
  triggerTimeMinutes: PropTypes.number.isRequired,
  setTriggerTimeMinutes: PropTypes.func.isRequired,
  selectedDaysOfWeek: PropTypes.array.isRequired,
  setSelectedDaysOfWeek: PropTypes.func.isRequired,
  selectedSoundId: PropTypes.string.isRequired,
  setSelectedSoundId: PropTypes.func.isRequired,
};
