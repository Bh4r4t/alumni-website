import { Grid, Dropdown, Menu } from 'antd';
import PersonIcon from '@material-ui/icons/Person';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo_img from '../../../assets/alumni_iitrpr_logo.png';
import { logoutAction } from '../../../services/actions/auth';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './topNavbar.component.css';

function TopNavBar() {
	const user = useSelector((state: any) => state.authReducer.user);
	const history = useHistory();
	const { useBreakpoint } = Grid;

	return (
		<div className="topnavbar">
			<div className="topnavbar-container">
				<div className="topnavbar-head">
					<img
						src={logo_img}
						alt="IIT Ropar Alumni Association"
						onClick={() => history.push('/')}
					/>
					<NavLinks user={user} />
				</div>
			</div>
		</div>
	);
}

function NavLinks(props: any) {
	const user = useSelector((state: any) => state.authReducer.user);
	const [highlight, changeHighlight] = useState(false);
	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(logoutAction(user.token));
	};

	const aboutMenu = (
		<Menu>
			<Menu.Item>
				<Link to="">Director's Message</Link>
			</Menu.Item>
			<Menu.Item>
				<Link to="/about/executive-committee">Executive Team</Link>
			</Menu.Item>
			<Menu.Item>
				<Link to="">Constitution</Link>
			</Menu.Item>
			<Menu.Item>
				<Link to="/about/contact">Contact Us</Link>
			</Menu.Item>
		</Menu>
	);

	const initiativesMenu = (
		<Menu>
			<Menu.Item>
				<Link to="">Alumni Student Mentorship Program</Link>
			</Menu.Item>
			<Menu.Item>
				<Link to="">Hangout with Alumni</Link>
			</Menu.Item>
			<Menu.Item>
				<Link to="">Graduation School Application Guidance</Link>
			</Menu.Item>
			<Menu.Item>
				<Link to="">Alumni Book Donation Menu</Link>
			</Menu.Item>
		</Menu>
	);

	const getInvolvedMenu = (
		<Menu>
			<Menu.Item>
				<Link to="/support/become-mentor">Be A Mentor</Link>
			</Menu.Item>
			<Menu.Item>
				<Link to="/support/become-volunteer">Be a Volunteer</Link>
			</Menu.Item>
			<Menu.Item>
				<Link to="/about/contact">Send Query</Link>
			</Menu.Item>
			<Menu.Item>
				<Link to="">Share Achievements</Link>
			</Menu.Item>
			<Menu.Item>
				<Link to="">Share Opportunities</Link>
			</Menu.Item>
			<Menu.Item>
				<Link to="">Invite Friends</Link>
			</Menu.Item>
		</Menu>
	);

	const userMenu = (
		<Menu>
			<Menu.Item>
				<Link to="/auth/signin">Login</Link>
			</Menu.Item>
			<Menu.Item>
				<Link to="/auth/signup">Register</Link>
			</Menu.Item>
		</Menu>
	);

	return (
		<>
			<div className="topnavbar-links">
				<Dropdown
					overlay={initiativesMenu}
					// onVisibleChange={() => changeHighlight(!highlight)}
				>
					<a onClick={(e) => e.preventDefault()}>Initiatives</a>
				</Dropdown>
				<Dropdown
					overlay={getInvolvedMenu}
					// onVisibleChange={() => changeHighlight(!highlight)}
				>
					<a onClick={(e) => e.preventDefault()}>Get Involved</a>
				</Dropdown>
				<a href={'/support/contribute'}>Contribute</a>
				<Dropdown
					overlay={aboutMenu}
					// onVisibleChange={() => changeHighlight(!highlight)}
				>
					<a onClick={(e) => e.preventDefault()}>About Us</a>
				</Dropdown>
				{!props.user ? (
					<Dropdown
						overlay={userMenu}
						// onVisibleChange={() => changeHighlight(!highlight)}
					>
						<a onClick={(e) => e.preventDefault()}>
							<PersonIcon style={{ fontSize: 30 }} />
						</a>
					</Dropdown>
				) : (
					<a onClick={handleLogout}>
						<div className="topnavbar-links-logout">
							<ExitToAppIcon />
							Log out
						</div>
					</a>
				)}
			</div>
			{/* <div className="topnavbar-usericon">
			</div> */}
		</>
	);
}

export default TopNavBar;
