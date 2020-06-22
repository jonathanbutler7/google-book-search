import React from 'react'
import './Results.css'
// import ResultCard from '../ResultCard/ResultCard'

class Results extends React.Component { 
    render() {
        
        const books = this.props.books.map((i, index) => {
            return ( 
                <div key={index} className="result-card">
                    <h3>{i.title}</h3>
                    <div className="results-innards">
                        <img src={i.photoUrl} alt=""/>
                        <div className="results-text">
                            <h4>AUTHOR: {i.author}</h4>
                            <p>{i.price}</p>
                            <p>{i.snippet.normalize('NFC')}</p>
                        </div>
                    </div>
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