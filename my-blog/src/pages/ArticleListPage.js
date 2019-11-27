import React, {Component} from 'react';
import articles from './article-content';
import { ArticlesList } from '../components/ArticlesList';

export class ArticleListPage extends Component {
    render() {
        return (
            <ArticlesList articles={articles}></ArticlesList>   
        )
    }
}