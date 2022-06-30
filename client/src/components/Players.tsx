import React from "react";
import { toast } from "react-toastify";
import { PlayerAPI } from "../global/PlayerAPI";

export const Players = (): JSX.Element => {
    const { data } = PlayerAPI.useFetchAllQuery();

    return (
        <React.Fragment>
            <h1>Players</h1>
            {data?.map((player) => (
                <main key={player.id}>
                    <p>{player.first} {player.last}</p>
                    <p>Age: {player.age}</p>
                    <p>Info: {player.info}</p>
                </main>
            ))}
        </React.Fragment>
    );
};


