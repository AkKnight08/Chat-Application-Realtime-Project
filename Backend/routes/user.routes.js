import express from "express";
import { getUsersForSidebar } from "../controllers/user.controller.js";
import protectRoutes from "../middleware/protectRoute.js";
const Router = express.Router();
Router.get("/", protectRoutes, getUsersForSidebar);
export default Router;
