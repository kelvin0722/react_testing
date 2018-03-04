import {renderComponent, expect} from '../test_helper';
import App from '../../src/components/app';

// use 'describe' to group similar tests together
describe('<App>', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(App);
  });
  it('should show a comment box', () => {
    //use to make an 'assertion' about a target
    expect(component.find('.comment-box')).to.exist
  });
it('should have comment list', () => {
  expect(component.find('.comment-list')).to.exist
});
});