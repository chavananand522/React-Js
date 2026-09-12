import React from 'react';
import './Header.css';
import im from '../images/ss.jpeg';

const Header = () => {
  return (
    <div className="ab">
      <h5>Header Section</h5>

      {/* Online Image */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP9J5MY-KtK-6YZA2VccpymCFyJSbVm39k2BFsq3Kn_A&s=10"
        alt="Header"
      />

      <br /> <br />
      {/* Offline Image */}
      <img src={im} alt="Header" width='500px' height='300px' />
    </div>
  );
};

export default Header;