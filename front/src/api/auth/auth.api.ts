import axios from "axios";
import Cookies from "js-cookie";

export const auth = async () => {
  const apiURL = "https://api.github.com";
  const access_token = Cookies.get("token");

  if (!access_token) return { userdata: null, emaildata: null };

  const { data: userdata } = await axios.get(`${apiURL}/user`, {
    headers: { Authorization: `token ${access_token}` },
  });
  const { data: emaildata } = await axios.get(`${apiURL}/user/emails`, {
    headers: { Authorization: `token ${access_token}` },
  });
  return { userdata, emaildata };
};
