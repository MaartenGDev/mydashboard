import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CollectionForm = ({collection, allCollectionTypes, onSave, onChange, loading, errors}) => {
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
                label="Type"
                value={collection.type._id}
                defaultOption="Select Type"
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
                disabled={loading}
                value={loading ? 'Saving...' : 'Save'}
                onClick={onSave}/>
        </form>
    );
};

CollectionForm.propTypes = {
    collection: PropTypes.object.isRequired,
    allCollectionTypes: PropTypes.array.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    errors: PropTypes.object
};

export default CollectionForm;