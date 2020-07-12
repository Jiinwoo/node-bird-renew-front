import { call, put } from "@redux-saga/core/effects";

export class SagaHelper {
	static fetchEntity = (entity, apiFn) => {
		return function* (...params) {
			try {
				const data = yield call(apiFn, ...params);
				yield put(entity.success(data));
			} catch (err) {
				console.error(err);
				yield put(entity.failure());
			}
		};
	};
}
