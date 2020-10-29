import * as yup from 'yup';

import {
    CHANGE_LOADING_RECIPES,
    CREATE_RECIPE,
    DELETE_RECIPE,
    FETCHED_RECIPES,
    ID_ITEM_DELETE,
    PAGE_RECIPES,
    STATE_MODAL_CREATE,
    STATE_MODAL_DELETE,
    UPDATE_RECIPE,
} from './types';

const initState = {
    stateModalCreate: false,
    stateModalDelete: false,
    stateLoadingRecipes: false,
    pageRecipes: 1,
    idItemDelete: 0,
    fetchedRecipes: [],
    staticRecipes: [...Array(10)].map((item, index) => ({
        recipeId: (index + Date.now()).toString(),
        recipeImg: `/images/${index + 1}.jpg`,
        recipeTitle: `Recipe Number-${index + 1}`,
        recipePrice: index + 1,
        recipeDescription: `Some quick example text to build on the card title and make up the bulk of the card's content.${
            index + 1
        }`,
    })),
    emptyRecipe: {
        recipeId: (1000 + Date.now()).toString(),
        recipeImg: '',
        recipeTitle: '',
        recipePrice: 0,
        recipeDescription: '',
    },
    validationRecipe: yup.object({
        recipeImg: yup.string().required(),
        recipeTitle: yup.string().required(),
        recipePrice: yup.number().required().positive().integer(),
        recipeDescription: yup.string().required(),
    }),
};

const random = (max) => Math.floor(Math.random() * Math.floor(max));

export const recipesReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCHED_RECIPES:
            const payload = action.payload.map((item) => ({
                recipeId: (item.id + Date.now()).toString(),
                recipeImg: `/images/${random(10)}.jpg`,
                recipeTitle: `#${item.id}: ${item.title}`,
                recipePrice: random(100),
                recipeDescription: item.body,
            }));

            return {
                ...state,
                fetchedRecipes: state.fetchedRecipes.concat(payload),
            };
        case CREATE_RECIPE:
            return {
                ...state,
                fetchedRecipes: state.fetchedRecipes.concat(action.payload),
                // fetchedRecipes: [...state.fetchedRecipes, action.payload]
            };
        case UPDATE_RECIPE:
            return {
                ...state,
                fetchedRecipes: state.fetchedRecipes.map((item) =>
                    item.recipeId === action.payload.recipeId
                        ? action.payload
                        : item,
                ),
            };
        case DELETE_RECIPE:
            return {
                ...state,
                fetchedRecipes: state.fetchedRecipes.filter(
                    (item) => item.recipeId !== action.payload,
                ),
            };
        case STATE_MODAL_CREATE:
            return {
                ...state,
                stateModalCreate: action.payload,
            };
        case STATE_MODAL_DELETE:
            return {
                ...state,
                stateModalDelete: action.payload,
            };
        case ID_ITEM_DELETE:
            return {
                ...state,
                idItemDelete: action.payload,
            };
        case CHANGE_LOADING_RECIPES:
            return {
                ...state,
                stateLoadingRecipes: action.payload,
            };
        case PAGE_RECIPES:
            return {
                ...state,
                pageRecipes: state.pageRecipes + 1,
            };
        default:
            return state;
    }
};
