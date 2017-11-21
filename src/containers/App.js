import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectReddit, fetchPostsIfNeeded, invalidateReddit } from '../actions'
import Board from '../components/Board/Board';

import './App.css';

class App extends Component {

  state = {
    characters: [
      { id:1, name: 'Juanito',description: 'JUanito buenamente', exp: '400',lvl:'30'},
      { id:2, name: 'Juliet',description: 'Juliet buenamente', exp: '100',lvl:'50'}
    ]
  }
  render() {
    return (
      <Board 
        characters={this.state.characters}
      />
    );
  }
}

export default connect(mapStateToProps)(App)