import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* getCount( action ) {
  try {
    console.log( 'Hit the getCount saga', action );
    const getResponse = yield axios.get( '/api/shelf/count' );
    console.log( 'GET items response:', getResponse );

    yield put({ type: 'SET_COUNT', payload: getResponse.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* getCountSaga() {
  yield takeLatest('GET_COUNT', getCount);
}

export default getCountSaga;