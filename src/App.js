import React from 'react'
import './App.css'
import Header from './Header/Header'
import Searchbar from './Searchbar/Searchbar'

import Results from './Results/Results'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      books: [],
      selected: null,
    }
  }

  

  displayResults() {
    this.setState({
      books: [...this.state]
    })
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Searchbar 
          onSubmit={data => displayResults(data)}
        />
        <h1>Results:</h1>
        <Results 
          books={this.state.books}
        />
      </div>
    );
  }
  
}

export default App;
