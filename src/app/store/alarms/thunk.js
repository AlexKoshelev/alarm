import {
  fetchAlarms,
  createAlarm,
  setLoading,
  setError,
  toggleStatus,
  sortByStatus,
  editAlarm,
  removeAlarm,
  sortByNextTigger,
} from "./actionCreators";

// получение всех будильников, сортировка по status
export const fetchData = () => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const response = await fetch("http://localhost:3000/alarms?_sort=status");
      const data = await response.json();
      dispatch(fetchAlarms(data));
      dispatch(sortByNextTigger());
    } catch (error) {
      dispatch(setError(error.toString()));
    }
  };
};

// добавление нового будильника, сортировка по статусу
export const addAlarm = (data) => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const response = await fetch("http://localhost:3000/alarms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data.newAlarm),
      });
      if (!response.ok) {
        throw new Error("Ошибка при добавлении будильника");
      }
      const r = await response.json();
      dispatch(createAlarm(r));
      dispatch(sortByStatus());
      dispatch(sortByNextTigger());

      data.nav("/");
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};

// переключение статуса будильника, сортировка списка будильников
export const toggleAlarmStatus = (data) => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const response = await fetch(`http://localhost:3000/alarms/${data.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: data.status }),
      });
      if (!response.ok) {
        throw new Error("Ошибка при изменении статуса будильника");
      }
      const r = await response.json();

      dispatch(toggleStatus(r));
      dispatch(sortByStatus());
      dispatch(sortByNextTigger());
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};

// редактирование будильника, сортировка списка будильников
export const editCurentAlarm = (data) => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const response = await fetch(
        `http://localhost:3000/alarms/${data.editedAlarm.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data.editedAlarm),
        }
      );
      if (!response.ok) {
        throw new Error("Ошибка при редактировании будильника");
      }
      const r = await response.json();

      dispatch(editAlarm(r));
      dispatch(sortByStatus());
      dispatch(sortByNextTigger());
      data.nav("/");
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};

// редактирование будильника, сортировка списка будильников
export const removeCurentAlarm = (data) => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const response = await fetch(`http://localhost:3000/alarms/${data.id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Ошибка при удалении будильника");
      }
      const r = await response.json();

      dispatch(removeAlarm(r.id));
      dispatch(sortByStatus());
      dispatch(sortByNextTigger());
      data.nav("/");
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};
