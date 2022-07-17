import React from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { PlayerAPI } from "../global/PlayerAPI";
import { Info } from "./Info";

export const Players = (): JSX.Element => {
    const { error, isLoading, data } = 
        PlayerAPI.useFetchAllQuery();

    React.useEffect(() => {
        if (error) toast.error("Something went wrong!");
    }, [error]);

    if (isLoading) return <h1>Loading...</h1>

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


