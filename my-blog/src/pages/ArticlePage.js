import React, {Component} from 'react';
import articles from './article-content';
import { ArticlesList } from '../components/ArticlesList';
import { CommentsList } from '../pages/CommentsList';
import { UpvoteSection } from '../components/UpvoteSection';
import { AddCommentForm } from '../components/AddCommentForm';

export class ArticlePage extends Component {
    constructor() {
        super();
        this.state = {
            articleInfo: {
                upvotes: 0,
                comments: []
            }
        }
        this.getArticleInfo = this.getArticleInfo.bind(this);
    }

    componentDidMount() {
       this.getArticleInfo();
    }

    componentDidUpdate() {
        this.getArticleInfo();
    }

    getArticleInfo() {
        fetch(`/api/articles/${this.props.match.params.name}`)
        .then(response => response.json())
        .then(result=> {
            this.setState({
                articleInfo: result
            })
        })
    }

    
    render() {
        let selectedItem = articles.find((item) => {
            return item.name === this.props.match.params.name
        })
        if(!selectedItem) return <h1>Article doesn't exist</h1>
        let otherArticles = articles.filter(article => article.name !== this.props.match.params.name);
        return (
            <div>
                <h1>{selectedItem.title}</h1>
                <p>upvotses {this.state.articleInfo.upvotes}</p>
                <p>
                    {selectedItem.content}
                </p>
                <UpvoteSection article={selectedItem} upvotes={this.state.articleInfo.upvotes}></UpvoteSection>
                <CommentsList comments={this.state.articleInfo.comments}> </CommentsList>
                <AddCommentForm article={selectedItem}></AddCommentForm>
                <h3>Other Articles</h3>
                <ArticlesList articles={otherArticles}></ArticlesList>
            </div>
        )
    }
}