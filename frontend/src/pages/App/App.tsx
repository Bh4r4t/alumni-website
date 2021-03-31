import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { checkAuthAction } from '../../services/actions/auth';
import Spinner from '../../components/Loading/loading.component';
import { Routes } from '../../routes';

import './App.css';

function App() {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		dispatch(checkAuthAction());
		setTimeout(() => {
			setLoading(false);
		}, 500);
	}, [dispatch]);

	if (loading) {
		return <Spinner />;
	}

	return (
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	);
}

export default App;
