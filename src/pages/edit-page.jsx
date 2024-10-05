import { CustomButton } from "../shared/components/custom-button";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { memo, useEffect, useState } from "react";
import { getCurrentAlarm } from "../app/store/alarms/actionCreators";
import {
  editCurrentAlarm,
  removeCurrentAlarm,
} from "../app/store/alarms/thunk";
import { AlarmForm } from "../shared/components/alarm-form";

export const EditPage = memo(() => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { alarms } = useSelector((state) => state.alarms);

  useEffect(() => {
    dispatch(getCurrentAlarm(id));
  }, [id, dispatch, alarms]);
  const { currentAlarm } = useSelector((state) => state.alarms);

  const [time, setTime] = useState({
    m: "",
    h: "",
  });

  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedSound, setSelectedSound] = useState(1);

  useEffect(() => {
    if (currentAlarm === undefined) return;
    setTime({ m: currentAlarm.time.m, h: currentAlarm.time.h });
    setSelectedDays(currentAlarm.selectedDays);
    setSelectedSound(currentAlarm.selectedSound);
  }, [id, currentAlarm]);

  function handleSubmit() {
    if (currentAlarm !== undefined)
      dispatch(
        editCurrentAlarm({
          editedAlarm: {
            ...currentAlarm,
            time,
            selectedDays,
            selectedSound,
          },
          nav: navigate,
        })
      );
  }
  function handleRemove() {
    if (id) {
      dispatch(removeCurrentAlarm({ id, nav: navigate }));
    }
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
        textContent="Удалить"
        hoverType="red"
        handleClick={() => handleRemove()}
      />
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
EditPage.displayName = "EditPage";
