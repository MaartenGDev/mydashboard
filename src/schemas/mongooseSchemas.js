import mongoose from 'mongoose';

const collectionSchema = mongoose.Schema({id: Number, name: String, source: String});

export default mongoose.model('Collection', collectionSchema);