import {SAVE_COMMENT} from './types';


export const saveComment = (comment) =>{
    console.log('saving comment');
    return {
        type:SAVE_COMMENT,
        payload:comment
    }
}