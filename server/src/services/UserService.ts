import axios from 'axios';
import User from '../models/User';

export class UserService{
    async signUpGithub(access_token : string) : Promise<any> {
        try{
            // console.log(access_token);
            const apiURL = "https://api.github.com";

            const { data: userdata } = await axios.get(`${apiURL}/user`, {
                headers: { Authorization: `token ${access_token}` },
            });
    
            const { data: emaildata } = await axios.get(`${apiURL}/user/emails`, {
                headers: { Authorization: `token ${access_token}` },
            });
            
            const username = userdata.login;

            const email = emaildata[0].email;
            
            // console.log(username, email)
            const userExists = await User.findOne({ email });

            if (userExists) {
                return userExists;
            } else{
                const newUser = new User({
                    username,
                    email,
                    password : access_token
                });
                
                const savedUser = await newUser.save();
                return savedUser;
            }

        } catch(error){
            console.log('github 유저 정보 에러 발생');
            // console.error(error);
        }
    }

}