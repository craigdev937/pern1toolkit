import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PlayerAPI } from "../global/PlayerAPI";

export const Edit = (): JSX.Element => {
    const navigate = useNavigate();
    let params = useParams();
    const playerID = params.id;
    const [player, setPlayer] = React.useState({
        id: playerID, first: "", last: "", 
        age: 0, info: ""
    });

    const { data: playerData, 
        isSuccess: playerDataReady } = 
            PlayerAPI.useGetOneQuery(playerID!);

    const [deletePlayer, { 
        isLoading: isDeleting, isSuccess: isDeleted 
    }] = PlayerAPI.useDeleteMutation();

    const [editPlayer, {
        isLoading: isUpdating, isSuccess: isSaved
    }] = PlayerAPI.useUpdateMutation();

    React.useEffect(() => {
        if (playerDataReady) {
            setPlayer(playerData);
        }
    }, [playerData, playerDataReady]);

    function goBack(time: number) {
        setTimeout(() => {
            navigate("/");
        }, time);
    };

    const removePlayer = () => {
        deletePlayer(playerID!);
        goBack(700);
    };

    const handleChange = 
    (event: React.ChangeEvent<HTMLInputElement>) => {
        setPlayer({...player, 
            [event.target.name]: event.target.value});
    };

    const handleSubmit = 
    async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await editPlayer(player);
        setPlayer({
            id: playerID, first: "", last: "", 
            age: 0, info: ""
        });
        goBack(700);
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
                <footer>
                    <button><Link to="/">Cancel</Link></button>
                    <button 
                        onClick={removePlayer}
                        >{isDeleting ? "Deleting...": "Delete"}
                    </button>
                    <button 
                        type="submit"
                        >{isUpdating ? "Updating...": "Update"}
                    </button>
                </footer>
                {isDeleted && (
                    <aside>Player Deleted, redirecting...</aside>
                )}
                {isSaved && (
                    <aside>Player saved, redirecting...</aside>
                )}
            </form>
        </React.Fragment>
    );
};


