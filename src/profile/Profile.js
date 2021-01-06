import React from "react";
import PropTypes from "prop-types";
function Profile(props) {

  return (
    <div style={{color:"yellow",textAlign:"center"}}>
      <h3><div style={{ color: 'white' }}>Name:</div> {props.name}</h3><hr/>
      <h3><div style={{ color: 'white' }}>Profession:</div>  {props.prof}</h3>
      <p><div style={{color:'white'}}><h3>Bio:</h3></div> {props.bio} </p>
      <button  className="btn btn-warning" onClick={props.fn}>check</button>
    
    </div>
  );
}

export default Profile;

Profile.defaultProps = {
  name:"Amine",prof:"auteur",bio:"Évitez les références religieuses ou politiques. Ne mentionnez pas non plus votre famille. En effet, il est peu professionnel de dire que l'on est marié et que l'on a trois enfants dans"
 };

 Profile.prototype={
  name: PropTypes.string,
  prof: PropTypes.string,
  bio: PropTypes.string,

 }