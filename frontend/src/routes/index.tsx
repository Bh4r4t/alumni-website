import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Footer from '../components/Footer/mainFooter/mainFooter.component';
import Dashboard from '../pages/Support/Dashboard/Dashboard';
import JobBoard from '../pages/Support/JobPortal/JobPortal';
import ProfilePage from '../pages/ProfilePage/profilePage';
import TopNavbar from '../components/Navbar/TopNavbar/topNavbar.component';
import PrivateNavBar from '../components/Navbar/PrivateNavbar/privateNav.component';
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
import { useSelector } from 'react-redux';
import JobPortal from '../pages/Support/JobPortal/JobPortal';
import Dash from '../pages/Support/Dashboard/Dashboard';
import Members from '../pages/Members/members';
import Institute from '../pages/Members/institute';
import Location from '../pages/Members/location';
import ProfessionalSkills from '../pages/Members/prof_skills';
import Company from '../pages/Members/company';
import Roles from '../pages/Members/roles';
import Industry from '../pages/Members/industry';
import EventsSection from '../pages/Events/events';
import Event from '../pages/Events/Event';
import Event2 from '../pages/Events/Event2';
import Event3 from '../pages/Events/Event3';
import Admindashboard from '../pages/Admin Dashboard/Admindashboard';
import PendingEvents from '../pages/Admin Dashboard/PendingEvents';
import EventDescription from '../pages/Admin Dashboard/EventDescription';
import PostInternship from '../pages/Support/PostJob/PostInternship';
import JobSection from '../pages/Support/JobPortal/jobs';

interface RoutesProp {}
export const Routes: React.FC<RoutesProp> = () => {
	const user = useSelector((state: any) => state.authReducer.user);
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
				{/* <PrivateNavBar username=""/> */}
				{user ? (
					<PrivateNavBar
						username={user?.first_name + ' ' + user?.last_name}
					/>
				) : null}
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

					{/* profile routes */}
					{/* <PrivateRoute path="/profile/basic" exact>
						<ProfilePage />
					</PrivateRoute>
					<PrivateRoute path="/profile/contact" exact>
						<ProfilePage />
					</PrivateRoute>
					<PrivateRoute path="/profile/contact" exact>
						<ProfilePage />
					</PrivateRoute> */}
					{/* <Route path="/admin_dashboard" exact>
						<Admindashboard />
					</Route> */}
					{/* <Route path="/admin_dashboard/pending_events" exact>
						<PendingEvents />
					</Route> */}

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

					<Route path="/user/me">
						<ProfilePage />
					</Route>

					{/* landing Page */}
					<Route path="/" exact>
						<HomePage />
					</Route>
					<Route path="/members" exact>
						<Members />
					</Route>
					<Route path="/members/institute" exact>
						<Institute />
					</Route>
					<Route path="/members/location" exact>
						<Location />
					</Route>
					<Route path="/members/prof_skills" exact>
						<ProfessionalSkills />
					</Route>
					<Route path="/members/company" exact>
						<Company />
					</Route>
					<Route path="/members/roles" exact>
						<Roles />
					</Route>
					<Route path="/members/industry" exact>
						<Industry />
					</Route>
					<Route path="/events" exact>
						<EventsSection />
					</Route>
					<Route path="/events/create_event_1" exact>
						<Event />
					</Route>
					<Route path="/events/create_event_2" exact>
						<Event2 />
					</Route>
					<Route path="/events/create_event_3" exact>
						<Event3 />
					</Route>
					<Route path="/admin_dashboard" exact>
						<Admindashboard />
					</Route>
					<Route path="/admin_dashboard/pending_events" exact>
						<PendingEvents />
					</Route>
					<Route path="/admin_dashboard/pending_events/event_description/:id" exact>
						<EventDescription />
					</Route>
					<Route path="/job_portal" exact>
						<JobPortal />
					</Route>
					<Route path="/post_job" exact>
						<PostInternship />
					</Route>
					<Route path="/all_jobs" exact>
						<JobSection />
					</Route>
					{/* <Route path="*">
						<Redirect to="/" />
					</Route> */}
				</div>

				<Footer />
			</div>
		</Switch>
	);
};
