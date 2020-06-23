import React from 'react';
import './Searchbar.css'

class Searchbar extends React.Component {
        state = {
            fSearch: "",
            printType: "",
            bookType: "",
        };

    handleInputChange = ev => {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }
//handleSearch would be better
    handleSubmit = (event) => {
        event.preventDefault()
        // const params = {
        //     fSearch: this.state.fSearch,
        //     printType: this.state.printType,
        //     bookType: this.state.bookType
        // }  
        const { fSearch, printType, bookType} = this.state;
        const apiKey = 'AIzaSyDd5WcR9XrtFRYDLuDAoHIQW6HGtEzi1ds';
        const apiUrl = 'https://www.googleapis.com/books/v1/volumes';
        const params = { q: fSearch, printType, bookType, apiKey};
        
        const queryString = formatQueryParams(params)
        const url = apiUrl + '?' + queryString
        console.log(url)
        function formatQueryParams(params) {
            const queryItems = Object.keys(params)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
            return queryItems.join('&');
        }

        fetch(url)
            .then(res => {
            if(!res.ok) {
            throw new Error('Please try later')
        } return res;
        })
            .then(res => res.json())
            .then(data => {
            console.log(data)
            let price
            let snippet
             const books = data.items.map(i => {
                    
                    i.saleInfo.retailPrice 
                    ? price = i.saleInfo.retailPrice.amount 
                    : price = 'no pricing information available';

                    i.searchInfo
                    ? snippet = i.searchInfo.textSnippet
                    : snippet = 'no snippet available';

                    return {
                        title: i.volumeInfo.title, 
                        photoUrl: i.volumeInfo.imageLinks.thumbnail, 
                        author: i.volumeInfo.authors, 
                        price,
                        snippet
                    }
                })
            this.props.setBooks(books)
        }) 
        .catch(err => {
        this.setState({
        error: err.message
      })

    })

    this.setState({
            fSearch: "",
            printType: "",
            bookType: ""
        })
    }
    
    render() {
        return (
            <form className="Searchbar">
                <label htmlFor="search">Search: </label>
                <input 
                    type="text" 
                    name="fSearch" 
                    id="search" 
                    placeholder="Enter a book title"
                    value={this.state.fSearch}
                    onChange={ev => this.handleInputChange(ev)}
                ></input>
               
                <label htmlFor="print-type">Print Type: </label>
                    <select
                        name="printType"
                        value={this.state.printType}
                        onChange={ev => this.handleInputChange(ev)}
                    >
                        <option>--Select--</option>
                        <option>all</option>
                        <option>books</option>
                        <option>magazines</option>
                    </select>
                    <label htmlFor="book-type">Book Type: </label>
                    <select
                        name="bookType"
                        value={this.state.bookType}
                        onChange={ev => this.handleInputChange(ev)}
                    >
                        {/* <option>No filter</option> */}
                        <option>--Select--</option>
                        <option>free-ebooks</option>
                        <option>paid-ebooks</option>
                    </select>
                    <br />
                    <button
                    onClick={(ev) => this.handleSubmit(ev)}
                >Search</button>
            </form>
        )
    }
}

export default Searchbar