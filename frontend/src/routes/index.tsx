import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TopNavbar from '../components/Navbar/TopNavbar/topNavbar.component';
import PrivateNavBar from '../components/Navbar/PrivateNavbar/privateNav.component';
import Footer from '../components/Footer/mainFooter/mainFooter.component';
import Dashboard from '../pages/Dashboard/Dashboard';
import ProfilePage from '../pages/ProfilePage/profilePage';
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
import JobPortal from '../pages/JobPortal/JobPortal';
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
<<<<<<< HEAD
import EventDesc from '../components/EventsDesc/eventsDesc.component';
import NewsRoom from '../pages/Newsroom/newsroom';
import { NewsItemIndiv } from '../components/NewsItem/newsItem.component';
import NewsItemEdit from '../components/newsItemEdit/newsItemEdit.component';
// import Admindashboard from '../components/AdminVerify/Admindashboard';
// import PendingEvents from '../components/AdminVerify/PendingEvents';
=======
import Admindashboard from '../pages/Admin Dashboard/Admindashboard';
import PendingEvents from '../pages/Admin Dashboard/PendingEvents';
import EventDescription from '../pages/Admin Dashboard/EventDescription';
import PostInternship from '../pages/Support/PostJob/PostInternship';
import JobSection from '../pages/Support/JobPortal/jobs';
>>>>>>> 6c711b8263b3f182b640c420f0046916bd53b6e7

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

					{/* newsroom */}
					<PrivateRoute path="/newsroom" exact>
						<NewsRoom />
					</PrivateRoute>
					<PrivateRoute path="/newsroom/create/" exact>
						<NewsItemEdit />
					</PrivateRoute>
					<PrivateRoute path="/newsroom/n/:id" exact>
						<NewsItemIndiv />
					</PrivateRoute>
					<PrivateRoute path="/newsroom/:id/edit">
						<NewsItemEdit />
					</PrivateRoute>

					<PrivateRoute path="/job_portal">
						<JobPortal />
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

					<PrivateRoute path="/user/me">
						<ProfilePage />
					</PrivateRoute>

					{/* landing Page */}
					<Route path="/" exact>
						<HomePage />
					</Route>

					{/* Members' routes */}
					<PrivateRoute path="/members" exact>
						<Members />
					</PrivateRoute>
					<PrivateRoute path="/members/institute" exact>
						<Institute />
					</PrivateRoute>
					<PrivateRoute path="/members/location" exact>
						<Location />
					</PrivateRoute>
					<PrivateRoute path="/members/prof_skills" exact>
						<ProfessionalSkills />
					</PrivateRoute>
					<PrivateRoute path="/members/company" exact>
						<Company />
					</PrivateRoute>
					<PrivateRoute path="/members/roles" exact>
						<Roles />
					</PrivateRoute>
					<PrivateRoute path="/members/industry" exact>
						<Industry />
					</PrivateRoute>

					{/* events' routes */}
					<PrivateRoute path="/events" exact>
						<EventsSection />
					</PrivateRoute>
					<PrivateRoute path="/events/create_event_1" exact>
						<Event />
					</PrivateRoute>
					<PrivateRoute path="/events/create_event_2" exact>
						<Event2 />
					</PrivateRoute>
					<PrivateRoute path="/events/create_event_3" exact>
						<Event3 />
<<<<<<< HEAD
					</PrivateRoute>

					<PrivateRoute path="/events/:id">
						<EventDesc />
					</PrivateRoute>
=======
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
>>>>>>> 6c711b8263b3f182b640c420f0046916bd53b6e7
					{/* <Route path="*">
						<Redirect to="/" />
					</Route> */}
				</div>

				<Footer />
			</div>
		</Switch>
	);
};
