import React from 'react';
//Comtonents and pages
import Home from './pages/Home';
import GlobalStyles from './components/GlodalStyles';
import { Route } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<GlobalStyles />
			<Route path={['/game/:id', '/']}>
				<Home />
			</Route>
		</div>
	);
}

export default App;
