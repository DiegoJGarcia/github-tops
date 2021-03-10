import React from 'react';

import './styles/Card.scss';

const Card = ({ avatar, name, loca }) => {
	return (
		<div className="card">
			<img lassName="card_img" src={avatar} />
			<div className="card_info">
				<b>{name}</b>
				<p>{loca}</p>
			</div>
		</div>
	);
};

export default Card;
