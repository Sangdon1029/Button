import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeIndexPage from './pages/home';
import MainIndexPage from './pages/main';
import ResultIndexPage from './pages/result';
import TestIndexPage from './pages/test';
import GiftIndexPage from './pages/forGift';
import CategoryIndexPage from './pages/category';
import GiftResultIndexPage from './pages/giftResult';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomeIndexPage} />
          <Route path="/main" exact component={MainIndexPage} />
          <Route path="/result" exact component={ResultIndexPage} />
          <Route path="/test" exact component={TestIndexPage} />
          <Route path="/gift" exact component={GiftIndexPage} />
          <Route path="/category" exact component={CategoryIndexPage} />
          <Route path="/giftResult" exact component={GiftResultIndexPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
