import { CustomButton } from "../shared/components/custom-button";
import { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addAlarm } from "../app/store/alarms/thunk";
import { AlarmForm } from "../shared/components/alarm-form";

export const CreatePage = memo(() => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [time, setTime] = useState({ m: "00", h: "07" });
  const [selectedDays, setSelectedDays] = useState([new Date().getDay() + 1]);
  const [selectedSound, setSelectedSound] = useState(1);

  function handleSubmit() {
    dispatch(
      addAlarm({
        newAlarm: {
          id: String(new Date().getTime()),
          time,
          selectedDays,
          selectedSound,
          status: true,
        },
        nav: navigate,
      })
    );
  }

  return (
    <AlarmForm
      time={time}
      setTime={setTime}
      selectedDays={selectedDays}
      setSelectedDays={setSelectedDays}
      selectedSound={selectedSound}
      setSelectedSound={setSelectedSound}
    >
      <CustomButton
        textContent="Отмена"
        hoverType="red"
        handleClick={() => navigate("/")}
      />
      <CustomButton
        textContent="Сохранить"
        handleClick={() => handleSubmit()}
      />
    </AlarmForm>
  );
});

CreatePage.displayName = "CreatePage";
