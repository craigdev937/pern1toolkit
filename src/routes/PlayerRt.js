import express from "express";
import { IndexHome } from "../controllers/PlayerCon.js";

export const PlayerRt = express.Router();
    PlayerRt.get("/", IndexHome);


