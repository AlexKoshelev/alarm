import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AlarmForm, addAlarm } from "@/modules/alarm";
import { Button } from "@/common/ui/button/button";

export const CreatePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const sevenOclock = 7 * 60;

  const [triggerTimeMinutes, setTriggerTimeMinutes] = useState(sevenOclock);
  const [selectedDaysOfWeek, setSelectedDaysOfWeek] = useState([
    new Date().getDay() + 1,
  ]);
  const [selectedSoundId, setSelectedSoundId] = useState("0");

  function handleSubmit() {
    dispatch(
      addAlarm({
        id: String(new Date().getTime()),
        daysOfWeek: selectedDaysOfWeek,
        enabled: true,
        triggerTimeMinutes,
        selectedSoundId,
      })
    ).then(() => navigate("/"));
  }

  return (
    <AlarmForm
      bottomContent={
        <>
          <Button type="danger" onClick={() => navigate("/")}>
            Отмена
          </Button>
          <Button onClick={handleSubmit}>Сохранить</Button>
        </>
      }
      triggerTimeMinutes={triggerTimeMinutes}
      setTriggerTimeMinutes={setTriggerTimeMinutes}
      selectedDaysOfWeek={selectedDaysOfWeek}
      setSelectedDaysOfWeek={setSelectedDaysOfWeek}
      selectedSoundId={selectedSoundId}
      setSelectedSoundId={setSelectedSoundId}
    />
  );
};
