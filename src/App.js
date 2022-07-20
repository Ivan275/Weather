import { useState } from "react";
import { onError } from "@apollo/client/link/error";
import { Route, Routes, Navigate, BrowserRouter as Router} from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";

import SignUp from './Components/SignUp';
import SignIn from "./Components/SiginIn";
import Navbar from "./Components/navigation/Navbar";
import Search from "./Components/Search";
import UserContext from "./Components/context/context";
import NotFound from "./Components/NotFound";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
      return message;
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:6969/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {

  const [ user, setUser ] = useState("");

  return (
    <ApolloProvider client={client}>
      <UserContext.Provider value={{user, setUser}}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<SignIn setUser={setUser} />}/>
            <Route path="/signUp" element={<SignUp />}/>
            <Route path="/not-found" exact element={<NotFound /> } />
            {user && <Route path="/search" element={<Search/>} />}
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </ApolloProvider>
  );
}

export default App;
