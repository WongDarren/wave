import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Champions = (props) => {
	const [champ, setChamp] = useState(null);

	useEffect(() => {
		async function getChamps() {
			const res = await axios.get('/api/champions');
			const champs = res.data;
			console.log(champs);
			setChamp(champs.data);
		}
		getChamps();
	}, []);

	return (
		<Fragment>
			<h1>Champions Component</h1>
			{champ && <div>{champ.Aatrox.name}</div>}
		</Fragment>
	);
};

Champions.propTypes = {};

export default Champions;
