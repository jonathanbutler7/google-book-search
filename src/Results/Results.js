import React from 'react'
import './Results.css'
// import ResultCard from '../ResultCard/ResultCard'

class Results extends React.Component { 
    render() {
        const books = this.props.books.map((i, index) => {
            return ( 
                <div key={index}>
                    <h1>{i.title}</h1>
                    <img src={i.photoUrl} />
                    <p>{i.snippet}</p>
                    <p>{i.author}</p>
                </div>
            )
        })
        return (
            <div>
                {books}
            </div>
        )
    }
}

export default Results

                {/* {this.props.titles.map((i, index) =>
                <h1 key={index}>{i}</h1>
                )}
                {this.props.photoUrls.map((i, index) =>
                <img key={index} src={i}/>)} */}