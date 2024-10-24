import { useNavigate } from "react-router-dom";
import { AlarmForm, addAlarm } from "@/modules/alarm";
import { Button } from "@/common/ui/button";

export const CreatePage = () => {
  const navigate = useNavigate();

  function handleSubmit(dispatch, data) {
    dispatch(
      addAlarm({
        ...data,
        id: String(new Date().getTime()),
        daysOfWeek: data.selectedDaysOfWeek,
        enabled: true,
      })
    ).then(() => navigate("/"));
  }

  return (
    <AlarmForm
      handleSubmit={handleSubmit}
      bottomContent={
        <>
          <Button type="danger" onClick={() => navigate("/")}>
            Отмена
          </Button>
        </>
      }
    />
  );
};
