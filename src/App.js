import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Gallery from './Gallery/Gallery';
import VaritoneHistory from './VaritoneHistory/VaritoneHistory';
import Brochure from './Brochure/Brochure';
import Ads from './Ads/Ads';
import Buy from './Buy/Buy';
import NavList from './NavList/NavList';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


function App() {
  return (
    <div className='App'>
      <header className="header">
        <Link to='/'>
          <h1>Varitone</h1>
        </Link>
      </header>
      <div className="Nav">
        <ErrorBoundary>
          <NavList />
        </ErrorBoundary>
      </div>
      <div className='mainContainer'>
        <ErrorBoundary>
          <Switch>
            <Route
              exact path="/"
              component={Home}
            />
            <Route
              path='/gallery'
              component={Gallery}
            />
            <Route
              path='/varitone_history'
              component={VaritoneHistory}
            />
            <Route
              path='/varitone_ads'
              component={Ads}
            />
            <Route
              path='/varitone_brochure'
              component={Brochure}
            />
            <Route
              path='/buy'
              component={Buy}
            />
          </Switch>

        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
