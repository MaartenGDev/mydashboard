import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({name, label, onChange, placeholder, value, error}) => {
    return (
        <section>
            <label className="form__label" htmlFor={name}>{label}</label>

            <input
                type="text"
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="form__input"
            />
            {error && <p>Error: {error}</p>}
        </section>
    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string
};

export default TextInput;