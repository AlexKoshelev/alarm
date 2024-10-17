import { Button } from "@/common/ui/button/button";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { memo, useState } from "react";
import { deleteAlarm, updateAlarm } from "@/modules/alarm";
import { AlarmForm } from "@/modules/alarm";

export const EditPage = memo(() => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { alarms } = useSelector((state) => state.alarm);
  const currentAlarm = alarms.find((alarm) => alarm.id === id);

  const [triggerTimeMinutes, setTriggerTimeMinutes] = useState(
    currentAlarm ? currentAlarm.triggerTimeMinutes : 0
  );
  const [selectedDaysOfWeek, setSelectedDaysOfWeek] = useState(
    currentAlarm ? [...currentAlarm.daysOfWeek] : []
  );
  const [selectedSoundId, setSelectedSoundId] = useState(
    currentAlarm ? currentAlarm.selectedSoundId : null
  );

  function handleSubmit() {
    if (currentAlarm) {
      dispatch(
        updateAlarm({
          ...currentAlarm,
          triggerTimeMinutes,
          daysOfWeek: selectedDaysOfWeek,
          selectedSoundId,
        })
      ).then(() => navigate("/"));
    }
  }

  function handleRemove() {
    if (id) {
      dispatch(deleteAlarm(id)).then(() => navigate("/"));
    }
  }
  console.log(currentAlarm);
  return (
    <>
      {currentAlarm && (
        <AlarmForm
          bottomContent={
            <>
              <Button type="danger" onClick={() => handleRemove(id)}>
                Удалить
              </Button>
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
      )}
    </>
  );
});
EditPage.displayName = "EditPage";
