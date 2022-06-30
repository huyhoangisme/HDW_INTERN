
import { AuthContextProvider } from 'features/auth/authContext';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './app/store';

import './index.css';
const renderApp = () => {
	ReactDOM.render(
		<Provider store={store}>
			<BrowserRouter>
			{/* dung props custom api */}
				<AuthContextProvider >
					<App />
				</AuthContextProvider>
			</BrowserRouter>
		</Provider>,
		document.getElementById('root')
	);
};

renderApp();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
