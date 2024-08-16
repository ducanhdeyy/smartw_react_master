import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Report from './routes/index';
import '/node_modules/primeflex/primeflex.css';
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {Report.map((route, index) => (
            <Route key={index} path={route.path} element={<route.component label={route.label} />} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
