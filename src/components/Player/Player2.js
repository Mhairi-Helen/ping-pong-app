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

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => dispatch({ type: "PLAYER_2" }),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);