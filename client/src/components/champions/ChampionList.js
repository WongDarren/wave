import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import ChampionCard from './ChampionCard';

const ChampionsList = (props) => {
	const [champsList, setChamps] = useState(null);

	useEffect(() => {
		async function getChamps() {
			const res = await axios.get('/api/champions');
			const champs = res.data;
			// console.log('The champs that I requested: ');
			// console.log(champs);

			setChamps(champs);
		}
		getChamps();
	}, []);

	return (
		<Fragment>
			<div className='container'>
				<h1>Champions</h1>
				<div className='champ-list'>
					{champsList && console.log(Object.values(champsList))}
					{champsList &&
						Object.values(champsList).map((champion) => (
							<ChampionCard champion={champion} />
						))}
				</div>
			</div>
		</Fragment>
	);
};

ChampionsList.propTypes = {};

export default ChampionsList;
