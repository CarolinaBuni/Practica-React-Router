import { Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import NotFound from './pages/404/404';

function App() {

  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/about/:id' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
