import React from 'react';

import Lander from '../assets/images/Landing.jpeg'

function Landing() {



  return (

<div>

  <img src={Lander}/>

    <div className='text'>
      <p>WELCOME TO OUR SPACE</p>
      <h1>Powered by People</h1>
      <hr/>
    </div>


    <style jsx>{`
        img {
          max-height: 660px;
          width: 100%;
          position: static;


        }

        .text {
          // width: 60%;
          // margin: 0 auto;
          position: absolute;
          color: white;
          bottom: 750px;
          left: 7em;
        }

        p {
          color: whitesmoke;
          font-size: 18px;

        }


        `}</style>
    </div>
  )
}

export default Landing;
