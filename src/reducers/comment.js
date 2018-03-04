
import {SAVE_COMMENT} from '../actions/types';
const initialState = []

const commentReducer = (state = initialState,action) => {
    switch (action.type) {
        case SAVE_COMMENT:
            return [...state,action.payload]
            break;
    
        default:
            break;
    }

    return state;

}

export default commentReducer;