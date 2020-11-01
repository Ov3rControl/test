import Axios, { AxiosResponse } from "axios";
import React from "react";
import GitHubLogin from "react-github-login";
import { useHistory } from "react-router-dom";

const Login: React.FC = (): JSX.Element => {
  const clientId = process.env.REACT_APP_GITHUB_CLIENT;
  const secretId = process.env.REACT_APP_GITHUB_SECRET;
  const history = useHistory();

  const onSuccess = (response: { code: string }) =>
    Axios.post(
      `https://github.com/login/oauth/access_token?client_id=${clientId}&client_secret=${secretId}&code=${response.code}`
    ).then((response: AxiosResponse) => {
      const token = response.data.substring(
        response.data.indexOf("=") + 1,
        response.data.indexOf("&")
      );
      localStorage.setItem("token", token);
      history.push("/home");
    });

  return (
    <div>
      <h1> Login Component </h1>
      <GitHubLogin clientId={clientId} redirectUri="" onSuccess={onSuccess} />
    </div>
  );
};

export default Login;
