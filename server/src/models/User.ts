import mongoose, { Schema, Document } from 'mongoose';

interface User extends Document {
    username: string;
    email: string;
    accessToken: string;
    nickname : string;
}

const userSchema: Schema = new Schema({
    username: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    accessToken: {
        type: String,
        required: true
    },
    nickname : {
        type : String,
    }
})

const User = mongoose.model<User>('User', userSchema);

export default User;