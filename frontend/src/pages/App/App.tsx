import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { checkAuthAction } from '../../services/actions/auth';
import Auth from '../AuthPage/auth';
import SignIn from '../../components/Auth/Login/login.component';
import SignUp from '../../components/Auth/SignUp/signup.component';
import LandingPage from '../LandingPage/landingPage';
import Dashboard from '../../components/Dashboard/dashboard.component';
import ProfilePage from '../../components/Profile/profile.component';
import PrivateRoute from '../../components/PrivateRoute/privateRoute';
import Footer from '../../components/Footer/footer.component';

import './App.css';

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
					height: '100vh',
					fontSize: '5em',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				Loading...
			</div>
		);
	}

	return (
		<div className="page-container">
			<div className="content-wrap">
				<BrowserRouter>
					<Switch>
						{/* Auth routes */}
						<PrivateRoute exact path="/auth/signin" auth={true}>
							<Auth children={<SignIn />} />
						</PrivateRoute>
						<PrivateRoute exact path="/auth/signup" auth={true}>
							<Auth children={<SignUp />} />
						</PrivateRoute>
						{/* Private Routes*/}
						<PrivateRoute path="/null" exact>
							<h1>Dummy PrivateRoute!</h1>
						</PrivateRoute>
						<PrivateRoute path="/dashboard" exact>
							<Dashboard />
						</PrivateRoute>
						<PrivateRoute path="/profile" exact>
							<ProfilePage />
						</PrivateRoute>
						{/* landing Page */}
						<Route path="/" exact>
							<LandingPage />
						</Route>
						<Route path="*">
							<Redirect to="/" />
						</Route>
					</Switch>
				</BrowserRouter>
			</div>

			<Footer />
		</div>
	);
}

export default App;
