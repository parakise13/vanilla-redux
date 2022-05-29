import React from "react";
import { remove } from "../store";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function ToDo({ text, onBtnclick, id }) {
    return (
        <li>
            <Link to={`/${id}`}>
                {text} 
            </Link>
            <button onClick={onBtnclick}>DEL</button>
        </li>
    );
}

function mapDispatchToProps(dispatch, ownProps) {
    // ownProps 는 우리가 받아올 state
    return {
        onBtnclick: () => dispatch(remove(ownProps.id)),
    };
}

export default connect(null, mapDispatchToProps)(ToDo);
