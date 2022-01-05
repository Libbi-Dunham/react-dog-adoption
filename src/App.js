import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DogDetail from './Views/Dogs/DogDetail';
import DogList from './Views/Dogs/DogList';
import Header from './Components/Header/Header';
import Admin from './Components/Admin/Admin';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Admin />
        <Switch>
          <Route path="/dogs/:id">
            <DogDetail />
          </Route>
          <Route exact path="/">
            <DogList />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
