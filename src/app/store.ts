import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import authReducer from 'features/auth/authSlice';
import { dashboardReducer } from 'features/dashboard/dashboardSlice';
import createSagaMiddleware from 'redux-saga';
import counterReducer from '../features/counter/counterSlice';
import { history } from '../utils';
import rootSaga from './rootSaga';
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
	router: connectRouter(history),
	counter: counterReducer,
	auth: authReducer,
	dashboard:dashboardReducer
});
export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: true,
		}).concat(sagaMiddleware, routerMiddleware(history)),
	devTools: true,
});

sagaMiddleware.run(rootSaga);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
