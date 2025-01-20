import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import React from 'react';
import { Header } from './components/Header';
import { AllCats } from './pages/AllСats';
import { FavoriteCats } from './pages/FavoriteСats';
import { AppStateProvider } from './context/AppContext';
import './styles.css';

function App() {
  return (
    <AppStateProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<AllCats />} />
          <Route path="/favorites" element={<FavoriteCats />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AppStateProvider>
  );
}

export default App;
