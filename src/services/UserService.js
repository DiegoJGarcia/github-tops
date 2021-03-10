import api from 'utils/api';

export const getUsers = () => {
	return api.get(`/users`);
};

export const getOneUser = username => {
	return api.get(`/users/${username}`);
};
