import { AuthContext } from 'features/auth/AuthContext';
import { useContext, useEffect, useState } from 'react';
import { Redirect, Route, RouteProps, useRouteMatch } from 'react-router-dom';


export const PrivateRoute = (props: RouteProps) => {
	console.log('check props  private route', props);
	const {path,url} = useRouteMatch();
	console.log(path, url);
	const authContext = useContext(AuthContext);
	let authLogin = authContext.isLoggedIn;
	const setLogin =(isLoggedIn:Boolean) => {
		if(isLoggedIn) return <Route { ...props}/>
		return <Redirect to="/login" />
	}
	useEffect(() => {
		const checkTimeOutLogin = setTimeout(() => {
			authLogin = authContext.isLoggedIn;
			setLogin(authLogin);
		}, 2000);
		return () => clearTimeout(checkTimeOutLogin);
	}, []);
	return (
		setLogin(authLogin)
	);
};
