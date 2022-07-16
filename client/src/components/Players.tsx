import React from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { PlayerAPI } from "../global/PlayerAPI";
import { Info } from "./Info";

export const Players = (): JSX.Element => {
    const { data } = PlayerAPI.useFetchAllQuery();

    return (
        <React.Fragment>
            <header className="header">
                <Link to="/add">Add Player</Link>
            </header>
            {data?.map((player) => (
                <Info key={player.id} player={player} />
            ))}
        </React.Fragment>
    );
};


