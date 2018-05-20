import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({todos, toggleTodo}) => (
    <ul>
        {todos.map(item => {
            return (<Todo
                key={item.id}
                {...item}
                onClick={() => toggleTodo(item.id)}
            />)
        })}
    </ul>
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired
}

export default TodoList;