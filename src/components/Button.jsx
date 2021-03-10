import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Button.scss';

const Button = ({ label }) => {
	return (
		<Link className="button" to="/person">
			{label}
		</Link>
	);
};

export default Button;
