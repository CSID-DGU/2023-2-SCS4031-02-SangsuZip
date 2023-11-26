import mongoose, { Schema, Document, Types } from 'mongoose';
import User from './User'

interface Feed extends Document {
    title: string;
    tags: string[];
    contents: string;
    author: User['_id'];
    createdAt: Date;
}

const feedSchema: Schema = new Schema({
    title: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        required: true
    },
    contents: {
        type: String
    },
    author: {
        type: Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        index: true
    }
})

const Feed = mongoose.model<Feed>('Feed', feedSchema);

export default Feed;