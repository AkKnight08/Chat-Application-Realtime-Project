import express from "express";
import { sendMessage ,getMessages } from "../controllers/message.controller.js";
import protectRoutes from "../middleware/protectRoute.js";
const Router = express.Router();
Router.get("/:id", protectRoutes, getMessages);
Router.post("/send/:id", protectRoutes, sendMessage);
export default Router;
