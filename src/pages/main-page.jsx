import { NextAlarmCountdown, AddAlarmButton, AlarmList } from "@/modules/alarm";

export const MainPage = () => {
  return (
    <div className="ms w-96 mx-auto p-2 m-8">
      <section className="flex-col justify-center mb-4">
        <NextAlarmCountdown />
        <AddAlarmButton />
      </section>
      <AlarmList />
    </div>
  );
};
