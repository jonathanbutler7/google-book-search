import React from 'react';
import './Options.css'

class Options extends React.Component {
    render() { 
        return (
            <div className="form">
                <form>
                    <label htmlFor="print-type">Print Type: </label>
                    <select>
                        <option>All</option>
                        <option>Books</option>
                        <option>Magazines</option>
                    </select>
                    <label htmlFor="book-type">Book Type: </label>
                    <select>
                        <option>All</option>
                    </select>
                </form>
            </div>
        );
    }
}
 
export default Options;