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

    GetOne = async (req, res, next) => {
        try {
            const { id } = req.params;
            const getOneQry = `
                SELECT * FROM players
                WHERE id = $1
            `;
            const values = [id];
            const player = await pool.query(getOneQry, values);
            res.json(player.rows[0]);
        } catch (error) {
            res.status(500).json({msg: error.message});
            next(error);
        }
    };

    Update = async (req, res, next) => {
        try {
            const { id } = req.params;
            const { first, last, age, info } = req.body;
            const updateQry = `UPDATE players 
            SET first = $1, last = $2, age = $3, info = $4 
            WHERE id = $5 RETURNING *`;
            const values = [first, last, age, info, id];
            const updatePlayer = await pool.query(updateQry, values);
            res.status(200).json(updatePlayer.rows[0]);
        } catch (error) {
            res.status(500).json({msg: error.message});
            next(error);
        }
    };

    Delete = async (req, res, next) => {
        try {
            const { id } = req.params;
            const deleteQry = `
                DELETE FROM players 
                WHERE id = $1
            `;
            const values = [id];
            const deletePlayer = await pool.query(deleteQry, values);
            res.status(200).json(deletePlayer);
        } catch (error) {
            res.status(500).json({msg: error.message});
            next(error);
        }
    };
};

export const PLAYER = new PlayerClass();





