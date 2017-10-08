import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

import InputArea from './InputArea';
import ShowArea from './ShowArea';

class TodoList extends Component {
    render () {
        return (
            <div>
                <InputArea handleSave={this.props.handleSave} />
                <ShowArea todos={this.props.todos} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.inputArea.contents,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleSave: (contents) => {dispatch(actions.saveTodo(contents))},
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)