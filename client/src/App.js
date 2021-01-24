import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Components
import ChampionsList from './components/champions/ChampionList';

const App = () => {
	return (
		<Router>
			<Fragment>
				<Switch>
					<Route exact path='/champions' component={ChampionsList} />
				</Switch>
			</Fragment>
		</Router>
	);
};

export default App;
