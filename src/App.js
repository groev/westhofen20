import React, { useLayoutEffect, useState } from 'react';
import './styles/index.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
	Header,
	Container,
	Chat,
	Portfolio,
	Footer,
	Loader,
} from './components';

function App() {
	const [isLoading, setIsLoading] = useState(true);
	useLayoutEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 2500);
	}, []);
	return (
		<BrowserRouter>
			{!isLoading ? (
				<div className="App">
					<Header />
					<Container>
						<Switch>
							<Route path="/portfolio" component={Portfolio} />
							<Route path="/chat/:slug/:status" component={Chat} />
							<Route path="/chat/:slug/" component={Chat} />
							<Chat />
						</Switch>
					</Container>
					<Footer />
				</div>
			) : (
				<Loader />
			)}
		</BrowserRouter>
	);
}

export default App;
