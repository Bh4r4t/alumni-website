import { useState } from 'react';
import { loginUser, registerUser } from '../../../services/api/auth';
import { useFormik } from 'formik';
import './signup.component.css';
import { Link, useHistory } from 'react-router-dom';
import { LOGIN_SUCCESS } from '../../../services/actions/actionTypes';
import { useDispatch } from 'react-redux';
import { HR, HRBreak, Logo } from '../../../pages/AuthPage/auth';

function SignUp() {
	const [error, setError] = useState(false);
	const history = useHistory();
	const dispatch = useDispatch();
	const formik = useFormik({
		initialValues: {
			first_name: '',
			last_name: '',
			email: '',
			password: '',
		},
		onSubmit: async (payload) => {
			try {
				let res = await registerUser(payload);
				if (res?.data?.error === 'true') {
					throw new Error(res.data.message);
				}
				let res1 = await loginUser({
					email: payload.email,
					password: payload.password,
				});
				if (res1?.data?.error === 'true') {
					throw new Error(res.data.message);
				}
				dispatch({ type: LOGIN_SUCCESS, payload: res1.data });
				history.push('/');
			} catch (error) {
				console.log(error);
				setError(true);
			}
		},
	});

	if (error) {
		return <div> Error! </div>;
	}

	return (
		<>
			<div className="signup-form-wrapper">
				<Logo />
				<HR />
				<form onSubmit={formik.handleSubmit} className="signup-form">
					<div className="signup-form-items">
						{/* <div className="signup-form-items-name"> */}
							<input
								id="first_name"
								name="first_name"
								type="text"
								placeholder="First Name"
								onChange={formik.handleChange}
								value={formik.values.first_name}
							/>
							<input
								id="last_name"
								name="last_name"
								type="text"
								placeholder="Last Name"
								onChange={formik.handleChange}
								value={formik.values.last_name}
							/>
						{/* </div> */}
						<input
							id="email"
							name="email"
							type="email"
							placeholder="Email"
							onChange={formik.handleChange}
							value={formik.values.email}
						/>
						<input
							id="password"
							name="password"
							type="password"
							placeholder="Password"
							onChange={formik.handleChange}
							value={formik.values.password}
						/>
						<button type="submit">Sign Up</button>
					</div>
				</form>
			</div>
			<div className="hr-break">
				<HRBreak />
			</div>
			<div className="signup-option">
				Have an Account?
				<Link to="/auth/signin" className="signup-option-link">
					Login
				</Link>
			</div>
		</>
	);
}

export default SignUp;