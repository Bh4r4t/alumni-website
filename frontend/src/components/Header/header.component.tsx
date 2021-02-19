import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { logoutAction } from '../../services/actions/auth';
import './header.component.css';

function Header() {
    const [show, setShow] = useState(false);
    const user = useSelector((state: any) => state.authReducer.user);

    const history = useHistory();
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logoutAction());
        history.push('/');
    };

    useEffect(() => setShow(false), []);

    return (
        <nav>
            <div className="hamburger" onClick={() => setShow(!show)}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <div className="logo" onClick={() => history.push('/')}>
                {/* <div className="logo-img">
                    <img src={interviewImage} alt={''}/>
                </div> */}
                <div className="logo-text">IIT-RPR Alumni</div>
            </div>
            <ul className={show ? 'nav-links show' : 'nav-links'}>
                <li>
                    <Link to="/dashboard">
                        <span className="non-auth-links">dashboard</span>
                    </Link>
                </li>
                {user === undefined ? (
                    <>
                        <li>
                            <Link to="/auth/login">
                                <span className="auth-links">Login</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/auth/register">
                                <span className="auth-links">Signup</span>
                            </Link>
                        </li>
                    </>
                ) : (
                    <li>
                        <span onClick={logoutHandler} className="auth-links">
                            Logout
                        </span>
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default Header;
