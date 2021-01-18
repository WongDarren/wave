const express = require('express');
const fetch = require('node-fetch');
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

	res.send('Champions API');

	// Get NA Version
	const naUrl = 'https://ddragon.leagueoflegends.com/realms/na.json';
	const naData = await fetch(naUrl);
	const naBody = await naData.json();
	const naVersion = naBody.v;

	// Get all champs from current NA version
	const champUrl = `http://ddragon.leagueoflegends.com/cdn/${naVersion}/data/en_US/champion.json`;
	const champData = await fetch(champUrl);
	const champBody = await champData.json();

	//console.log(champBody.data.Aatrox);
});

module.exports = router;
