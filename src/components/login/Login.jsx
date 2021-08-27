import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import StoreContext from "../Store/context";
import axios from "axios";
import "./login.css";
import "../header/header.css";
import iconHome from "../../images/icon-home.svg";
import logo from "../../images/logo.png";
import { Link, withRouter } from "react-router-dom";

var randtoken = require("rand-token");

var token1 = randtoken.generate(16);

/*Função que retorna a tela de login*/
function Login() {
  const [values, setValues] = useState(initialState);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();
  const [error, setError] = useState(null);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  /*Função GET da API para buscar os usuários*/
  useEffect(() => {
    axios.get(
        "https://api.airtable.com/v0/app6wQWfM6eJngkD4/Login?filterByFormula=(%7BSquad%7D+%3D+%275%27)",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer key2CwkHb0CKumjuM",
          },
        }
      ).then((resp) => {
        setEmail(resp.data.records[0].fields.Email);
        setPassword(resp.data.records[0].fields.Senha);
      });
  });

  /*Mudança de caracteres conforme são digitados no input*/
  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  /*Envio dos dados do input para tentativa de login */
  function onSubmit(event) {
    event.preventDefault();
    const { token, error } = Validation(values);

    /*Criação do token de acesso para a área restrita, saco o usuário seja autenticado*/
    if (token) {
      setToken(token);
      return history.push("/historic");
    }

    setError(error);
    setValues(initialState);
  }

  /*Valores iniciais dos inputs de e-mail e senha*/
  function initialState() {
    return { email: "", password: "" };
  }

  /*Função de validação dos dados dos inputs, comparados com os dados da API*/
  function Validation({ email, password }) {
    var token2 = randtoken.generate(16);

    if (!email || !password) {
      return { error: "Preencha todos os campos" };
    }

    if (email === Email && password === Password) {
      localStorage.setItem("token", token2);
    }

    if (localStorage.getItem("token") !== null) {
      localStorage.removeItem("token");
      return { token: token1 };
    }
    return { error: "Usuário ou senha inválido" };
  }

  /*Parte renderizada na página*/
  return (
    <>
      {/*Div que engloba toda a página*/}
      <div className="loginPage">
        {/*Área do cabeçalho*/}
        <section className="header">
          {/*Área de conteúdo do cabeçalho*/}
          <div className="headerContent">
            <div className="headerLogo">
              <img src={logo} alt="Logo hashtagfinder" />
            </div>
            <div className="headerButtons">
              <Link
                style={{ textDecoration: "none", cursor: "pointer" }}
                to="/"
              >
                <button className="buttonLight" style={{ marginRight: "0" }}>
                  <img src={iconHome} alt="icone da home" /> home
                </button>
              </Link>
            </div>
          </div>
        </section>
        {/*Div que engloba a parte do corpo da página*/}
        <div className="loginBody">
          {/*Container para a coloação do formulário*/}
          <div className="formContainer">
            <div>
              {/*Área para colocar os dados e submeter o formulário de login*/}
              <form className="loginForm" onSubmit={onSubmit}>
                {/*Local onde aparecem as mensagens de erro no login*/}
                <span className="formTitle">Login</span>
                {error && <div className="userError">{error}</div>}
                <input
                  className="inputForm"
                  name="email"
                  type="email"
                  placeholder="Usuário"
                  onChange={onChange}
                  value={values.email}
                ></input>
                <input
                  className="inputForm"
                  name="password"
                  type="password"
                  placeholder="Senha"
                  onChange={onChange}
                  value={values.password}
                ></input>
                <button className="formButton" type="submit">ACESSAR</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default withRouter(Login);
