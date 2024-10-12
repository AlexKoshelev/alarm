import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AlarmForm, addAlarm } from "@/modules/alarm";
import { Button } from "@/common/ui/button";

export const CreatePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [triggerTimeMinutes, setTriggerTimeMinutes] = useState(0);
  const [selectedDaysOfWeek, setSelectedDaysOfWeek] = useState([new Date().getDay()]);
  const [selectedSoundId, setSelectedSoundId] = useState(null);

  function handleSubmit() {
    dispatch(
      addAlarm({
        newAlarm: {
          // данные
        },
      }).then(() => navigate('/'))
    );
  }

  return (
    <AlarmForm
      bottomContent={
        <>
          <Button hoverType="danger" onClick={() => navigate("/")}>Отмена</Button>
          <Button onCLick={handleSubmit}>Сохранить</Button>
        </>
      }
      triggerTimeMinutes={triggerTimeMinutes}
      selectedDaysOfWeek={selectedDaysOfWeek}
      selectedSoundId={selectedSoundId}
    />
  );
}

