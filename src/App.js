import React from 'react';
import Header from 'layout/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from 'routes';

const App = () => {
	return (
		<Router>
			<Header title="Home" />
			<Switch>
				{routes.map(route => (
					<Route
						key={route.key}
						path={route.path}
						exact={route.exact}
						component={route.component}
					/>
				))}
			</Switch>
		</Router>
	);
};

export default App;
