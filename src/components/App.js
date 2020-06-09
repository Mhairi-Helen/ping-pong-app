import React from "react";
import Player1 from "./Player/Player1";
import Player2 from "./Player/Player2";
import Winner from "./Winner";

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
    <div>
      <Winner winner={winner} />
    </div>

    < hr />

    { /* reset button */}
    < button className="btn btn-danger" onClick={handleReset}>Reset</button>
  </React.Fragment >
);

export default App;
