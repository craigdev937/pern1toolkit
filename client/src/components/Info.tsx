import React from "react";
import { Link } from "react-router-dom";
import { IPlayer } from "../models/Interfaces";

type Props = {
    player: IPlayer
};

export const Info = ({player}: Props): JSX.Element => {    
    return (
        <React.Fragment>
            <h2>
                <Link to={`/edit/${player.id}`}
                    >{player.first}
                </Link>
            </h2>
            <main key={player.id}>
                <h3>{player.first} {player.last}</h3>
                <p>Age: {player.age}</p>
                <p>Info: {player.info}</p>
            </main>
        </React.Fragment>
    );
};


