import { Link } from "react-router-dom";

export const EmptyListContent = () => (
    <div className="text-center my-5 text-lg cursor-pointer">
        <p>Будильники пока не созданы</p>
        <Link to="/create">Добавить будильник</Link>
    </div>
);
