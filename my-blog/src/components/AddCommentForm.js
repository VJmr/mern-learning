import React, {Component}  from 'react';

export class AddCommentForm extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            text: ''
        }
        this.addComment = this.addComment.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    addComment() {
        fetch(`/api/articles/${this.props.article.name}/add-comment`, {
            method: 'post',
            body: JSON.stringify({ username: this.state.username, text: this.state.text }),
        })
    }
    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div id="add-comment-form">
                <h3>Add a Comment</h3>
                <label>
                    Name:
                    <input name="username" type="text" value={this.state.username} onChange = {this.handleChange}/>
                </label>
                <label>
                    Comment:
                    <textarea name="text" rows="4" cols="50" value={this.state.text} onChange = {this.handleChange}/>
                </label>
                <button onClick={this.addComment}>Add Comment</button>
            </div>
        )
    }
}