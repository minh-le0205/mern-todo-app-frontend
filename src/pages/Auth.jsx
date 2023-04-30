/* eslint-disable import/extensions */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../components/Auth/Login';
import Layout from '../components/Layout';
import Register from '../components/Auth/Register';
import classes from './Auth.module.scss';
import useAuth from '../hooks/useAuth.js';

function Auth() {
	const { auth } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (auth) {
			navigate('/');
		}
	}, [auth, navigate]);
	return (
		<Layout>
			<div className={classes.form_container}>
				<Login></Login>
				<Register></Register>
			</div>
		</Layout>
	);
}

export default Auth;
