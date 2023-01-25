import './App.css';
import Navbar from './components/Navbar';
import Notes from './Pages/Notes';
import Users from './Pages/Users';
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
        <Route path="/" element={<Navbar />}/>
        <Route path="Users.js" element={<Users />} />
        <Route path="Notes.js" element={<Notes />} />
  </Routes>
  );
}

export default App;
