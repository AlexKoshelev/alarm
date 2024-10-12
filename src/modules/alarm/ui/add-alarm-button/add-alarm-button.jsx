import { Link } from "react-router-dom";
import { PlusIcon } from "./plus-icon.jsx";

export const AddAlarmButton = () => {
  return (
    <div className="flex justify-end">
      <Link to="/create">
        <PlusIcon />
      </Link>
    </div>
  );
};
