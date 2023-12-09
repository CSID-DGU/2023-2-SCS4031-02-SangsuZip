import { Request, Response } from 'express';
// import User from '../../models/User'
import { UserService } from '../services/UserService';
import httpStatus from 'http-status';

// export const signup = async (req: Request, res: Response) => {
//     try {
//         const { username, email, password } = req.body;

//         const userExists = await User.findOne({ email });
//         if (userExists) {
//             return res.status(400).json({ error: 'Email already exists' });
//         }

//         const newUser = new User({
//             username,
//             email,
//             password
//         });

//         const savedUser = await newUser.save();

//         res.status(201).json(savedUser);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// }

// export const signupGit = async (req: Request, res : Response) => {
//     try{

//         const { access_token }= req.body;
//         console.log(access_token);
//         const userService = new UserService();

//         const savedUser = await userService.signUpGithub(access_token);

//         return res.status(201).json({ 
//             userId : savedUser._id,
//             email : savedUser.email });
        
//     } catch(error){
//         console.log('github 저장 에러 ');
//     }
// }

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
    
}
