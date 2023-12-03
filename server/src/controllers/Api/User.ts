import { Request, Response } from 'express';
import User from '../../models/User'
import { UserService } from '../../services/UserService';

export const signup = async (req: Request, res: Response) => {
    try {
        const { username, email, password } = req.body;

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        const newUser = new User({
            username,
            email,
            password
        });

        const savedUser = await newUser.save();

        res.status(201).json(savedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const signupGit = async (req: Request, res : Response) => {
    try{

        const { access_token }= req.body;
        console.log(access_token);
        const userService = new UserService();

        const savedUser = await userService.signUpGithub(access_token);

        if(savedUser === 1) return res.status(400).json({ error: 'Email already exists' });

        return res.status(201).json({ 
            userId : savedUser._id,
            email : savedUser.email });
        
    } catch(error){
        console.log('github 저장 에러 ');
    }
}