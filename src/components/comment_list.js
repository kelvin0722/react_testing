import React, { Component } from 'react';
import {connect} from 'react-redux';


const CommentList = ({comments}) =>(
    <ul className="comment-list">
        {comments.map((comment,index)=><li key={index}>{comment}</li>)}
    </ul>
)
const mapStateToProps = (state, ownProps) => {
    return {
        comments: state.comments
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () => {
            dispatch()
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (CommentList);
