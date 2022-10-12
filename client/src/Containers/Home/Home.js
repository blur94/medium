import React from 'react';
import Nav from '../../Helpers/Nav';
import AHomeSidebar from './AHomeSidebar';
import Homebody from './Homebody';

function Home() {
  return (
    <div>
      <div className="split-home">
        <div className="home1">
          <Nav />
        </div>
        <div className="home2">
          <Homebody />
        </div>
        <div className="home3">
          <AHomeSidebar />
        </div>
      </div>
    </div>
  );
}

export default Home;