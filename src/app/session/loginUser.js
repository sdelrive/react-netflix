import { Navigate } from "react-router";
import { KEY } from "../../utils/constants";

const loginUrl = `https://api.themoviedb.org/3/authentication/token/new?api_key=${KEY}`;
const authUrl = `https://api.themoviedb.org/3/authentication/session/new?api_key=${KEY}`;

export const login = async () => {
  const res = await fetch(loginUrl);
  const data = await res.json();

  console.log(data);
};

export const authLogin = async () => {
  const res = await fetch(authUrl, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      request_token: "6e0fef7bf90387faa2b19173734b4886a4b7c715",
    }, // body data type must match "Content-Type" header
  });
  const data = await res.json();
  console.log(data);
};
