import { connect } from "react-redux";
import Settings from "./Settings";
import { saveSettings } from "../../data/actions";
// import { submit } from "../../data/actions";

const mapStateToProps = (state) => {

    return {

    }
};


const mapDispatchToProps = (dispatch) => {

    return {
        handleSaveSettings: ({ data }) => dispatch(saveSettings())
    }

};


export default connect(null, mapDispatchToProps)(Settings);