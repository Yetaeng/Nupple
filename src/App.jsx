import { Route, Routes } from 'react-router-dom';
import { Header } from './components/header/Header';
import './App.css';
import { Footer } from './components/footer/Footer';
import { Main } from './pages/Main';

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};