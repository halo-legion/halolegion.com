import { lazy } from "react";

const Home = lazy(() => import("./Home/Home"));
const Philosophy = lazy(() => import("./Philosophy/Philosophy"));
const Contact = lazy(() => import("./Contact/Contact"));
const Join = lazy(() => import("./Join/Join"));
const Legal = lazy(() => import("./Legal/Legal"));
const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
export { Home, Philosophy, Contact, Join, Legal, Dashboard };
