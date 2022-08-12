import Chat from '../Chat';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from '../HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/chat" element={<Chat/>}/>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </Router>

  );
}

export default App;
