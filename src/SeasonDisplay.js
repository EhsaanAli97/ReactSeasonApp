import React from 'react';
import './SeasonDisplay.css';
import './ErrorDisplay.css';

const seasonConfig = {
	summer: {
		text: 'Summer time baby, suns out guns out',
		seasonIcon: 'sun',
	},
	winter: {
		text: 'Brrr, its chilly!',
		seasonIcon: 'snowflake',
	},
};

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? 'summer' : 'winter';
	} else {
		return lat > 0 ? 'Winter' : 'Summer';
	}
};

const SeasonDisplay = (props) => {
	const season = getSeason(props.lat, new Date().getMonth());
	const { text, seasonIcon } = seasonConfig[season];

	return (
		<div className={`season-display ${season}`}>
			<i className={`icon-left massive ${seasonIcon} icon `}></i>
			<h1>{text}</h1>
			<i className={`icon-right massive ${seasonIcon} icon `}></i>
		</div>
	);
};

export default SeasonDisplay;
