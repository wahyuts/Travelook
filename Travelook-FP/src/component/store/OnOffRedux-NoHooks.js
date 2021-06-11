import React, { Component } from 'react';
import { setDesti } from '../../actions/auth';
import {connect} from 'react-redux';

const mapStateToProps = state => {   
      return {
          desti:state.searchDesti.desti                                 
      }       
  }
  
  const mapDispatchToProps = (dispatch) =>  {   
      return {   
          handleChange:(event) => dispatch(setDesti(event.target.value))  
      }  
  }


// class OnOffReduxNoHooks extends Component {

    // const {desti, handleChange} = this.props;


const OnOffReduxNoHooks = () => {
    // const mapStateToProps = state => {   
    
    //       return {
    //           desti:state.searchDesti.desti                                
    //       }       
    //   }
      
    //   const mapDispatchToProps = (dispatch) =>  {   
    //       return {   
    //           handleChange:(event) => dispatch(setDesti(event.target.value))  
    //       }  
    //   }
    // render(){

      return {
        mapStateToProps,
        mapDispatchToProps,
        // desti,
        // handleChange
    }
}

// }

export default connect(mapStateToProps, mapDispatchToProps)(OnOffReduxNoHooks)
