import express from "express";
import {
  loginUser,
  logoutUser,
  signUpUser,
} from "../controllers/auth.controller.js";
const Router = express.Router();
Router.post("/login", loginUser);
Router.post("/logout", logoutUser);
Router.post("/signup", signUpUser);
export default Router;
