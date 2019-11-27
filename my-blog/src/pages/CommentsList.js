import React, {Component} from 'react';

export class CommentsList extends Component {
    render() {
        return this.props.comments.map((comment, key)=> {
           return (
                <div className="comment" key={key}>
                    <h4>{comment.username}</h4>
                    <p>{comment.text}</p>
                </div>
            )
        })
    }
}