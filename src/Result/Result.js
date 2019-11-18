import React, { Component } from 'react';
import './Result.css';

class Result extends Component {
    render() {
        return (
            <li className="result">
                <h2 className="result_name">{this.props.volumeInfo.title}</h2>
                <div className="result_info">
                    <img src={this.props.volumeInfo.imageLinks.thumbnail} alt="book cover"/>
                    <div className="result_text">
                        <div className="result_author"></div>
                        <div className="result_price"></div>
                        <div className="result_description">{this.props.volumeInfo.description}</div>
                    </div>
                </div>
            </li>
        );
    }
}

export default Result;