import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Champions = (props) => {
	const [champsList, setChamps] = useState(null);

	useEffect(() => {
		async function getChamps() {
			const res = await axios.get('/api/champions');
			const champs = res.data;
			console.log('The champs that I requested: ');
			console.log(champs);

			setChamps(champs);
		}
		getChamps();
	}, []);

	return (
		<Fragment>
			<h1>Champions Component</h1>
			{champsList && console.log(Object.values(champsList))}
			{champsList &&
				Object.values(champsList).map((champion) => (
					<p key={champion.key}>
						{champion.name} - {champion.title}
					</p>
				))}
		</Fragment>
	);
};

Champions.propTypes = {};

export default Champions;
