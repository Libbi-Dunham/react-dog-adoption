import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import DogDetail from './Views/Dogs/DogDetail';
import DogList from './Views/Dogs/DogList';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavLink to="/" data-testid="home">
            Home
          </NavLink>
        </header>
        <Switch>
          <Route path="/dogs/:id">
            <DogDetail />
          </Route>
          <Route path="/dogs">
            <DogList />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
