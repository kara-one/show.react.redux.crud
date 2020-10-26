import {
    CREATE_POST,
    DELETE_POST,
    FETCHED_POSTS,
    ID_ITEM_DELETE,
    SHOW_MODAL_CREATE,
    SHOW_MODAL_DELETE,
    UPDATE_POST,
} from './types';

const initState = {
    showModalCreate: false,
    showModalDelete: false,
    idItemDelete: 0,
    fetchedPosts: [],
    cards: [...Array(10)].map((item, index) => ({
        postId: (index + Date.now()).toString(),
        postImg: `/images/${index + 1}.jpg`,
        postTitle: `Recipe Number-${index + 1}`,
        postPrice: index + 1,
        postDescription: `Some quick example text to build on the card title and make up the bulk of the card's content.${
            index + 1
        }`,
    })),
    emptyCard: {
        postId: (1000 + Date.now()).toString(),
        postImg: '',
        postTitle: '',
        postPrice: 0,
        postDescription: '',
    },
};

const random = (max) => Math.floor(Math.random() * Math.floor(max));

export const cardsReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCHED_POSTS:
            const payload = action.payload.map((item) => ({
                postId: (item.id + Date.now()).toString(),
                postImg: `/images/${random(10)}.jpg`,
                postTitle: item.title,
                postPrice: random(100),
                postDescription: item.body,
            }));
            
            return {
                ...state,
                cards: state.cards.concat(payload),
            };
        case CREATE_POST:
            return {
                ...state,
                cards: state.cards.concat(action.payload),
                // cards: [...state.cards, action.payload]
            };
        case UPDATE_POST:
            return {
                ...state,
                cards: state.cards.map((item) =>
                    item.postId === action.payload.postId
                        ? action.payload
                        : item,
                ),
            };
        case DELETE_POST:
            return {
                ...state,
                cards: state.cards.filter(
                    (item) => item.postId !== action.payload,
                ),
            };
        case SHOW_MODAL_CREATE:
            return {
                ...state,
                showModalCreate: action.payload,
            };
        case SHOW_MODAL_DELETE:
            return {
                ...state,
                showModalDelete: action.payload,
            };
        case ID_ITEM_DELETE:
            return {
                ...state,
                idItemDelete: action.payload,
            };
        default:
            return state;
    }
};
