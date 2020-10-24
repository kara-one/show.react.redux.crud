import { cardsReducer } from './cardsReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    cards: cardsReducer,
});
