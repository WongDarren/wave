import React from 'react';
import PropTypes from 'prop-types';

const ChampionCard = ({ champion }) => {
	return (
		<div key={champion.key}>
			<h2>{champion.name}</h2>
			<h4>{champion.title}</h4>
			<p>
				{Object.values(champion.tags).map((tag) => (
					<p className='champ-tag'>{`${tag} `}</p>
				))}
			</p>
			<p>Difficulty: {champion.info.difficulty}</p>
		</div>
	);
};

ChampionCard.propTypes = {};

export default ChampionCard;

// <div key={champion.key}>
// 			<h2>
// 				{champion.name} - {champion.title}
// 			</h2>
// 			<p>
// 				{Object.values(champion.tags).map((tag) => (
// 					<p>{tag}</p>
// 				))}
// 			</p>
// 			<p>{champion.blurb}</p>
// 			<p>Attack: {champion.info.attack}</p>
// 			<p>Defense: {champion.info.defense}</p>
// 			<p>Magic: {champion.info.magic}</p>
// 			<p>Difficulty: {champion.info.difficulty}</p>
// 			<p>Ability Resource: {champion.partype}</p>
// 			<p>HP: {champion.stats.hp}</p>
// 			<p>HP per Level: {champion.stats.hpperlevel}</p>
// 			<p>MP: {champion.stats.mp}</p>
// 			<p>MP per Level: {champion.stats.mpperlevel}</p>
// 			<p>Movement Speed: {champion.stats.movespeed}</p>
// 			<p>Armor: {champion.stats.armor}</p>
// 			<p>Armor per Level: {champion.stats.armorperlevel}</p>
// 			<p>Magic Resist: {champion.stats.spellblock}</p>
// 			<p>Magic Resist per Level: {champion.stats.spellblockperlevel}</p>
// 			<p>Attack Range: {champion.stats.attackrange}</p>
// 			<p>HP Regen: {champion.stats.hpregen}</p>
// 			<p>HP Regen per Level: {champion.stats.hpregenperlevel}</p>
// 			<p>MP Regen: {champion.stats.mpregen}</p>
// 			<p>MP Regen per Level: {champion.stats.mpregenperlevel}</p>
// 			<p>Crit Chance: {champion.stats.crit}</p>
// 			<p>Crit Chance per Level: {champion.stats.critperlevel}</p>
// 			<p>Attack Damage: {champion.stats.attackdamage}</p>
// 			<p>Attack Damage per Level: {champion.stats.attackdamageperlevel}</p>
// 			<p>Attack Speed: {champion.stats.attackspeed}</p>
// 			<p>Attack Speed per Level: {champion.stats.attackspeedperlevel}</p>
// 		</div>
