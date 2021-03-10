import Button from 'components/Button';
import { useUsers } from 'hooks/useUsers';
import Card from '../components/Card';
import React from 'react';

import './styles/Home.scss';

const Home = () => {
	const users = useUsers();

	return (
		<div className="home">
			<h1>Top 5 GitHub Users</h1>
			<p>Tap the username to see more information</p>
			<div className="home_tops">
				{users.map(user => (
					<Button key={user.id} label={`User #${user.id}`} />
				))}
			</div>
		</div>
	);
};

export default Home;
