import { CreatePage } from "../pages/create-page";
import { EditPage } from "../pages/edit-page";
import { MainPage } from "../pages/main-page";

export const routes = () => [
  { path: "", element: <MainPage /> },
  { path: "create", element: <CreatePage /> },
  { path: "edit/:id", element: <EditPage /> },
];
