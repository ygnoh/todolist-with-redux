import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    handleSave: PropTypes.func,
};

const defaultProps = {
    handleSave: () => { console.warn("It is not implemented yet") },
};

class InputArea extends Component {
    constructor(props) {
        super(props);

        this._saveContents = this._saveContents.bind(this);
    }


    _saveContents() {
        const contents = this.refs.input.value;

        this.props.handleSave(contents);
    }

    render() {
        return (
            <div>
                <input type="text" ref="input" />
                <button onClick={this._saveContents}>save</button>
            </div>
        );
    }
};

InputArea.defaultProps = defaultProps;
InputArea.propTypes = propTypes;

export default InputArea