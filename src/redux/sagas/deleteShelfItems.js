import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';



function* deleteItems(action) {
    console.log('in deleteItem');
    console.log('deleteItem Id is:', action.payload);
    try {
        yield axios.delete(`/api/shelf/${action.payload}`, action.payload);
        yield put({
            type: 'GET_ITEMS'
        });
    } catch (error) {
        console.log('ERROR IN SAGA DELETE', error);
        alert(`Sorry! Was unable to delete the item. Try again later`);
    }
}


function* deleteShelfItemsWatcher() {
    yield takeLatest('DELETE_ITEMS', deleteItems);
}

export default deleteShelfItemsWatcher;