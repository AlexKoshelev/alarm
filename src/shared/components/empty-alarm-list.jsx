import { useNavigate } from "react-router-dom";

export const EmptyAlarmList = () => {
  const navigate = useNavigate();
  return (
    <div
      className="text-center my-5 text-lg cursor-pointer"
      onClick={() => navigate("/create")}
    >
      <p>Будильники пока не созданы</p>
      <p>Добавить будильник</p>
    </div>
  );
};
