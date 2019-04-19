import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import getShelfItems from './getShelfItems';
import postSaga from './postSaga';
import deleteItems from './deleteShelfItems';
import getCountSaga from './getCountSaga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    getShelfItems(),
    postSaga(),
    deleteItems(),
    getCountSaga(),
  ]);
}
