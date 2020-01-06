import React from "react";
import Search from "./Search";
import {connect} from "react-redux";
import {liveSearch, setFilter} from "../../Redux/todolist-reducer";

class SearchContainer extends React.Component {
    render() {
        return (
            <div>
                <Search {...this.props}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        searchValue: state.todoList.search,
        filter: state.todoList.filtered
    }
};
const mapDispatchToProps = {
    setFilter,
    liveSearch
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)


