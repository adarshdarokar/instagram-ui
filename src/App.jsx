import React from 'react';
import Main from './screens/Main';
import SideNav from './screens/SideNav';
import './App.css';

const App = () => {
  return (
    <>
      <div className='flex bg-black'>
        {/* Sirf desktop pe dikhane ke liye */}
        <div className="hidden md:block">
          <SideNav />
        </div>
        <Main />
      </div>
    </>
  );
};

export default App;
