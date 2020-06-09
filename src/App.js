import React from "react";
import Player1 from "./components/Player/Player1";
import Player2 from "./components/Player/Player2";

const App = ({ handlePlayer1, handlePlayer2, handleReset, player1Serve, winner }) => (
  <React.Fragment>
    {/* header */}
    <header className="jumbotron mt-4 mb-0">
      <h1>PongPing</h1>
    </header>

    {/* scores */}
    <div className="row mb-4">
      <Player1 handleClick={handlePlayer1} />
      <Player2 handleClick={handlePlayer2} />
    </div>

    { /* winner message */}
    {winner !== "" ? (<h2 className="alert alert-success">Player { winner} wins!</h2>) : null}

    < hr />

    { /* reset button */}
    < button className="btn btn-danger" onClick={handleReset}>Reset</button>
  </React.Fragment >
);

export default App;
