import React, { Component } from 'react';
import './ResultsList.css';
import Result from '../Result/Result';

class ResultsList extends Component {
    
    render() {
        const searchResults = this.props.results.map((result, i) => <Result {...result} key={i} />)
        return (
            <section className="results_list">
                <ul>
                    { searchResults }
                </ul>
            </section>
        );
    }
}

export default ResultsList;