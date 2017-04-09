import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CollectionForm = ({collection, allCollectionTypes, onSave, onChange, saving, buttonText, errors}) => {
    return (
        <form className="form">
            <TextInput
                name="name"
                label="Name"
                value={collection.name}
                onChange={onChange}
                error={errors.name} />

            <SelectInput
                name="type_id"
                label="Select Type"
                value={collection.type_id}
                options={allCollectionTypes}
                onChange={onChange}
                error={errors.type}/>

            <TextInput
                name="source"
                label="Source"
                value={collection.source}
                onChange={onChange}
                error={errors.source}/>

            <input
                type="submit"
                disabled={saving}
                value={buttonText}
                className="form__button btn btn--flat"
                onClick={onSave}/>
        </form>
    );
};

CollectionForm.propTypes = {
    collection: PropTypes.object.isRequired,
    allCollectionTypes: PropTypes.array.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    saving: PropTypes.bool,
    buttonText: PropTypes.string.isRequired,
    errors: PropTypes.object
};

export default CollectionForm;