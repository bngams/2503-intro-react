import { Route, Routes } from "react-router";
import { mainNavItems } from "./routes";

function AppRoutes() {
    return (
        <Routes>
            {mainNavItems.map((item, index) => (
                <Route key={index} path={item.path} element={<item.component />} />
            ))}
        </Routes>
    );
}
export default AppRoutes;