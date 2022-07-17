import React from "react";
import { useNavigate } from "react-router-dom";
import { PlayerAPI } from "../global/PlayerAPI";

export const Add = (): JSX.Element => {
    const navigate = useNavigate();
    const [addPlayer] = PlayerAPI.useAddMutation();
    const [player, setPlayer] = React.useState({
        id: "", first: "", last: "", 
        age: 0, info: ""
    });

    const handleChange = 
    (event: React.ChangeEvent<HTMLInputElement>) => {
        setPlayer({...player, 
            [event.target.name]: event.target.value});
    };

    const handleSubmit = 
    async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await addPlayer(player);
        setPlayer({
            id: "", first: "", last: "", age: 0, info: ""
        });
        navigate("/");
    };

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <label htmlFor="first">First</label>
                <input 
                    type="text" 
                    name="first"
                    placeholder="First"
                    value={player.first}
                    onChange={handleChange}
                />
                <label htmlFor="last">Last</label>
                <input 
                    type="text" 
                    name="last"
                    placeholder="Last"
                    value={player.last}
                    onChange={handleChange}
                />
                <label htmlFor="age">Age</label>
                <input 
                    type="number" 
                    name="age"
                    placeholder="Age"
                    value={player.age}
                    onChange={handleChange}
                />
                <label htmlFor="info">Info</label>
                <input 
                    type="text" 
                    name="info"
                    placeholder="Info"
                    value={player.info}
                    onChange={handleChange}
                />
                <button type="submit">Add Player</button>
            </form>
        </React.Fragment>
    );
};


