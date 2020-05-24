import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Headline from '../Headline/Headline';
import ArticleWrapper from '../Article/ArticleWrapper';
import './MainPage.scss';

function MainPage(props) {
  return (
    <div className="mainPage">
      <Header />
      <Sidebar />
      <Headline />
      <ArticleWrapper />
    </div>
  );
}

export default MainPage;
