import AuthNavBar from '../../components/Navbar/authNavBar/authNavBar.component';
import AuthFooter from '../../components/Footer/authFooter/authFooter.component';
import { useLocation } from 'react-router';

function Auth() {
	const loc = useLocation();
	return (
		<>
			<AuthNavBar />
			<div className="auth-view">
				<div className="auth-container-wrapper"></div>
			</div>
			<AuthFooter />
		</>
	);
}

export function Logo() {
	return <div className="auth-logo">IIT-RPR Alumni</div>;
}

export function HRBreak() {
	return (
		<>
			<div className="left-hr"></div>
			<div className="or-text">OR</div>
			<div className="right-hr"></div>
		</>
	);
}

export function HR() {
	return <div className="hr"></div>;
}

export default Auth;
