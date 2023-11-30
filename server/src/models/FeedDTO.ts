import mongoose, { Schema, Document } from 'mongoose';
import Feed from './Feed'
import User from './User'

interface FeedDTO extends Feed, Document {}

const FeedDTO