/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
