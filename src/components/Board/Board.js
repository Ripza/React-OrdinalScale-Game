
import React, { Component } from 'react';
import CharacterList from '../CharacterList/CharacterList';

class Board extends Component{

    render(){
        return (
            <div className='Board-container'>
                <div className='Board-name'>
                Personajes
                </div>
                {this.buildCharacterList()}
            </div>
        );
    } //cuando un render tiene mas de 15 lineas, esta malo!

    buildCharacterList(){
        return(
        <CharacterList 
        characters={this.props.characters}
        />
         );
    }
}


export default Board;