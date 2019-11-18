import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "searchBar": "",
        }
    }
    searchBarChanged(searchBar) {
        this.setState({
            searchBar
        });
    }
    render() {
        return (
            <form className="booksearch__form" onSubmit={e => this.props.handleSearch(e)}>
                <div className="main_search">
                    <label htmlFor="search_bar" name="search_bar">Search:</label>
                    <input 
                        type="text" 
                        name="search_bar" 
                        id="search_bar" 
                        placeholder="example: henry" 
                        value={this.state.searchBar}
                        onChange={e => this.searchBarChanged(e.target.value)}/>
                    <button type="submit">
                        Search
                    </button>
                </div>
                <div className="additional_search">
                    <label htmlFor="print_type" name="print_type">Print Type:</label>
                    <select id="print_type">
                        <option value="All">All</option>
                        <option value="Books">Books</option>
                        <option value="Magazines">Magazines</option>
                    </select>
                </div>
            </form>
        );
    }
}

export default SearchForm;