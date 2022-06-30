import userApi, { loginState } from 'api/userApi';
import { User } from 'models';
import React, { createContext, useContext, useEffect, useState } from 'react';

type AuthContextProviderProps = {
	children: React.ReactNode;
};

export interface UserContext {
	isLoggedIn: boolean;
	accessToken: string;
	userInfo: User | null;
	loading: boolean;
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
	loading: true,
	login: (data: loginState) => {},
	logOut: () => {},
});
const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
	let [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
	let [loading, setLoading] = useState<boolean>(true);
	let [userInfo, setUserInfo] = useState<User | null>(null);
	let [accessToken, setAccessToken] = useState<string>('');

	useEffect(() => {
		const checkUserIsLogin = async () => {
			const id = window.sessionStorage.getItem('id');
			if (!id) {
				setLoading(false);
				return;
			}
			const { errorCode, data } = await userApi.getUserById(id);
			if (errorCode === 0) {
				let { user, accessToken } = data;
				setIsLoggedIn(true);
				setUserInfo(user);
				setAccessToken(accessToken);
				localStorage.setItem('accessToken', accessToken);
				setLoading(false);
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
			localStorage.setItem('accessToken', data.accessToken);
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
	const authContextValue = {
		isLoggedIn,
		accessToken,
		userInfo,
		loading,
		login: handleLogin,
		logOut: handleLogOut,
	};
	return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};
const useAuthContext = () => {
	return useContext(AuthContext);
};
export { useAuthContext, AuthContextProvider };
