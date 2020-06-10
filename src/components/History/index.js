import { connect } from "react-redux";
import Player from "./History";

const mapStateToProps = (state) => {

    return {
        game: state.game,
        player_1: {
            score: state.score,
            won: state.won,
        },

        player_2: {
            score: state.score,
            won: state.won,
        }
    };

    export default connect(mapStateToProps)(History);