import { CREATE_POST, DELETE_POST, SHOW_MODAL_CREATE, UPDATE_POST } from './types';

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