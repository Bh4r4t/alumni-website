import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { checkAuthAction } from './services/actions/auth';
import Auth from './components/Auth/auth.component';
import Login from './components/Auth/Login/login.component';
import Signup from './components/Auth/SignUp/signup.component';
import Dashboard from './components/Dashboard/dashboard.component';
import LandingPage from './components/LandingPage/landingPage.component';
import PrivateRoute from './components/PrivateRoute/privateRoute';

function App() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(checkAuthAction());
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, [dispatch]);

    if (loading) {
        return (
            <div
                style={{
                    height:'100vh',
                    fontSize: '5em',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}
            >
                Loading...
            </div>
        );
    }

    return (
        <BrowserRouter>
            <Switch>
                {/* Auth routes */}
                <PrivateRoute exact path="/auth/login" auth={true}>
                    <Auth children={<Login />} />
                </PrivateRoute>
                <PrivateRoute exact path="/auth/register" auth={true}>
                    <Auth children={<Signup />} />
                </PrivateRoute>
                {/* Private Routes*/}
                <PrivateRoute path="/null" exact>
                    <h1>Dummy PrivateRoute!</h1>
                </PrivateRoute>
                <PrivateRoute path="/dashboard" exact>
                    <Dashboard />
                </PrivateRoute>
                {/* landing Page */}
                <Route path="/" exact>
                    <LandingPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
