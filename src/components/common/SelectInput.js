import React, {PropTypes} from 'react';

const SelectInput = ({name, label, onChange, value, error, options}) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>

            <select
                name={name}
                value={value}
                onChange={onChange}>

                {options.map(option => {
                    return <option key={option.value} value={option.value}>{option.text}</option>;
                })}

                {error && <div>Error: {error}</div>}
            </select>
        </div>
    );
};

SelectInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    defaultOption: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput;