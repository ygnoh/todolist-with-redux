import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    handleSave: PropTypes.func,
};

const defaultProps = {
    handleSave: () => { console.warn("It is not implemented yet") },
};

const InputArea = ({handleSave}) => {
    return (
        <div>
            <input type="text" />
            <button onClick={handleSave}>save</button>
        </div>
    );
};

InputArea.defaultProps = defaultProps;
InputArea.propTypes = propTypes;

export default InputArea