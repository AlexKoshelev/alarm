import { CreatePage } from "../pages/create-page.jsx";
import { EditPage } from "../pages/edit-page.jsx";
import { MainPage } from "../pages/main-page.jsx";

export const routes = [
    { path: "", element: <MainPage /> },
    { path: "create", element: <CreatePage /> },
    { path: "edit/:id", element: <EditPage /> },
];
