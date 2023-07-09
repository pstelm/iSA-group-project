import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import {
	Layout,
	Login,
	Home,
	MyTrips,
	Register,
	UserProfile,
	EditUser,
	AddTrip,
	AllTrips,
	OwnedTrips,
	JoinedTrips,
	TripFullPage,
	PasswordReminder,
} from './components';

export const App = () => {
	return (
		<Routes>
			{/* Publiczne ściezki */}
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
			<Route path='/passwordreminder' element={<PasswordReminder />} />

			<Route path='/' element={<Layout />}>
				{/* Ściezki prywatne */}
				<Route element={<PrivateRoute />}>
					<Route path='/' element={<Home />} />
					<Route path='/userprofile' element={<UserProfile />} />
					<Route path='/editprofile' element={<EditUser />} />
					<Route path='/mytrips' element={<MyTrips />}>
						<Route path='/mytrips/ownedtrips' element={<OwnedTrips />} />
						<Route path='/mytrips/joinedtrips' element={<JoinedTrips />} />
					</Route>
					<Route path='/addtrip' element={<AddTrip />} />
					<Route path='/alltrips' element={<AllTrips />} />
					<Route path='/trip/:tripID' element={<TripFullPage />} />
					<Route path='*' element={<Home />} />
				</Route>
			</Route>
		</Routes>
	);
};
