import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// importing apollo client, inmemorycache
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

// creating a new apollo client (not to be confused with ApolloServer)
const client = new ApolloClient({
  // in this case we are using an external API
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* wrap entire app with an apolloProvider component */}
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

reportWebVitals();
