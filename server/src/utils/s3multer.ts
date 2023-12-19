import dotenv from 'dotenv';
import multer from 'multer';
import * as AWS from 'aws-sdk';
import multerS3 from 'multer-s3';
import { S3Client } from '@aws-sdk/client-s3';
// type FileNameCallback = (error: Error | null, filename: string) => void
export interface S3File extends Express.Multer.File {
    location: string;
    key: string;
}

dotenv.config();

AWS.config.update({
	accessKeyId: process.env.AWS_ACCESS_KEY,
	secretAccessKey: process.env.AWS_SECRET_KEY,
	region: 'ap-northeast-2',
});

const s3 = new S3Client({});

export const uploadS3 = multer({
	storage: multerS3({
		s3 : s3,
		bucket: process.env.IMG_S3_BUCKET_NAME as string,
        contentType: multerS3.AUTO_CONTENT_TYPE,
		key : function (req, file, cb) {
			cb(null, `${Date.now()}_${file.originalname}`);
		},
	}),
	limits: { fileSize: 20 * 1024 * 1024 },
});

