import React, { useState } from "react";



const Settings = ({ handleSaveSettings }) => {

    //state and event handler
    //player 1 input
    const [player1Name, setPlayer1Name] = useState("Player1");
    const handlePlayer1Name = (e) => setPlayer1Name(e.currentTarget.value);

    //player 2input
    const [player2Name, setPlayer2Name] = useState("Player2");
    const handlePlayer2Name = (e) => setPlayer2Name(e.currentTarget.value);

    //winning score input
    const [score, setScore] = useState(21);
    const handleScore = (e) => {
        if (e.currentTarget.value > 0) {
            return setScore(e.currentTarget.value);
        } else return Error;
    };

    //alternating server
    const [alternate, setAlternate] = useState(5);
    const handleAlternate = (e) => setAlternate(e.currentTarget.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSaveSettings({
            player1Name: player1Name,
            player2Name: player2Name,
            score: score,
            alternate: alternate,
        })
    };



    return (

        <div className="col-md-6 mt-4">

            <header>
                <h2>Settings</h2>
            </header>

            <form onSubmit={handleSubmit}>
                <div className="form-group ">
                    <label for="player1">Player 1</label>
                    <input class="form-control" type="text" name="player1" id="player1" value={player1Name} onChange={handlePlayer1Name} />
                </div>

                <div className="form-group">
                    <label for="player2">Player 2</label>
                    <input className="form-control " type="text" name="player2" id="player2" value={player2Name} onChange={handlePlayer2Name} />

                </div>

                <div className="form-group">
                    <label for="score">Winning Score</label>
                    <input className={"form-control " + (handleSaveSettings.score > 0 ? "" : "is-invalid")} type="number" name="score" id="score" value={score} onChange={handleScore} required />
                    {handleSaveSettings.score > 0 ? null : <small class="invalid-feedback">Please provide a number above 0</small>}
                </div>

                <div className="form-group">
                    <label for="intext">Alternate Every</label>
                    <select className="form-control" id="exampleFormControlSelect1" value={alternate} onChange={handleAlternate}>
                        <option>5</option>
                        <option>2</option>
                        <option>1</option>
                    </select>
                </div>

                <section className="submission">
                    <button className="btn btn-primary" type="submit" name="Submit">Submit</button>
                </section>
            </form>
        </div>

    )
};

export default Settings;