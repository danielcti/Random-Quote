import React, { Component } from 'react';
import './App.css';
import Card from './components/Card'

class App extends Component {
  constructor(){
    super()
    this.state = {
      name : 'Richard McClintock',
      text : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda omnis deleniti corrupti, natus alias unde. Recusandae, iusto quisquam tempora explicabo, neque corrupti unde accusamus repellat ipsa praesentium veniam dolorem vel!'
    }
    this.onQuoteSubmit = this.onQuoteSubmit.bind(this);
  }

  onQuoteSubmit(){
    fetch('https://quota.glitch.me/random')
    .then(response => response.json())
    .then(data => {
      // console.log(data.quoteText,data.quoteAuthor)
      this.setState({name:data.quoteAuthor, text:data.quoteText})

    })
  }


  render() {
    return (
      <div className="App">
      <h1>The random quote generator!</h1>
      <Card {...this.state} onQuoteSubmit={this.onQuoteSubmit}/>
      </div>
    );
  }
}

export default App;
