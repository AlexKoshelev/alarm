import { Button } from "@/common/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteAlarm, updateAlarm } from "@/modules/alarm";
import { AlarmForm } from "@/modules/alarm";

export const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { alarms } = useSelector((state) => state.alarm);
  const currentAlarm = alarms.find((alarm) => alarm.id === id);

  function handleSubmit(dispatch, data) {
    if (currentAlarm) {
      dispatch(
        updateAlarm({
          ...currentAlarm,
          daysOfWeek: data.selectedDaysOfWeek,
          triggerTimeMinutes: data.triggerTimeMinutes,
          selectedSoundId: data.selectedSoundId,
        })
      ).then(() => navigate("/"));
    }
  }

  function handleRemove() {
    if (id) {
      dispatch(deleteAlarm(id)).then(() => navigate("/"));
    }
  }

  if (!currentAlarm) {
    return <div>Loading...</div>;
  }

  return (
    <AlarmForm
      handleSubmit={handleSubmit}
      bottomContent={
        <>
          <Button type="danger" onClick={() => handleRemove(id)}>
            Удалить
          </Button>
          <Button type="danger" onClick={() => navigate("/")}>
            Отмена
          </Button>
        </>
      }
    />
  );
};
