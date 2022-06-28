import { pool } from "../config/database.js";

class PlayerClass {
    Create = async (req, res, next) => {
        try {
            const { first, last, age, info } = req.body;
            const createQuery = `INSERT INTO players 
            (first, last, age, info)
            VALUES ($1, $2, $3, $4) RETURNING *`;
            const values = [first, last, age, info];
            const newPlayer = await pool.query(createQuery, values);
            res.json(newPlayer.rows[0]);
        } catch (error) {
            res.status(500).json({msg: error.message});
            next(error);
        }
    };

    FetchAll = async (req, res, next) => {
        try {
            const fetchAllQry = "SELECT * FROM players";
            const allPlayers = await pool.query(fetchAllQry);
            res.json(allPlayers.rows);
        } catch (error) {
            res.status(500).json({msg: error.message});
            next(error);
        }
    };
};

export const PLAYER = new PlayerClass();





