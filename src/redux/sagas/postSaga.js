import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// GET Projects List
function* postSaga( action ) {
  console.log( 'Hit the postSaga', action );
  try {
    yield axios.post( '/api/shelf', action.payload );
    console.log( 'POST items response:', action.payload );
    // reset action to match items reducer | send list of items
    action = { type: 'GET_ITEMS'};
    // dispatch action to items reducer to update list of items
    yield put( action );
  }
  catch ( error ) {
    console.log( `Couldn't get items`, error );
    alert( `Sorry, couldn't get the items. Try again later` );
  }
}

function* postSagaWatcher() {
  yield takeLatest('POST_ITEMS', postSaga);
}

export default (postSagaWatcher);