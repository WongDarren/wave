import React, { Fragment } from 'react';
import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
	return (
		<Provider store={store}>
			<Fragment>
				<div>
					<h1>hello</h1>
				</div>
			</Fragment>
		</Provider>
	);
};

export default App;
