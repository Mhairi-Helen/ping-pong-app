import { connect } from "react-redux";
import Player from "./Player";

const mapStateToProps = (state) => {

    return {
        playerName: "Player 1",
        score: state.player1,
        winner: state.winner,
        server: state.player1Serve,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => dispatch({ type: "PLAYER_1" }),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Player);

