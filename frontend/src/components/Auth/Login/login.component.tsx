import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import { loginUser } from '../../../services/api/auth';
import { useDispatch } from 'react-redux';
import { LOGIN_SUCCESS } from '../../../services/actions/actionTypes';
import './login.component.css';
import { HR, HRBreak, Logo } from '../../../pages/AuthPage/auth';

function SignIn() {
    const [error, setError] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async (payload) => {
            try {
                let res = await loginUser(payload);
                if (res?.data?.error) {
                    throw new Error(res.data.message);
                }
                dispatch({ type: LOGIN_SUCCESS, payload: res.data });
                history.push('/');
            } catch (error) {
                console.log(error);
                setError(true);
            }
        },
    });

    useEffect(() => {
        console.log('error: ', error);
    }, [error]);

    return (
        <>
            <div className="login-form-wrapper">
                <Logo />
                <HR />
                <form onSubmit={formik.handleSubmit} className="login-form">
                    <div className="login-form-items">
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
                            placeholder="Your password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                        <button type="submit">Log In</button>
                    </div>
                </form>
            </div>
            <div className="hr-break">
                <HRBreak />
            </div>
            <div className="signup-option">
                Don't have an Account?
                <Link to="/auth/signup" className="signup-option-link">
                    Signup
                </Link>
            </div>
        </>
    );
}

export default SignIn;
