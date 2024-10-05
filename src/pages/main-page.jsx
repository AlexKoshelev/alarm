import { AddAlarmBtn } from "../shared/components/add-alarm-btn";
import { ListOfAlarms } from "../shared/ui/list-of-alarms";
import { NearestAlarmClock } from "../shared/components/nearest-alarm-clock/nearest-alarm-clock";

import { Wrapper } from "../shared/ui/wrapper";
import { memo } from "react";

export const MainPage = memo(() => {
  return (
    <Wrapper>
      <section className="flex-col justify-center mb-4">
        <NearestAlarmClock />
        <AddAlarmBtn />
      </section>
      <ListOfAlarms />
    </Wrapper>
  );
});
MainPage.displayName = "MainPage";
