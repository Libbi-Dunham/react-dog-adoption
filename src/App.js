import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DogDetail from './Views/Dogs/DogDetail';
import DogList from './Views/Dogs/DogList';
import DogEdit from './Views/Dogs/DogEdit';
import Header from './Components/Header/Header';
// import Admin from './Components/Admin/Admin';
import './App.css';
import CreateDog from './Components/Admin/Admin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {/* <Admin /> */}
        <Switch>
          <Route exact path="/dogs/:id">
            <DogDetail />
          </Route>
          <Route exact path="/">
            <DogList />
          </Route>
          <Route exact path="/dogs/:id/DogEdit">
            <DogEdit />
          </Route>
          <Route exact path="/admin">
            <CreateDog />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
