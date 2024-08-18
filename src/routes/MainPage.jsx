import React from 'react';
import Tab from '../components/Tab';
import Posts from '../components/Posts';

const MainPage = () => {
  return (
    <div className="flex w-full h-screen">
      <Tab />
      <Posts />
    </div>
  );
};

export default MainPage;
