import { Request, Response } from 'express';
// import User from '../../models/User'
import * as userService from '../services/UserService';

export const getOauth = async(req: Request, res : Response) => {
    const url = "https://github.com/login/oauth/authorize";
  
    const config = {
      client_id: process.env.VITE_APP_GITHUB_CLIENT_ID!,
      scope: "read:user user:email",
    };
  
    const params = new URLSearchParams(config).toString();
    const finalUrl = `${url}?${params}`;
  
    res.json({ url: finalUrl });
}

export const getAccessToken = async(req: Request, res : Response) => {
    const code = req.query.code as string;

    const result = await userService.checkGithub(code);

    if(result === undefined){
      res.status(403).redirect(`${process.env.FRONT_URL}`);
    }
    else{
      res
        .status(200)
        .redirect(
          `${process.env.FRONT_URL}?data=${encodeURIComponent(JSON.stringify(result))}`
        );
    }


}
