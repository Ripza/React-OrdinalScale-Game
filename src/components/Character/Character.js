import React, { Component } from 'react';
import './Character.css'

class Character extends Component {


    render(){
        return(
            <div className="Character-details">

            <div className="Character-name">
               {this.props.name}
            </div>
            <div className="Character-lvl">
               {this.props.lvl}
            </div>
            <div className="Character-exp">
               {this.props.exp}
            </div>
            <div className="Character-description">
               {this.props.description}
            </div>

            </div>
        );
    }

}

export default Character;