import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm/SearchForm';
import ResultsList from './ResultsList/ResultsList';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            searchbar: ""
            showList: false
        }
    }
    submitSearch(e) {
        e.preventDefault();
        const searchResults = e.target.value;
        console.log(e.target)
        const apiKey = '&key=AIzaSyC7IzbfVcGrG-ytdiqEg9F2VEM1YsDiFo';
        const baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
        const url = baseUrl + searchResults + apiKey;
        console.log(url);

        fetch(url)
            .then(res => {
                if (!res.ok) {
                    console.log('whoops, I really crapped that one up!');
                }
                return res.json();
            })
            .then(resJson => {
                this.setState({
                    results: resJson.items,
                    showList: true
                });
            })
    }
    render() {
    
        const searchResults = this.state.showList
            ? <ResultsList results={this.state.results}/>
            : "";
       console.log(this.state.results)

        return (
            <main className="App">
                <header>
                    <h1>Google Book Search</h1>
                </header>
                <SearchForm 
                    searchbar={this.state.searchbar}
                    handleSearch={search => this.submitSearch(search)}/>
                { searchResults }
            </main>
        );
    }
}

export default App;