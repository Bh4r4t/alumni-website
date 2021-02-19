import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/reducers';

function PrivateRoute({ children, auth = false, ...rem }: any) {
    const loggedIn = useSelector((state: RootState) => state.authReducer.user);
    return auth ? (
        <Route
            {...rem}
            render={() => (!loggedIn ? children : <Redirect to="/" />)}
        />
    ) : (
        <Route
            {...rem}
            render={() => (loggedIn ? children : <Redirect to="/" />)}
        />
    );
}

export default PrivateRoute;
