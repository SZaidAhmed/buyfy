import './App.css';
import {Switch  , Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
import Authentication from './Pages/Authentication/Authentication';
import Category from './Pages/Category/Category';
import Checkout from './Pages/Checkout/Checkout';
import CategoryProducts from './Pages/CategoryProducts/CategoryProducts';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/authentication" component={Authentication} exact/>
        <Route path="/category" component={Category} exact/>
        <Route path="/checkout" component={Checkout} exact/>
        <Route path="/categoryproducts" component={CategoryProducts} exact/>
      </Switch>
    </div>
  );
}

export default App;
