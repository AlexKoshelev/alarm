import { useNavigate } from "react-router-dom";
import { PluseIcon } from "../icons/pluse";
import { memo } from "react";

export const AddAlarmBtn = memo(() => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-end">
      <button onClick={() => navigate("create")}>
        <PluseIcon />
      </button>
    </div>
  );
});

AddAlarmBtn.displayName = "AddAlarmBtn";
