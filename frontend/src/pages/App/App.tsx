import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { checkAuthAction } from '../../services/actions/auth';
import Spinner from '../../components/Loading/loading.component';
import TopNavbar from '../../components/Navbar/TopNavbar/topNavbar.component';
// import NavBar from '../../components/Navbar/PrivateNavbar/navbar.component';
import Footer from '../../components/Footer/mainFooter/mainFooter.component';
import SignIn from '../../components/Auth/SignIn/signin.component';
import SignUp from '../../components/Auth/SignUp/emailVerification/signup.component';
import SignUpCreate from '../../components/Auth/SignUp/signupCreate/signupCreate.component';
import LandingPage from '../LandingPage/landingPage';
import Dashboard from '../../components/Dashboard/dashboard.component';
import ProfilePage from '../../components/Profile/profile.component';
import PrivateRoute from '../../components/PrivateRoute/privateRoute';
import ContactUs from '../About/ContactUs/contactUs';
import ExecTeam from '../About/ExecutiveTeam/execTeam';
import BeAMentor from '../Support/beAMentor/beAMentor';
import BeAVolunteer from '../Support/beAVolunteer/beAVolunteer';
import Contribute from '../Support/Contribute/contribute';

import Director from '../About/Director/director';

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
		return <Spinner />;
	}

	return (
		<BrowserRouter>
			<Switch>
				{/* Auth routes */}
				<PrivateRoute exact path="/auth/signin" auth={true}>
					<SignIn />
				</PrivateRoute>
				<PrivateRoute exact path="/auth/signup" auth={true}>
					<SignUp />
				</PrivateRoute>
				<PrivateRoute exact path="/auth/signup/create" auth={true}>
					<SignUpCreate />
				</PrivateRoute>
				<div className="page-container">
					<TopNavbar />
					<div className="content-wrap">
						{/* Private Routes*/}
						<PrivateRoute path="/dashboard" exact>
							<Dashboard />
						</PrivateRoute>
						<PrivateRoute path="/profile" exact>
							<ProfilePage />
						</PrivateRoute>
						<PrivateRoute path="/support/become-mentor" exact>
							<BeAMentor />
						</PrivateRoute>
						<PrivateRoute path="/support/become-volunteer" exact>
							<BeAVolunteer />
						</PrivateRoute>

						{/* public routes */}
						<Route path="/about/contact">
							<ContactUs />
						</Route>
						<Route path="/about/executive-committee">
							<ExecTeam />
						</Route>
						<Route path="/support/contribute">
							<Contribute />
						</Route>
						<Route path="/about/director">
							<Director />
						</Route>

						{/* landing Page */}
						<Route path="/" exact>
							<LandingPage />
						</Route>
						<Route path="*">
							<Redirect to="/" />
						</Route>
					</div>

					<Footer />
				</div>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
