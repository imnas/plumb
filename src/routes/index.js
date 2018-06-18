import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './landing';

export default() => (
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={Landing}/>
		</Switch>
	</BrowserRouter>
);