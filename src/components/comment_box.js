
import React, { Component } from 'react';
import {connect} from 'react-redux';
import  * as actions from '../actions/index';
import {bindActionCreators} from 'redux';

 class CommentBox extends Component {
    constructor(props){
        super(props)
        this.state = {comment:''}
        this.__handleChange = this.__handleChange.bind(this);
        this.__handleSubmit = this.__handleSubmit.bind(this);
    }
    __handleChange(e){
        e.preventDefault();
        this.setState({comment:e.target.value});
    }

    __handleSubmit(e){
        e.preventDefault();
        this.props.actions.saveComment(this.state.comment)
        this.setState({comment:''})
    }
  render() {
    return (
      <form onSubmit={this.__handleSubmit} className='comment-box'>
      <h1>Add Comment</h1>
        <textarea value={this.state.comment} onChange={this.__handleChange}/>
        <div>
        <button action='submit'>Submit Comment</button>
        </div>
        
      </form>
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions:bindActionCreators(actions,dispatch)
  }
}

export default connect(null,mapDispatchToProps)(CommentBox)