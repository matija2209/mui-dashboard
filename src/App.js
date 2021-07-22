import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {createMuiTheme,ThemeProvider} from '@material-ui/core'
import Layout from './components/Layout'
import About from './components/About'

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path ="/" ></Route>
          <Route path="/create">
            <About></About>
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
