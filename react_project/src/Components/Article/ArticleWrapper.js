import React from 'react';
import Article from './Article';
// import axios from 'axios';
import './ArticleWrapper.scss';

class ArticleWrapper extends React.Component {
  state = { articles: null };

  getArticleData() {
    // const response = await axios.get('http://simplePage.com/api/articles');
    const response = [
      { title: 'Corona', content: 'Corona related content' },
      { title: 'Hong kong', content: 'Hong kong related content' },
      { title: 'Trump', content: 'Trump related content' },
      { title: 'Flooding', content: 'Flooding related content' },
    ];

    this.setState({ articles: response });
  }

  componentDidMount() {
    this.getArticleData();
  }

  render() {
    let content = null;
    if (this.state.articles != null) {
      content = this.state.articles.map((article) => {
        return <Article title={article.title} content={article.content} />;
      });
    }
    return <div className="articleWrapper">{content}</div>;
  }
}

export default ArticleWrapper;
