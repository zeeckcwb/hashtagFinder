import React, { useContext } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./Login";
import HistoricSearch from "../Historic/historic";
import Home from "../main/main";
import About from "../about/about";
import StoreProvider from "../Store/Provider";
import StoreContext from "../Store/context";

/*Implantação da rota privada*/
const RoutesPrivate = ({ component: Component, ...rest }) => {
  const { token } = useContext(StoreContext);

  return (
    <Route
      {...rest}
      render={() =>
        token ? <Component {...rest} /> : <Redirect to="/login" />
      }
    />
  );
};

/*Implantação das rotas*/
const Routes = () => (
  <BrowserRouter>
    <StoreProvider>
      <Switch>
        <Route path="/hashtagFinder" component={Home} />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <RoutesPrivate path="/historic" component={HistoricSearch} />
      </Switch>
    </StoreProvider>
  </BrowserRouter>
);

export default Routes;
