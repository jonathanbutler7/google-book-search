import React from 'react';
import './Options.css'

class Options extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            printType: "",
            bookType: "",
        }
    }

    render() { 
        return (
            <div className="form">
                <form>
                    <label htmlFor="print-type">Print Type: </label>
                    <select>
                        <option>all</option>
                        <option>books</option>
                        <option>magazines</option>
                    </select>
                    <label htmlFor="book-type">Book Type: </label>
                    <select>
                        <option>No filter</option>
                        <option>free-ebooks</option>
                        <option>paid-ebooks</option>
                    </select>
                </form>
            </div>
        );
    }
}
 
export default Options;