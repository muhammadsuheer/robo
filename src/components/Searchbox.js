import React from 'react';

const Searchbox = ({ searchChange}) => {

    return(
        <div className='pa2'>
            <input className='bg-lightest-blue br2 bw1 pa3 b--blue' 
            type="search" 
            placeholder='Find Robo Friend'
            onChange={(searchChange)}
           
            />
        </div>
    );
}
export default Searchbox;
