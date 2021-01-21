import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Components
import Champions from './components/champions/Champions';

const App = () => {
	return (
		<Router>
			<Fragment>
				<Switch>
					<Route exact path='/champions' component={Champions} />
				</Switch>
			</Fragment>
		</Router>
	);
};

export default App;
