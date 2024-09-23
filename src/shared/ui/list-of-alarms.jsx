import { useSelector } from "react-redux";

import { memo } from "react";
import { ItemAlarm } from "../components/item-alarm";
import { EmptyAlarmList } from "../components/empty-alarm-list";

export const ListOfAlarms = memo(() => {
  const { alarms } = useSelector((state) => state.alarms);

  if (alarms.length === 0) {
    return <EmptyAlarmList />;
  }

  return (
    <section>
      {alarms.map((alarm) => (
        <ItemAlarm key={alarm.id} {...alarm} />
      ))}
    </section>
  );
});

ListOfAlarms.displayName = "ListOfAlarms";
