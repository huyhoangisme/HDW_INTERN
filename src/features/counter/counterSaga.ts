import { takeEvery, delay, put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { incrementSaga, incrementSagaSuccess } from './counterSlice';
function* handleCountSaga(action: PayloadAction<number>) {
	yield delay(1000);
	yield put(incrementSagaSuccess(action.payload));
}
export default function* counterSaga() {
    console.log(incrementSaga.toString());
	yield takeEvery(incrementSaga.toString(), handleCountSaga);
}
