import {Switch, Route, Redirect} from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllQuotes from './components/pages/AllQuotes';
import NewQuote from './components/pages/NewQuote';
import NotFound from './components/pages/NotFound';
import QuoteDetails from './components/pages/QuoteDetails';

function App() {
  return (
    <Layout>  
      <Switch>
        {/* <Route path='/' component={AllQuotes} exact></Route>  */}
        <Route path='/' exact>
          <Redirect to='/quotes'></Redirect>
        </Route>
        <Route path='/quotes' component={AllQuotes} exact></Route>
        <Route path='/new-quote' component={NewQuote}></Route>
        <Route path='/quotes/:quoteId' component={QuoteDetails}></Route>
        <Route path='*' component={NotFound}></Route>
      </Switch>
    </Layout>
  );
}

export default App;
