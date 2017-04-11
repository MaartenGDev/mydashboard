import React, {PropTypes} from 'react';

const NestedSelectInput = ({name, label, onChange, value, error, options}) => {

    const categories = options.reduce((categories, current) => {
        const currentCategory = current.category;
        let currentCategoryIndex = categories.findIndex(category => category.name === currentCategory);

        if(currentCategoryIndex === -1){
            const categoriesLength = categories.push({name: currentCategory, items: []});

            currentCategoryIndex = categoriesLength - 1;
        }

        categories[currentCategoryIndex].items.push(current);

        return categories;
    }, []);

    return (
        <div>
            <label className="form__label" htmlFor={name}>{label}</label>

            <select
                name={name}
                value={value}
                onChange={onChange}
                className="form__select">

                {categories.map((category, index) => {
                    return (
                        <optgroup key={index} label={category.name}>
                            {category.items.map((option, index) => <option value={option.id} key={index}>{option.name}</option>)}
                        </optgroup>);
                })};

                {error && <div>Error: {error}</div>}
            </select>
        </div>
    );
};

NestedSelectInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    defaultOption: PropTypes.string,
    value: PropTypes.number.isRequired,
    error: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object)
};

export default NestedSelectInput;
