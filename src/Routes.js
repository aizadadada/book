import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AdminContextProvider from './contexts/AdminContext';
import ClientContextProvider from './contexts/ClientContext';
import AdminPage from './pages/AdminPage';
import CartPage from './pages/CartPage';
import EditPage from './pages/EditPage';
import MainPage from './pages/MainPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import FirstPage from "./pages/FirstPage"
import TheMain from "./pages/TheMain"

const Routes = () => {
    return (
        <ClientContextProvider>
            <AdminContextProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={TheMain} />
                        <Route exact path="/a" component={FirstPage} />
                        <Route exact path="/admin" component={AdminPage} />
                        <Route exact path="/edit/:id" component={EditPage} />
                        <Route exact path="/main" component={MainPage} />
                        <Route exact path="/cart" component={CartPage} />
                        <Route exact path="/sign-in" component={SignInPage} />
                        <Route exact path="/sign-up" component={SignUpPage} />

                    </Switch>
                </BrowserRouter>
            </AdminContextProvider>
        </ClientContextProvider>
    );
};

export default Routes;