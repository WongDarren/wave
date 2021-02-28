import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import ChampionCard from './ChampionCard';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ChampionsList = (props) => {
	const [champsList, setChamps] = useState(null);

	useEffect(() => {
		async function getChamps() {
			const res = await axios.get('/api/champions');
			const champs = res.data;

			setChamps(champs);
		}
		getChamps();
	}, []);

	return (
		<Fragment>
			<Container>
				<Row>
					{champsList &&
						Object.values(champsList).map((champion) => (
							<Col xs={6} sm={4}>
								<ChampionCard champion={champion} />
							</Col>
						))}
				</Row>
			</Container>
		</Fragment>
	);
};

ChampionsList.propTypes = {};

export default ChampionsList;
