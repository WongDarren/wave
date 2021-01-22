const express = require('express');
const axios = require('axios');
const router = express.Router();

// https://riot-api-libraries.readthedocs.io/en/latest/ddragon.html

// @route    GET api/champions
// @desc     Get all champions
// @access   Public
router.get('/', async (req, res) => {
	// create a const for NA version
	// get the latest NA version from here https://ddragon.leagueoflegends.com/realms/na.json
	// http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json
	// request data from the above link

	try {
		const naData = await axios.get(
			'https://ddragon.leagueoflegends.com/realms/na.json'
		);

		// Get all champs from current NA version
		const champData = await axios.get(
			`http://ddragon.leagueoflegends.com/cdn/${naData.data.v}/data/en_US/champion.json`
		);

		res.json(champData.data.data);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
