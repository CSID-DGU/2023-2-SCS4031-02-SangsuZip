import { Request, Response } from 'express';
import * as feedService from '../services/FeedService';
import { NewCreateFeed } from "../models/Feed";
import { S3File } from '../utils/s3multer';


export const createFeed = async (req : Request, res : Response) => {

    const writeFeed : NewCreateFeed = {
        title : req.body.title,
        tags : req.body.tags,
        contents : req.body.contents,
        author : req.body.userId,
    }

    const result = await feedService.writeFeed(writeFeed);

    res.status(result.statusCode).json(result);
}

export const updateFeed = async (req: Request, res : Response) => {
    const feedId = req.query.feedId as string;

    const updateFeed : NewCreateFeed = {
        title : req.body.title,
        tags : req.body.tags,
        contents : req.body.contents,
        author : req.body.userId,
    }

    const result = await feedService.updateFeed(updateFeed, feedId);

    res.status(result.statusCode).json(result);

}
export const getFeeds = async (req: Request, res : Response) => {    
    const {idx} = req.params;
    const sIdx = parseInt(idx, 10) * 21;
    const result = await feedService.getFeedAll(sIdx);
    res.status(result.statusCode).json(result);
}

export const getMyFeeds = async(req:Request, res : Response) => {
    const {userId, idx} = req.params;
    console.log(userId +" " + idx);
    const sIdx = parseInt(idx, 10) * 21;
    const result = await feedService.getFeedByIdAll(userId, sIdx);
    res.status(result.statusCode).json(result);
}
export const getFeed = async (req: Request, res: Response) => {
    const feedId = req.query.feedId as string;
    const result = await feedService.getFeedById(feedId);
    res.status(result.statusCode).json(result);
}
export const deleteFeed = async (req: Request, res: Response) => {
    const feedId = req.query.feedId as string;
    const result = await feedService.deleteFeedById(feedId);
    res.status(result.statusCode).json(result);
}
export const uploadImage = async (req:Request, res : Response) => {
    const img = req.file as S3File;

    const result = await feedService.uploadFeedImg(img);

    res.status(result.statusCode).json(result);
}