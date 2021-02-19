import { useState } from 'react';
import { loginUser, registerUser } from '../../../services/api/auth';
import { useFormik } from 'formik';
import './signup.component.css';
import { Link, useHistory } from 'react-router-dom';
import { LOGIN_SUCCESS } from '../../../services/actions/actionTypes';
import { useDispatch } from 'react-redux';
import { HR, HRBreak, Logo } from '../auth.component';

function Register() {
    const [error, setError] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
        },
        onSubmit: async (values) => {
            const payload = {
                first_name: values.username.split(' ')[0],
                last_name: values.username.split(' ')[1],
                email: values.email,
                password: values.password,
            };
            try {
                let res = await registerUser(payload);
                if (res?.data?.error) {
                    throw new Error(res.data.message);
                }
                let res1 = await loginUser({
                    email: payload.email,
                    password: payload.password,
                });
                if (res1?.data?.error) {
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
                        <input
                            id="username"
                            name="username"
                            type="text"
                            placeholder="First & Last Name"
                            onChange={formik.handleChange}
                            value={formik.values.username}
                        />
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
                <Link to="/auth/login" className="signup-option-link">
                    Login
                </Link>
            </div>
        </>
    );
}

export default Register;

<div className="form-wrapper"></div>;
