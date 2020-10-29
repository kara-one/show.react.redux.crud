import {
    CHANGE_LOADING_RECIPES,
    CREATE_RECIPE,
    DELETE_RECIPE,
    ID_ITEM_DELETE,
    PAGE_RECIPES,
    REQUEST_POSTS,
    STATE_MODAL_CREATE,
    STATE_MODAL_DELETE,
    UPDATE_RECIPE,
} from './types';

export function fetchRecipes(page) {    
    return {
        type: REQUEST_POSTS,
        page: page
    };
}

export function createRecipe(recipe) {
    return {
        type: CREATE_RECIPE,
        payload: recipe,
    };
}

export function updateRecipe(recipe) {
    return {
        type: UPDATE_RECIPE,
        payload: recipe,
    };
}

export function deleteRecipe(recipeId) {
    return {
        type: DELETE_RECIPE,
        payload: recipeId,
    };
}

export function showModalCreate(status) {
    return {
        type: STATE_MODAL_CREATE,
        payload: status,
    };
}

export function showModalDelete(status) {
    return {
        type: STATE_MODAL_DELETE,
        payload: status,
    };
}

export function setIdItemDelete(status) {
    return {
        type: ID_ITEM_DELETE,
        payload: status,
    };
}

export function changeLoadingRecipes(status) {
    return {
        type: CHANGE_LOADING_RECIPES,
        payload: status,
    };
}

export function incrementPageRecipes() {
    return {
        type: PAGE_RECIPES,
    };
}
