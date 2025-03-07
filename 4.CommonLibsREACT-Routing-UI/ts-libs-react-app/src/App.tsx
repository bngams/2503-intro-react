import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Header from './components/Header';

function App() {

  return (
    <>
      <BrowserRouter> 
        <Header /> 
        <Routes>
          <Route index path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
