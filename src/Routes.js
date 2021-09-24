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
<<<<<<< HEAD
import PayCard from "./components/PayCard"
=======
import TheMain from "./pages/TheMain"
import PaymentForm from './payment/PaymentForm';
>>>>>>> 98ea1e3b3aa2108bc60bb5371871a151fe7d9880

const Routes = () => {
    return (
        <ClientContextProvider>
            <AdminContextProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={FirstPage} />
                        <Route exact path="/admin" component={AdminPage} />
                        <Route exact path="/edit/:id" component={EditPage} />
                        <Route exact path="/main" component={MainPage} />
                        <Route exact path="/cart" component={CartPage} />
                        <Route exact path="/sign-in" component={SignInPage} />
                        <Route exact path="/sign-up" component={SignUpPage} />
<<<<<<< HEAD
                        <Route exact path="/payment" component={PayCard} />
=======
                        <Route exact path="/payment" component={PaymentForm} />

>>>>>>> 98ea1e3b3aa2108bc60bb5371871a151fe7d9880

                    </Switch>
                </BrowserRouter>
            </AdminContextProvider>
        </ClientContextProvider>
    );
};

export default Routes;