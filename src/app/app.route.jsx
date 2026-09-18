import { createBrowserRouter } from "react-router";
import Landing from "../features/landing/Landing.jsx";
import Motion from "../features/motion/Motion.jsx";

const routes = createBrowserRouter([
    {
        path : "/*",
        element : <Landing />
    },
    {
        path : "/motion",
        element : <Motion />
    }
]);

export default routes;