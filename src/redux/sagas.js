import { FETCHED_RECIPES, REQUEST_POSTS } from './types';
import { call, put, takeLatest } from 'redux-saga/effects';
import { changeLoadingRecipes, incrementPageRecipes } from './actions';

export function* sagaWatcher() {
    yield takeLatest(REQUEST_POSTS, sagaWorker);
}

function* sagaWorker(action) {
    try {
        yield put(changeLoadingRecipes(true));
        const payload = yield call(fetchPosts, action.page);
        yield put({ type: FETCHED_RECIPES, payload });
        yield put(changeLoadingRecipes(false));
        yield put(incrementPageRecipes());
    } catch (error) {
        // yield put(showAlert(`Error: ${error}`));
        yield put(changeLoadingRecipes(false));
    }
}

async function fetchPosts(page) {
    const responce = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`,
    );
    return await responce.json();
}
