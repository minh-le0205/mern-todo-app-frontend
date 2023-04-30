import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { FaUserAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import classes from './Navbar.module.scss';

function Navbar() {
	const [user, setUser] = useState(null);
	const navigate = useNavigate();

	const getUser = async () => {
		try {
			const { data } = await axios.get('/api/v1/users/me');
			setUser(data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUser();
	}, []);

	const handleLogout = async () => {
		try {
			await axios.get('/api/v1/auth/logout');
			setUser(null);
			toast.success('Logged out successfully');
			navigate('/auth');
		} catch (err) {
			console.log(err);
		}
	};

	if (!user) return null;

	return (
		<header>
			<div className={classes.userInfo}>
				<FaUserAlt className={classes.userIcon}></FaUserAlt>
				<div>
					<h1 className={classes.name}>{user.name}</h1>
					<p className={classes.email}>{user.email}</p>
					<Link to="/edit-profile" className={classes.editBtn}>
						Edit
					</Link>
				</div>
			</div>
			<nav>
				<button className={classes.logout} type="button" onClick={handleLogout}>
					Logout
				</button>
			</nav>
		</header>
	);
}

export default Navbar;
