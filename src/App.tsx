import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Task10Page from './pages/Task10Page';
import Task11Page from './pages/Task11Page';
import Task14Page from './pages/Task14Page';
import Task15Page from './pages/Task15Page';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/task10" element={<Task10Page />} />
          <Route path="/task11" element={<Task11Page />} />
          <Route path="/task14" element={<Task14Page />} />
          <Route path="/task15" element={<Task15Page />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;