import React from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/Nav/Navbar';
import TaskList from '../components/Task/TaskList';

function Home() {
	return (
		<Layout>
			<Navbar></Navbar>
			<TaskList></TaskList>
		</Layout>
	);
}

export default Home;
