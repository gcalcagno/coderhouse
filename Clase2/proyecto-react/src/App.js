import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Posts</h2>
        </div>
        <p className="App-intro">
          Listado de Posts
        </p>


        <TituloPosts name="Nombre autor"/>

        <PostBox/>


      </div>
    );
  }
}

//coponente tituloPosts
class TituloPosts extends Component {
    render() {
        return (
            <p className="btn btn-primary">{this.props.name}</p>
        );
    }
}

//coponente PostBox
/*class PostBox extends Component {
    render() {
        return (
            <input type="text" />
        );
    }
}*/


class PostBox extends Component {

  handleKeyPress(event) {
     if (event.keyCode === 13) {
      alert("enter");
    }
  }

  render() {
    return (

      <textarea onKeyPress={this.handleKeyPress.bind(this)}/>
    );
  }
}


export default App;
