import React, { useContext} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './Login'
import Historic from '../Historic/historic'
import Home from '../main/main'
import About from '../about/about'
import StoreProvider from '../Store/Provider'
import StoreContext from '../Store/context'

const RoutesPrivate = ({component: Component, ...rest}) => {
    const {token} = useContext(StoreContext)

    return(
        <Route
        {...rest}
        render={() => token 
            ? <Component {...rest}/>
            : <Redirect to='/login'/>
        }
        />
    )
}

const Routes = () => (
    <BrowserRouter>
        <StoreProvider>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path="/about" component={About}/>
                <Route path='/login' component={Login} />
                <RoutesPrivate path="/historic" component={Historic}/>
            </Switch>
        </StoreProvider>
    </BrowserRouter>
)

export default Routes;