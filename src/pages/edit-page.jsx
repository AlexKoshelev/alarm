import { CustomButton } from "../shared/components/custom-button";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { memo, useEffect, useState } from "react";
import { getCurrentAlarm } from "../app/store/alarms/actionCreators";
import { editCurentAlarm, removeCurentAlarm } from "../app/store/alarms/thunk";
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
        editCurentAlarm({
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
      dispatch(removeCurentAlarm({ id, nav: navigate }));
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
/* <Wrapper>
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
        <div className="flex justify-around">
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
        </div>
      </section>
    </Wrapper> */
