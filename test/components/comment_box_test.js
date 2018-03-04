import {renderComponent,expect} from '../test_helper';
import CommentBox from '../../src/components/comment_box';
import comment_box from '../../src/components/comment_box';

describe('<CommentBox>', () => {   
    let component = null;
    beforeEach(() => {
         component = renderComponent(CommentBox);
    });
    it('should have the correct class', () => {
        expect(component).to.have.class('comment-box')
    });
    
    it('should have a text area', () => {
       expect(component.find('textarea')).to.exist 
    });
    it('should have button', () => {
        expect(component.find('button')).to.exist
    });
    it('should have header tag',()=>{
        expect(component.find('h1')).to.exist
    });
   
    
    describe('Text Area', () => {
        beforeEach(() => {
            component.find('textarea').simulate('change','new comment');
        });
        it('should have initial text', () => {
            expect(component.find('textarea')).to.have.value('new comment');
            
        });
        it('should clear input when submitted', () => {
            component.simulate('submit');
            expect(component.find('textarea')).to.have.value('');

        });
      
    })
    
  
});