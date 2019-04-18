import React from 'react';
import PropTypes from 'prop-types';


function OurTeam(props) {

  return (
    <div>
      <img src={require(`../assets/images/${props.url}`)}></img>
      <h2>{props.name}</h2>
      <p className='jobTitle'>{props.job}</p>
      <p>{props.description}</p>


      <style jsx> {`
        div {
          width: 40%;
          height: auto;
          margin: auto;
        }

        img {
          width: 40%;
          float: left;
          margin-top: 1.5em;
          margin-bottom: 12em;
          padding-right: 2em;
          white-space: nowrap;
        }


        .jobTitle {
          color: grey;

        }

        p {
          font-size: 14px;
        }





      `}</style>




  </div>

  );
}

  OurTeam.propTypes = {
    url: PropTypes.string,
    name: PropTypes.string,
    job: PropTypes.string,
    description: PropTypes.string

  }

export default OurTeam;
