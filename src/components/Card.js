import React from 'react';
import './card.css';

const Card = ({name,id,email,address,username}) => {

    return(
        
 <div id='container'  className='tc dib br3 ma3 pa1 grow shadow-5'>
     
      <img id='image'   src={`https://robohash.org/${id}`} alt="robo"/>
      <div>
     <h2 style={{ color: '#7ed5e7'}}>{name}</h2>
    <p>{email}</p>
 </div>
<div id='overlay'>
     <div id='heading'>
     <h2>{name}</h2>
    <p>{email}</p>
 </div>
 </div>
 </div>
    );
   
}

export default Card;
