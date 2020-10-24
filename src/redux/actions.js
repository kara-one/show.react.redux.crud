import { CREATE_POST, UPDATE_POST } from './types';

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