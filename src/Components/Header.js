import React from 'react';
import './App.css';

class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <img className="logo" src="./images/logo.png" alt="" />  
            </div>
        );
    }
}
export default Header;