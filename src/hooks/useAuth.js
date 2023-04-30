import axios from 'axios';
import { useEffect, useState } from 'react';

export default () => {
	const [auth, setAuth] = useState();

	const verifyAuth = async () => {
		try {
			const res = await axios.get('/api/v1/auth/is_logged_in');
			return res.data;
		} catch (e) {
			console.log(e);
			return false;
		}
	};

	useEffect(() => {
		(async () => {
			const data = await verifyAuth();
			setAuth(data);
		})();
	});

	return { auth };
};
