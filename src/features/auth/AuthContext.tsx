import userApi, { loginState } from 'api/userApi';
import { User } from 'models';
import React, { createContext, useEffect, useState } from 'react';

type AuthContextProviderProps = {
	children: React.ReactNode;
};

export interface AuthState {
	accessToken: String;
	userInfo: User;
}
export interface UserContext {
	isLoggedIn: Boolean;
	accessToken: String;
	userInfo: User | null;
	login: (data: loginState) => void;
	logOut: () => void;
}
const AuthContext = createContext<UserContext>({
	isLoggedIn: false,
	accessToken: '',
	userInfo: {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		gender: 'male',
		phone: '',
	},
	login: (data: loginState) => {},
	logOut: () => {},
	
});
const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
	let [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);
	let [userInfo, setUserInfo] = useState<User | null>(null);
	let [accessToken, setAccessToken] = useState<String>('');
	useEffect(() => {
		const checkUserIsLogin = async () => {
			const id = window.sessionStorage.getItem('id');
			const { errorCode, data } = await userApi.getUserById(id as string);
			if (errorCode === 0) {
				let { user, accessToken } = data;
				setIsLoggedIn(true);
				setUserInfo(user);
				setAccessToken(accessToken);
				localStorage.setItem('accessToken', accessToken as string);
			}
		};
		checkUserIsLogin();
	}, []);

	const handleLogin = async (dataLogin: loginState) => {
		let { errorCode, data } = await userApi.login(dataLogin);
		if (errorCode === 0) {
			let { user, accessToken } = data;
			setIsLoggedIn(true);
			setAccessToken(accessToken);
			setUserInfo(user);
			localStorage.setItem('accessToken', data.accessToken as string);
			window.sessionStorage.setItem('id', `${data.user.id}`);
		} else {
			alert('Login Failed!!!');
		}
	};
	const handleLogOut = () => {
		localStorage.setItem('accessToken', '');
		window.sessionStorage.setItem('id', '');
		setIsLoggedIn(false);
		setUserInfo(null);
		setAccessToken('');
	};
	const AuthContextValue = {
		isLoggedIn,
		accessToken,
		userInfo,
		login: handleLogin,
		logOut: handleLogOut
	};

	return <AuthContext.Provider value={AuthContextValue}>{children}</AuthContext.Provider>;
};
export { AuthContext, AuthContextProvider };
