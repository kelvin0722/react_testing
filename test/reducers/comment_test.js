import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comment';
import {SAVE_COMMENT} from '../../src/actions/types';

describe('Comment Reducer', () => {

    it('should handle action of unknown type', () => {
        expect(commentReducer(undefined,{})).to.be.instanceof(Array);
    });
    it('should handle action of SAVE_COMMENT ', () => {
        const action = {type:SAVE_COMMENT,payload:'new comment'}; 
        const commentAction = commentReducer([],action);
        expect(commentAction).to.be.eql(['new comment'])
        
    });
  
})
