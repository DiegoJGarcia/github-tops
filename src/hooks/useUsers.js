import React, { useEffect, useState } from 'react';
import { getUsers } from 'services/UserService';

export const useUsers = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		if (users.length === 0) {
			getUsers().then(res => {
				let topUsers = [];
				res.data.map(us => {
					if (us.id < 6) {
						return topUsers.push(us);
					}
					setUsers(topUsers);
				});
			});
			return;
		}
		return;
	}, []);

	return users;
};
