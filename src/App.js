import React from 'react';
import './App.css';
import SearchForm from './SearchForm/SearchForm';
import ResultsList from './ResultsList/ResultsList';

function App() {
  return (
    <main className="App">
      <header>
        <h1>Google Book Search</h1>
      </header>
      <SearchForm />
      <ResultsList />
    </main>
  );
}

export default App;