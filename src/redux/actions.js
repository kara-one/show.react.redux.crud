import {
    CREATE_POST,
    DELETE_POST,
    ID_ITEM_DELETE,
    SHOW_MODAL_CREATE,
    SHOW_MODAL_DELETE,
    UPDATE_POST,
} from './types';

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function updatePost(post) {
    return {
        type: UPDATE_POST,
        payload: post,
    };
}

export function deletePost(postId) {
    return {
        type: DELETE_POST,
        payload: postId,
    };
}

export function showModalCreate(state) {
    return {
        type: SHOW_MODAL_CREATE,
        payload: state,
    };
}

export function showModalDelete(state) {
    return {
        type: SHOW_MODAL_DELETE,
        payload: state,
    };
}

export function idItemDelete(state) {
    return {
        type: ID_ITEM_DELETE,
        payload: state,
    };
}