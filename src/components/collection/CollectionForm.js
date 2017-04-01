import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CollectionForm = ({collection, allTypes, onSave, onChange, loading, errors}) => {
    return (
        <form>
            <TextInput
                name="name"
                label="Name"
                value={collection.title}
                onChange={onChange}
                error={errors.name} />

            <SelectInput
                name="typeId"
                label="Type"
                value={collection.typeId}
                defaultOption="Select Type"
                options={allTypes}
                onChange={onChange}
                error={errors.typeId}/>

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
    allTypes: PropTypes.array.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    errors: PropTypes.object
};

export default CollectionForm;