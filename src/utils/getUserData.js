import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

export const getUserData = async (userId, setUser) => {
	const userRef = await doc(db, 'Users', userId);

	try {
		const userData = await getDoc(userRef);
		if (userData.exists()) {
			const userDataFiltered = userData.data();
			setUser(userDataFiltered);
		}
	} catch (error) {
		console.log(error);
	}

	// return await getDoc(userRef).then((userSnapshot) => {
	// 	setUser({
	// 		id: userId,
	// 		...userSnapshot.data(),
	// 	});
	// });
};
