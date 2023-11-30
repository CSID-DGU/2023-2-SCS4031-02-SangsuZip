import { Request, Response } from 'express';
import axios from 'axios';

export const authGithub = async (req: Request, res: Response) => {
    const url = "https://github.com/login/oauth/authorize";
  
    const config = {
      client_id: process.env.VITE_APP_GITHUB_CLIENT_ID!,
      scope: "read:user user:email",
    };
  
    const params = new URLSearchParams(config).toString();
    const finalUrl = `${url}?${params}`;
  
    res.json({ url: finalUrl });
  };
  
  export const getGithubAccessToken = async (req: Request, res: Response) => {
    const { code } = req.query;
  
    const url = "https://github.com/login/oauth/access_token";
  
    const body = {
      client_id: process.env.VITE_APP_GITHUB_CLIENT_ID,
      client_secret: process.env.VITE_APP_GITHUB_CLIENT_SECRET,
      code,
    };
    try {
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
      
      return res.status(201).redirect("http://localhost:5173");
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };