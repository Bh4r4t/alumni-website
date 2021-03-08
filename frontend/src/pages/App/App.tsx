import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { checkAuthAction } from '../../services/actions/auth';
import Spinner from '../../components/Loading/loading.component';
import TopNavbar from '../../components/Navbar/TopNavbar/topNavbar.component';
import NavBar from '../../components/Navbar/PrivateNavbar/navbar.component';
import Footer from '../../components/Footer/footer.component';
import Auth from '../AuthPage/auth';
import SignIn from '../../components/Auth/Login/login.component';
import SignUp from '../../components/Auth/SignUp/signup.component';
import LandingPage from '../LandingPage/landingPage';
import Dashboard from '../../components/Dashboard/dashboard.component';
import ProfilePage from '../../components/Profile/profile.component';
import PrivateRoute from '../../components/PrivateRoute/privateRoute';
import ContactUs from '../About/ContactUs/contactUs';
import BeAMentor from '../Support/beAMentor/beAMentor';
import BeAVolunteer from '../Support/beAVolunteer/beAVolunteer';

import './App.css';

function App() {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		dispatch(checkAuthAction());
		setTimeout(() => {
			setLoading(false);
		}, 750);
	}, [dispatch]);

	if (loading) {
		return <Spinner />;
	}

	return (
		<BrowserRouter>
			<div className="page-container">
				<TopNavbar />
				<div className="content-wrap">
					<Switch>
						{/* Auth routes */}
						<PrivateRoute exact path="/auth/signin" auth={true}>
							<Auth children={<SignIn />} />
						</PrivateRoute>
						<PrivateRoute exact path="/auth/signup" auth={true}>
							<Auth children={<SignUp />} />
						</PrivateRoute>

						{/* Private Routes*/}
						<PrivateRoute path="/dashboard" exact>
							<Dashboard />
						</PrivateRoute>
						<PrivateRoute path="/profile" exact>
							<ProfilePage />
						</PrivateRoute>

						{/* public routes */}
						<Route path="/about/contact">
							<ContactUs />
						</Route>
						<Route path="/support/become-mentor">
							<BeAMentor />
						</Route>
						<Route path="/support/become-volunteer">
							<BeAVolunteer />
						</Route>

						{/* landing Page */}
						<Route path="/" exact>
							<LandingPage />
						</Route>
						<Route path="*">
							<Redirect to="/" />
						</Route>
					</Switch>
				</div>

				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
