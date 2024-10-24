import { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { routes } from "./routes.jsx";
import { fetchAlarms, AlarmTriggerModal, useAlarmPlayingTrigger } from "@/modules/alarm";

export function App() {
  const element = useRoutes(routes);
  const dispatch = useDispatch();

  useAlarmPlayingTrigger();

  useEffect(() => {
    dispatch(fetchAlarms());
  }, [dispatch]);

  return (
    <>
      <main className="bg-gray-900 min-h-screen flex justify-center text-gray-50">
        {element}
      </main>
      <AlarmTriggerModal />
    </>
  );
}
