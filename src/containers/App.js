import React, { Component } from 'react'
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';

import { arra } from './arra'
class  App extends Component {
    constructor() {
        super()
        this.state = {
            arra: arra,
            searchfield: ''
        }
    }
  
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    render() {

        const filteredArray = this.state.arra.filter(arra => {    
        return arra.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if(this.state.arra.length === 0){
            return <div className='tc'> <h1>Loading</h1></div> 
        }  else  {
            return (
                <div className='tc'>
                    <h1>RoboFriends</h1>
                 
                    <Searchbox searchChange={this.onSearchChange}/>
                    <Scroll>
                    <Cardlist arra={filteredArray}/>
                  </Scroll>
                  <Footer />

               </div>

            );
        }

 
}
}
export default App;