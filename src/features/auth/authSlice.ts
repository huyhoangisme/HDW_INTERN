import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'models';

export interface PayLoadState {
	email?: string;
	password?: string;
}
export interface authState {
	isLoggedIn: boolean;
	logging: boolean;
	userInfo?: User;
}

const initialState: authState = {
	isLoggedIn: false,
	logging: false,
	userInfo: undefined,
};
export const authSlice = createSlice({
	name: 'auth',
	initialState: initialState,
	reducers: {
		login(state, actions: PayloadAction<PayLoadState>) {
			state.isLoggedIn = false;
			state.logging = true;
		},
		loginSucces(state, actions: PayloadAction<User>) {
			state.isLoggedIn = true;
			state.logging = false;
			state.userInfo = actions.payload;
		},
		loginFailed(state, actions: PayloadAction<string>) {
			state.isLoggedIn = false;
			state.logging = false;
		},
		logOut(state) {
			state.isLoggedIn = false;
			state.userInfo = undefined;
		},
	},
});

// actions
export const authActions = authSlice.actions;
// selector
export const authSelectorLoginedIn = (state: authState) => state.isLoggedIn;
export const authSelectorUserInfo = (state: authState) => state.userInfo;
// reducers

const authReducer = authSlice.reducer;
export default authReducer;
