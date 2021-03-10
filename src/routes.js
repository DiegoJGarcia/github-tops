import Person from 'Views/Person';
import Home from 'Views/Home';

export const routes = [
	{
		key: 1,
		path: '/',
		label: 'Home',
		exact: true,
		component: () => <Home />
	},
	{
		key: 2,
		path: `/person`,
		label: 'Person',
		exact: true,
		component: () => <Person />
	}
];
