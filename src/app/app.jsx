import { useRoutes } from "react-router-dom";
import { routes } from "../routes/routes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "./store/alarms/thunk";

export function App() {
  const element = useRoutes(routes());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <main className="bg-gray-900 min-h-screen flex justify-center text-gray-50">
      {element}
    </main>
  );
}
