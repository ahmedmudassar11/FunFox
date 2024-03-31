import './App.css';
import Layout from './Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Week1 from './Week1';
import Week2 from './Week2';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Week1 />} />
            <Route path='week-two' element={<Week2 />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Layout />
    </div>
  );
}

export default App;
