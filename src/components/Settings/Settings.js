import React, { useState } from "react";



const Settings = ({ handleSaveSettings, player1Name, player2Name, winningScore, alternateServe }) => {

    //state and event handler
    //player 1 input
    const [player1, setPlayer1] = useState(player1Name);
    const handlePlayer1 = (e) => setPlayer1(e.currentTarget.value);

    //player 2input
    const [player2, setPlayer2] = useState(player2Name);
    const handlePlayer2 = (e) => setPlayer2(e.currentTarget.value);

    //winning score input
    const [score, setScore] = useState(winningScore);
    const [error, setError] = useState("");
    const handleScore = (e) => setScore(e.currentTarget.value < 1 ? 1 : e.currentTarget.value);

    //alternating server
    const [alternate, setAlternate] = useState(alternateServe);
    const handleAlternate = (e) => setAlternate(e.currentTarget.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (player1.length < 1) {
            setError("Please provide a name")
        };

        if (player2.length < 1) {
            setError("Please provide a name")
        };

        handleSaveSettings({
            player1Name: player1,
            player2Name: player2,
            winningScore: score,
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
                    <input class={"form-control " + (error ? "is-invalid" : "")} type="text" name="player1" id="player1" value={player1} onChange={handlePlayer1} />
                    {error ? <small class="invalid-feedback">{error}</small> : null}
                </div>

                <div className="form-group">
                    <label for="player2">Player 2</label>
                    <input className={"form-control " + (error ? "is-invalid" : "")} type="text" name="player2" id="player2" value={player2} onChange={handlePlayer2} />
                    {error ? <small class="invalid-feedback" >{error}</small> : null}

                </div>

                <div className="form-group">
                    <label for="score">Winning Score</label>
                    <input className="form-control" type="number" name="score" id="score" value={score} onChange={handleScore} required />

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
                    <button className="btn btn-primary" type="submit" name="Submit"><a href="/" style={{ color: "white" }}>Submit</a></button>
                </section>
            </form>
        </div>

    )
};

export default Settings;