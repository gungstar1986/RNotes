import React from "react";
import Header from "./Header";
import {connect} from "react-redux";

const HeaderContainer = (props) => {

    return (
        <div>
            <Header {...props}/>
        </div>
    )
};
const mapStateToProps = state => {
    return {
        list: state.todoList.list
    }
}
export default connect(mapStateToProps)(HeaderContainer)
