import { connect } from "react-redux";
import History from "./History";

const mapStateToProps = (state) => {



    return {
        game: state.game,
        player1Name: state.player1Name,
        score1: state.score1,
        player2Name: state.player2Name,
        score2: state.score,
        winner: state.winnerName,
    }

};

export default connect(mapStateToProps)(History);