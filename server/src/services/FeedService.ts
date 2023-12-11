import { CommonResponseDTO } from "../DTO/CommonResponseDTO";
import Feed, { NewCreateFeed } from "../models/Feed";
import User from "../models/User";
import {S3File} from '../utils/s3multer';

export const prePatchFeed = async (writeFeed : NewCreateFeed) => {
    try{
        const userExists = await User.findById(writeFeed.author);

        if(!userExists) return new CommonResponseDTO(undefined, 404, "유저 정보 조회 불가");

        const newFeed = new Feed({
            author : writeFeed.author
        });

        const firstFeed = await newFeed.save();

        return new CommonResponseDTO({ feedId : firstFeed._id }, 200, "게시글 저장 완료");

    } catch(err){
        console.log(err);
        return new CommonResponseDTO(undefined, 500, "서버 에러");
    }
}
export const writeFeed = async(writeFeed : NewCreateFeed) => {

    try{
        const userExists = await User.findById(writeFeed.author);

        if(!userExists) return new CommonResponseDTO(undefined, 404, "유저 정보 조회 불가");
        
        const newFeed = new Feed({
            title : writeFeed.title,
            tags : writeFeed.tags,
            contents : writeFeed.contents,
            author : writeFeed.author,
        });
    
        const savedFeed = await newFeed.save();
        
        return new CommonResponseDTO({ feedId : savedFeed._id }, 200, "게시글 저장 완료");
    } catch(err){
        return new CommonResponseDTO(undefined, 500, "서버 에러");
    }
}

export const updateFeed = async(updateFeed : NewCreateFeed, feedId : string) => {
    try{
        const before = await Feed.findById(feedId);

        if(!before) return new CommonResponseDTO(undefined, 404, "게시글 정보 조회 불가");
        
        const after = new Feed({
            feedId : before._id,
            tags : updateFeed.tags,
            recommendedTags : updateFeed.recommendedTags,
            contents : updateFeed.contents,
            author : updateFeed.author,
        });
    
        const newFeed = await after.save();
    
        return new CommonResponseDTO({feedId : newFeed._id}, 200, "게시글 수정 완료");
    
    } catch(err){
        return new CommonResponseDTO(undefined, 500, "서버 에러");
    }

}

export const getFeedAll = async( sIdx : number ) => {
    try{
        const feeds = await Feed.find().skip(sIdx).limit(21);

        const feedList = feeds.map(feedInstance => ({
            feedId : feedInstance._id,
            tags: feedInstance.tags,
			title: feedInstance.title,
			contents: feedInstance.contents,
			nickname: feedInstance.author.nickname,
            date : feedInstance.createdAt,
            image : feedInstance.image
        }));
    
        return new CommonResponseDTO(feedList, 200, "게시글 수정 완료");
    } catch(err){
        return new CommonResponseDTO(undefined, 500, "서버 에러");
    }
}

export const getFeedById = async (feedId : string) => {
    try{
        const feed = await Feed.findById(feedId);
        if(!feed) return new CommonResponseDTO(undefined, 404, "게시글 조회 불가");
        return new CommonResponseDTO(feed, 200, "게시글 조회 완료");
    } catch(err){
        return new CommonResponseDTO(undefined, 500, "서버 에러");
    }
}

export const deleteFeedById = async (feedId : string) => {
    try{
        const deleteFeed = await Feed.findByIdAndDelete(feedId);
        if(deleteFeed) return new CommonResponseDTO({feedId : feedId}, 200, "삭제 완료");
        else return new CommonResponseDTO(undefined, 404, "삭제할 게시글 조회 불가");
    } catch(err){
        return new CommonResponseDTO(undefined, 500, "서버 에러");
    }
}

export const getFeedByIdAll = async (userId : string, sIdx : number) => {
    try{
        const feeds = await Feed.find({author : userId}).skip(sIdx).limit(21);
        if(feeds) return new CommonResponseDTO(feeds, 200, "내 피드 조회 완료 ");
        else return new CommonResponseDTO(undefined, 404, "내 피드 없음");
    } catch (err){
        return new CommonResponseDTO(undefined, 500, "서버 에러 ");
    }
}

export const uploadFeedImg = async (img : S3File) => {
    try{
        return new CommonResponseDTO({
            imgUrl: img.location,
        }, 201, "이미지 저장완료");

    } catch(err){
        console.log(err);
        return new CommonResponseDTO(undefined, 500, "서버 에러 ");
    }
}