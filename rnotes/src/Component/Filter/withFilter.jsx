import React from "react"


const withFilter = (Component) => {
    class withFilterComponent extends React.Component {

        render() {
            const searchText = this.props.search;
            const todoList = this.props.list.filter(item => item.label
                ? item.label.toLowerCase().includes(searchText.toLowerCase()) : item);
            const active = todoList.filter(item => !item.done);
            const complete = todoList.filter(item => item.done);
            const all = todoList.filter(item => item);
            if (this.props.filtered === "active") return <div><Component {...this.props} list={active}/></div>;
            if (this.props.filtered === "done") return <div><Component {...this.props} list={complete}/></div>;
            else return <div><Component {...this.props} list={all}/></div>
        }
    }

    return withFilterComponent
};
export default withFilter
