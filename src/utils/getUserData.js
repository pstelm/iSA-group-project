import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

export const getUserData = async (userId, setUser) => {
	const userRef = await doc(db, 'Users', userId);

	return await getDoc(userRef).then((userSnapshot) => {
		setUser({
			id: userId,
			...userSnapshot.data(),
		});
	});
};
