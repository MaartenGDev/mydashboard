import mongoose from 'mongoose';

const collectionSchema = mongoose.Schema({name: String, type: {type: mongoose.Schema.ObjectId, ref: 'Type'}, source: String});

const typeSchema = mongoose.Schema({
    name: String
});

const Type = mongoose.model('Type', typeSchema);
const Collection = mongoose.model('Collection', collectionSchema);

export {
    Type,
    Collection
};