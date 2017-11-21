import React, { Component } from 'react';
import Character from '../Character/Character';
import './CharacterList.css'

class CharacterList extends Component {

    render(){
        return(
            <div className = 'CharacterList-container'>
            {this.buildCharacters()}
            </div>
        );
    }
    buildCharacters() {
        const characters = this.props.characters.map( (character)=>{
            const { id, name, lvl, exp, description} = character;
            return (<Character
                key={id}
                id={id}
                name={name}
                lvl={lvl}
                exp={exp}
                description={description}
            />)
        });
        return characters;
    }        
}

export default CharacterList;