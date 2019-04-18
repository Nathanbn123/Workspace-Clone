import React from 'react';
import PropTypes from 'prop-types';


function CenterNav() {




  return(
    <div className='container'>


  <div className='midNav'>
      <a>About Us</a>
      <a>Our Team</a>
      <a>Careers</a>
      <a>Locations</a>
  </div>

    <hr/>







      <style jsx>{`
        .container {
          width: 100%;
          height: 3em;
          margin-bottom: 15em;
        }


      .midNav {
        display: flex;
        justify-content: center;

        margin: 1em;
      }

      a {
        padding: 2em;
      }

        `}</style>
    </div>
  );
}




export default CenterNav;
