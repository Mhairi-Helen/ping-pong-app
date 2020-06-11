import { connect } from "react-redux";
import Settings from "./Settings";
import { saveSettings } from "../../data/actions";
// import { submit } from "../../data/actions";

const mapStateToProps = (state) => {

    return {
        player1Name: state.player1Name,
        player2Name: state.player2Name,
        winningScore: state.winningScore,
        alternateServe: state.alternate,
    }
};

const mapDispatchToProps = (dispatch) => {

    return {
        handleSaveSettings: (data) => dispatch(saveSettings(data))
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);