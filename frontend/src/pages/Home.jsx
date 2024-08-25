// Home.js
import React from 'react';
import Page1 from '../components/Home/Page1';
import Page2 from '../components/Home/Page2';

const Home = () => {
  return (
    <div>
      <Page1/>
      <div className='d-flex justify-content-center align-items-center my-3'>
        <h1>Latest Blogs</h1>
      </div>
      <Page2/>
    </div>
  );
};

export default Home;
