import {
    CREATE_RECIPE,
    DELETE_RECIPE,
    FETCHED_RECIPES,
    ID_ITEM_DELETE,
    STATE_MODAL_CREATE,
    STATE_MODAL_DELETE,
    UPDATE_RECIPE,
} from './types';

export function fetchedRecipes() {
    return async (dispatch) => {
        // &_page=XX
        const responce = await fetch(
            'https://jsonplaceholder.typicode.com/posts?_limit=5',
        );
        const json = await responce.json();
        
        dispatch({ type: FETCHED_RECIPES, payload: json });
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

export function showModalCreate(state) {
    return {
        type: STATE_MODAL_CREATE,
        payload: state,
    };
}

export function showModalDelete(state) {
    return {
        type: STATE_MODAL_DELETE,
        payload: state,
    };
}

export function setIdItemDelete(state) {
    return {
        type: ID_ITEM_DELETE,
        payload: state,
    };
}
