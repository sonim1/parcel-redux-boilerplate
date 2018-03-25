import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
import { grid as Grid } from "fancygrid-react";

const TodoList = ({ todos, onTodoClick }) => {
    var myConfig = {
        width: 200,
        height: 300,
        data: todos,
        columns: [
            {
                index: "text",
                title: "Todo",
                type: "string",
                width: 100
            },
            {
                index: "completed",
                title: "Completed",
                type: "string",
                width: 100
            }
        ]
    };
    
    return (
        <div className="display">
            <h1>To Do DISPLAY</h1>
            <ul>
                {" "}
                {todos.map((todo, index) => (
                    <Todo
                        key={index}
                        {...todo}
                        onClick={() => onTodoClick(index)}
                    />
                ))}{" "}
            </ul>
            <Grid config={myConfig} key={JSON.stringify(todos)} />
        </div>
    );
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
};
export default TodoList;
