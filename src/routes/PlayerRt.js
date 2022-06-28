import express from "express";
import { PLAYER } from "../controllers/PlayerCon.js";

export const PlayerRt = express.Router();
    PlayerRt.post("/", PLAYER.Create);
    PlayerRt.get("/", PLAYER.FetchAll);


