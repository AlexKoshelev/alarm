import { memo } from "react";
import { Wrapper } from "../ui/wrapper";
import { CustomSelect } from "./custom-select";
import { MultiSelect } from "./multi-select";
import { TimeSelector } from "./time-selector";
import PropTypes from "prop-types";
export const AlarmForm = memo(
  ({
    children,
    time,
    setTime,
    selectedDays,
    setSelectedDays,
    selectedSound,
    setSelectedSound,
  }) => {
    return (
      <Wrapper>
        <section className="flex-wrap justify-center p-4">
          <TimeSelector time={time} setTime={setTime} />
          <MultiSelect
            selectedDays={selectedDays}
            setSelectedDays={setSelectedDays}
          />
          <CustomSelect
            selectedSound={selectedSound}
            setSelectedSound={setSelectedSound}
          />
          <div className="flex justify-around">{children}</div>
        </section>
      </Wrapper>
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
  selectedSound: PropTypes.number.isRequired,
  setSelectedSound: PropTypes.func.isRequired,
};
