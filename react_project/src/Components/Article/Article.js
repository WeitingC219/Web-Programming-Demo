import React from 'react';
import './Article.scss';

function Article(props) {
  return (
    <div className="article">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}

export default Article;
