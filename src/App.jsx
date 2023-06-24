import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import { Layout, Login, Home, MyTrips, Register } from './components';


export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				{/* Publiczne ściezki */}
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />

				{/* Ściezki prywatne */}
				<Route element={<PrivateRoute />}>
					<Route path="/" element={<Home />} />
					<Route path="/mytrips" element={<MyTrips />} />
				</Route>
			</Route>
		</Routes>
	);
};
