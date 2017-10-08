import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

const propTypes = {
    todos: PropTypes.array,
};

const defaultProps = {
    todos: ["nothing to do"],
};


const ShowArea = ({todos}) => {
    return (
        <div>
            <h3>TODOS</h3>
            <ul>
                {todos.map((todo, idx) => <Todo contents={todo} key={idx} />)}
            </ul>
        </div>
    );
};

ShowArea.propTypes = propTypes;
ShowArea.defaultProps = defaultProps;

export default ShowArea