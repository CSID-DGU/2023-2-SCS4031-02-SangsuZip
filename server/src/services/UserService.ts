import dotenv from 'dotenv';
// import axios from 'axios';
import User from '../models/User';
import axios from 'axios';

export const checkGithub = async( code : string ) => {
    const url = "https://github.com/login/oauth/access_token";

    console.log(code);
    const body = {
        client_id: process.env.VITE_APP_GITHUB_CLIENT_ID,
        client_secret: process.env.VITE_APP_GITHUB_CLIENT_SECRET,
        code,
    };

    try{
        const { data: access_token } = await axios.post(url, body, {
            headers: { Accept: "application/json" },
        });
        

        const apiURL = "https://api.github.com";

        const { data: userdata } = await axios.get(`${apiURL}/user`, {
            headers: { Authorization: `token ${access_token.access_token}` },
        });

        const { data: emaildata } = await axios.get(`${apiURL}/user/emails`, {
            headers: { Authorization: `token ${access_token.access_token}` },
        });

        const username = userdata.login;
        const email = emaildata[0].email;
        const userExists = await User.findOne({ email });
        
        if (userExists) {
            return {
                userId : userExists._id,
                email : userExists.email,
                access_token : userExists.accessToken
            };
        } else{
            const newUser = new User({
                username,
                email,
                accessToken : access_token,
                nickname : username
            });
            
            const savedUser = await newUser.save();
                
            return {
                    userId : savedUser._id,
                    email : savedUser.email,
                    access_token : access_token
                };
        }

    } catch(err){
        return undefined;
    }
}