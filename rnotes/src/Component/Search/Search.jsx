import React from "react";
import classes from "./Search.module.css"

const Search = ({setFilter, liveSearch, searchValue, filter}) => {

    const onSearch = (e) => {
        liveSearch(e.target.value)
    };

    if (filter === "done") return (
        <div className={classes.searchPanel}>
            <input className={classes.input} value={searchValue} onChange={onSearch} type="text" placeholder='Поиск'/>
            <button className={"btn btn-primary"} onClick={() => setFilter("active")}>Активные</button>
            <button className={'btn btn-success'} onClick={() => setFilter("done")}>Готовые</button>
            <button className={"btn btn-primary"} onClick={() => setFilter("all")}>Все</button>
        </div>
    );

    if (filter === "active") return (
        <div className={classes.searchPanel}>
            <input value={searchValue} onChange={onSearch} type="text" placeholder='Поиск'/>
            <button className={'btn btn-success'} onClick={() => setFilter("active")}>Активные</button>
            <button className={"btn btn-primary"} onClick={() => setFilter("done")}>Готовые</button>
            <button className={"btn btn-primary"} onClick={() => setFilter("all")}>Все</button>
        </div>
    );

    if (filter === "all") return (
        <div className={classes.searchPanel}>
            <input value={searchValue} onChange={onSearch} type="text" placeholder='Поиск'/>
            <button className={"btn btn-primary"} onClick={() => setFilter("active")}>Активные</button>
            <button className={"btn btn-primary"} onClick={() => setFilter("done")}>Готовые</button>
            <button className={'btn btn-success'} onClick={() => setFilter("all")}>Все</button>
        </div>
    );

};

export default Search;
