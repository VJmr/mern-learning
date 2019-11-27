import React, {Component} from 'react';
import {
    Link
  } from 'react-router-dom';

export class ArticlesList extends Component {
    render() {
        let articles = this.props.articles;
        return (
                articles.map((item, key) => {
                    return (
                        <Link className="article-list-item" key={key} to={`/article/${item.name}`}>
                            <h3>{item.name}</h3>
                            <p>{item.content[0].substring(0,150)}...</p>
                        </Link>
                    )
                })
              
        )
    }
}