import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayerList from './components/PlayerList';
import PlayerPage from './components/PlayerPage';
import PlayerAdd from './components/PlayerAdd';
import { Provider } from 'react-redux';
import store from './store';
import { fetchPlayers } from './actions/actions';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

// fetch initial data
store.dispatch(fetchPlayers());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <Navbar bg="dark" variant="dark">
              <Container>
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/">Liste des cartes</Nav.Link>
                  <Nav.Link as={Link} to="/add">Créer</Nav.Link>
                </Nav>
              </Container>
          </Navbar>
          <Routes>
              <Route path="/">
                <Route index element={<PlayerList />} />
              </Route>
              <Route path="/add" element={<PlayerAdd />} />
              <Route path="/player/:id" element={<PlayerPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
