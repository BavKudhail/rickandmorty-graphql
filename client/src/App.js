import React from "react";

// importing apollo client, inmemorycache
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import { CharactersList, Character } from "./pages";

// creating a new apollo client (not to be confused with ApolloServer)
const client = new ApolloClient({
  // in this case we are using an external API
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<CharactersList />} />
            <Route path="/:id" element={<Character />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
