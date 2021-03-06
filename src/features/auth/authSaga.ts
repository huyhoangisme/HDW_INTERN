import { PayloadAction } from '@reduxjs/toolkit';
import { call, fork, put, take } from 'redux-saga/effects';
import { authActions, PayLoadState } from './authSlice';
export function* handleLogin(payload: PayLoadState) {
	try {
		// call api login;
		localStorage.setItem('accessToken', 'abcxyz');
		
	} catch (error:any) {
		yield put(authActions.loginFailed(error.message));
		return false;
	}
}
export function* handleLogOut() {
	localStorage.removeItem('accessToken');
	yield put(authActions.logOut);
}
function* handleLoginFlow() {
	while (true) {
		const isLoggedIn = localStorage.getItem('accessToken');
		if (isLoggedIn) {
			yield take(authActions.logOut.type);
			yield fork(handleLogOut);
		}
		const action: PayloadAction<PayLoadState> = yield take(authActions.login.type);
		yield call(handleLogin, action.payload);
	}
}

export default function* authSage() {
	yield call(handleLoginFlow);
}
