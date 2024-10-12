import { useSelector } from "react-redux";
import { selectAlarms } from "@/modules/alarm/model/store/selectors.js";
import { AlarmListItem } from "./alarm-list-item.jsx";
import { EmptyListContent } from "./empty-list-content.jsx";

export const AlarmList = () => {
    const { alarms } = useSelector(selectAlarms);

    if (alarms.length === 0) {
        return <EmptyListContent />;
    }

    return (
        <section>
            {alarms.map((alarm) => (
                <AlarmListItem key={alarm.id} data={alarm} />
            ))}
        </section>
    );
};
