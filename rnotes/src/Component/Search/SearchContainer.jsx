import React from "react";

const SearchContainer = props => {
    return (
        <div>
            <input type="text" placeholder='Search'/>
            <button>All</button>
            <button>Active</button>
            <button>Done</button>
        </div>

    )
}

export default SearchContainer;
