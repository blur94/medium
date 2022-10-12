import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContextProvider from './hooks/ContextComponent';
import Home from './Containers/Home/Home';
import PostComponent from './Containers/Home/PostComponent';
// import Login from './Containers/User/Login';
// import Signup from './Containers/User/Signup';

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/post/:id' element={<PostComponent/>} />
          </Routes>
        </div>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
