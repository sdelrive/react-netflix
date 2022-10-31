import React from "react";
import Form from "../../components/Form/Form";

import logo from "../../assets/logo.png";

import "./Login.scss";

export default function Login() {
  const image =
    "https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg";
  return (
    <div className="login" style={{ backgroundImage: `url(${image})` }}>
      <div className="login-background"></div>
      <header className="login-header">
        <img src={logo} />
      </header>
      <Form label="Login" />;
    </div>
  );
}
