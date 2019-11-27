import React, {Component} from 'react';

export class UpvoteSection extends Component {
    constructor() {
        super();
        this.upvoteArticle = this.upvoteArticle.bind(this);
    }
    upvoteArticle() {
        fetch(`/api/articles/${this.props.article.name}/upvote`, {
            method: 'post',
        });
    }
    render() {
        return (
            <div id="upvote-section">
                <button onClick={this.upvoteArticle}>Upvote</button>
                <p>This post has been upvoted {this.props.upvotes} times</p>
            </div>
        )
    }
}