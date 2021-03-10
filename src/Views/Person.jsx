import Card from 'components/Card';
import { useUsers } from 'hooks/useUsers';
import React, { useEffect, useState } from 'react';
import { getOneUser } from 'services/UserService';

const Person = () => {
	const users = useUsers();
	const [person, setPerson] = useState({
		avatar_url: '',
		login: '',
		location
	});

	useEffect(() => {
		if (users.length) {
			getOneUser(users[0].login).then(res => setPerson(res.data));
		}
		return;
	}, [users]);

	return <Card avatar={person.avatar_url} name={person.login} location={person.location} />;
};

export default Person;
