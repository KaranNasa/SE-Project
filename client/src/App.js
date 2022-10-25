import './App.css';
import { Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Registeration from './Components/Registeration';
import Login from './Components/Login';
import Personal from './Components/Personal';
import Logout from './Components/Logout';
import Home from './Components/Home';
import { createContext, useReducer } from 'react';
import { initialState, reducer} from '../src/reducer/UseReducer';

export const UserContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
    <UserContext.Provider value={{state, dispatch}}>
      <Header/>
      <Navbar/>
      <Route path = "/home">
        <Home/>
      </Route>
      <Route path = "/personal">
        <Personal/>
      </Route>
      <Route path = "/login">
        <Login/>
      </Route>
      <Route path = "/registeration">
        <Registeration/>
      </Route>
      <Route path = "/logout">
        <Logout/>
      </Route>
      <Footer />
    </UserContext.Provider>
    </>
  );
}

export default App;