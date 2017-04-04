import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CollectionForm = ({collection, allCollectionTypes, onSave, onChange, saving, errors}) => {
    return (
        <form>
            <TextInput
                name="name"
                label="Name"
                value={collection.name}
                onChange={onChange}
                error={errors.name} />

            <SelectInput
                name="type"
                label="Select Type"
                value={collection.type}
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
                value={saving ? 'Saving...' : 'Save'}
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
    errors: PropTypes.object
};

export default CollectionForm;