import useAuth from '../../contexts/AuthContext';
import { db } from '../../config/firebase';
import { doc, getDoc } from '@firebase/firestore';
import { useEffect, useState } from 'react';

const Home = () => {
	const { currentUser } = useAuth();
	const [user, setUser] = useState();

	const getUserData = async () => {
		const userRef = await doc(db, 'Users', currentUser.uid);
		await getDoc(userRef).then((userSnapshot) => {
			setUser({
				id: currentUser.uid,
				...userSnapshot.data(),
			});
		});
	};

	useEffect(() => {
		if (currentUser) {
			// console.log(currentUser.uid);
			getUserData();
		}
	}, [currentUser]);

	// console.log('User:', user);

	return (
		<div>
			{user ? (
				<h2>
					Witaj {user.firstName} {user.lastName}!
				</h2>
			) : null}
		</div>
	);
};

export default Home;
