import { SAVE_COMMENT } from '../../src/actions/types';
import { expect } from '../test_helper';
import {saveComment} from '../../src/actions/index';

describe('Actions', () => {
    describe('save comment', () => {
        it('should have the correct type', () => {
            let action  = saveComment();
            expect(action.type).to.be.equal(SAVE_COMMENT);
            
        });
        it('should have the correct payload', () => {
            let action  = saveComment('new comment');
            expect(action.payload).to.be.equal('new comment')
        });
      
    })
    
  
})
