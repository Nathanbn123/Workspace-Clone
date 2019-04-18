import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png'


function Header(){
  return (
    <div className='Container'>

      <img src={Logo}/>

    <div className='Nav'>
        <a href='#'>TOUR</a>
        <a href='#'>EMAIL</a>
        <a href='#'>SUPPORT</a>
      </div>

      <div className='Butts'>
      <button>Log In</button>
      <button>Get Started</button>
      </div>

      <style jsx>{`
          .Container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            position: absolute;
            background-color: rgb(0, 0, 0, 0.5);
            width: 100%;
          }

          img {
            max-width: 245px;
            margin-left: 1em;
          }

          a {
            padding: 0 15px;
            text-decoration: none;
            color: white;
          }

          button {
            background: transparent;
            border: 1px solid white;
            color: white;
            width: 12em;
            height: 3em;
            margin-right: 1em;



          }



        `}</style>
    </div>
  );
}

export default Header;
