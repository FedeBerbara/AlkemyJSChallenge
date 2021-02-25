import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
 } from 'react-router-dom';

 //* Pages
import Main from './pages/Home/Main';
import Incomes from './pages/Incomes/Incomes';
import Expenses from './pages/Expenses/Expenses';
//import LandingPage from './pages/Landing/LandingPage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* <Route exact path="/">
            <LandingPage />
          </Route> */}
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/operations/incomes">
            <Incomes />
          </Route>
          <Route exact path="/operations/expenses">
            <Expenses />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
