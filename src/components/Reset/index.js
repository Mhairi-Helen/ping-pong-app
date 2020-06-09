import { connect } from "react-redux";
import Reset from "./Reset";

//1. Destructuring
//2. Auto Key Naming
//3.Fat arrown single line

const mapStateToProps = (initialState) => {

    return initialState;
};

export default connect(mapStateToProps)(Reset);