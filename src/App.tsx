import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Product } from './components/ContentBlock/ProductsList/Product/Product';
import ProductsList from './components/ContentBlock/ProductsList/ProductsList';
import Header from './components/Header/Header';
import Container from './styled/BodyBlock/Container';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Switch>
          <Route path='/ltd-app' exact component={ProductsList} />
          <Route path='/ltd-app/product/:productId' component={Product} />
          <Route path='*' render={() => <div>404 NOT FOUND</div>} />
        </Switch>
      </Container>
    </>
  );
}

export default App; 