import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// GET Projects List
function* getShelfItems( action ) {
  console.log( 'Hit the getShelfItems saga', action );
  try {
    const getResponse = yield axios.get( '/api/shelf' );
    console.log( 'GET items response:', getResponse );
    // reset action to match items reducer | send list of items
    action = { type: 'SET_ITEMS', payload: getResponse.data };
    // dispatch action to items reducer to update list of items
    yield put( action );
  }
  catch ( error ) {
    console.log( `Couldn't get items`, error );
    alert( `Sorry, couldn't get the items. Try again later` );
  }
}

export default getShelfItems;