import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ButtoninX from "../atoms/Button.in";
import ButtoncrX from "../atoms/Button.cr";
import logo from "../assets/logo.png";
import '../organismes/Form-in.css'

const ForminX = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };    

  return (
    <div>
      <Card className="container">
        <Card className="second">
          <Card className="cdf">
            <h1 className="tittle">Iniciar sesión en CampusLink</h1>
            <img src={logo.png} className="logo"/>
            <form onSubmit={handleSubmit}>
              <label className="email">Email:</label>
              <input
                className="in-pass"
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
              />
              <br />
              <label className="password">Password:</label>
              <input
                className="c-in"
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
              <br />
              <ButtoncrX />
            </form>
            <ButtoninX />
          </Card>
        </Card>
      </Card>
    </div>
  );
};

export default ForminX;
