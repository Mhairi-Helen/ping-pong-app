import { connect } from "react-redux";
import Player from "./Player";

const mapStateToProps = (state) => {

    return {
        playerName: "Player 2",
        score: state.player2,
        winner: state.winner,
        server: !state.player1Serve,
    }
};

export default connect(mapStateToProps)(Player);