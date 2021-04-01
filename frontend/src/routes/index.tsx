import { Redirect, Route, Switch } from 'react-router-dom';
import Footer from '../components/Footer/mainFooter/mainFooter.component';
import Dashboard from '../components/Dashboard/dashboard.component';
import ProfilePage from '../components/Profile/profile.component';
import TopNavbar from '../components/Navbar/TopNavbar/topNavbar.component';
import PrivateRoute from '../components/PrivateRoute/privateRoute';
import ContactUs from '../pages/About/ContactUs/contactUs';
import Director from '../pages/About/Director/director';
import ExecTeam from '../pages/About/ExecutiveTeam/execTeam';
import SignIn from '../pages/Auth/SignIn/signin';
import SignUp from '../pages/Auth/SignUp/emailVerification/signup';
import SignUpCreate from '../pages/Auth/SignUp/signupCreate/signupCreate';
import SignUpDetails from '../pages/Auth/SignUp/signupDetails/signupDetails';
import HomePage from '../pages/HomePage/homePage';
import BeAMentor from '../pages/Support/beAMentor/beAMentor';
import BeAVolunteer from '../pages/Support/beAVolunteer/beAVolunteer';
import Contribute from '../pages/Support/Contribute/contribute';

interface RoutesProp {}
export const Routes: React.FC<RoutesProp> = () => {
	return (
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
			<PrivateRoute exact path="/auth/signup/create/batch" auth={true}>
				<SignUpDetails />
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
						<HomePage />
					</Route>
					<Route path="*">
						<Redirect to="/" />
					</Route>
				</div>

				<Footer />
			</div>
		</Switch>
	);
};
