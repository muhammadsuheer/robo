import React from 'react';
import Card from './Card';

const Cardlist= ({arra}) => {
 

    return(
        <div>
            { 
 arra.map((user,i) =>{
     return <Card 
             key={i} 
             id={arra[i].id}
             name={arra[i].name}
             email={arra[i].email}
             

             />
    })
    }

        </div>
    );
}
export default Cardlist;