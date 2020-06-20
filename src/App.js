import React from 'react'
import './App.css'
import Header from './Header/Header'
import Searchbar from './Searchbar/Searchbar'
import Options from './Options/Options'
import Results from './Results/Results'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      books: []
    }
  }

  componentDidMount() {
    fetch('https://www.googleapis.com/books/v1/volumes?q=henry&printType=books&key=AIzaSyDd5WcR9XrtFRYDLuDAoHIQW6HGtEzi1ds')
    .then(response => response.json())    
    .then(data => {
      console.log(data)
      console.log(data.items[0].searchInfo.textSnippet)
      this.setState({
        books: data.items.map(i => {
          return {title: i.volumeInfo.title, photoUrl: i.volumeInfo.imageLinks.thumbnail, snippet: i.searchInfo.textSnippet, author: i.volumeInfo.authors}
        })
      })
    })
  }
  
  render() {
    // console.table(this.state)
    return (
      <div className="App">
        <Header />
        <Searchbar />
        <Options />
        <Results 
          books={this.state.books}
        />
      </div>
    );
  }
  
}

export default App;
