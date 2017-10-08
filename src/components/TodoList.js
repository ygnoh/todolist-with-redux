import React, { Component } from 'react'

import InputArea from './InputArea';
import ShowArea from './ShowArea';

class TodoList extends Component {
    render () {
        return (
            <div>
                <InputArea />
                <ShowArea />
            </div>
        )
    }
}

export default TodoList