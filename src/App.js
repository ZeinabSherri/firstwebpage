import React from "react";
import ResponsiveAppBar from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Users from './Pages/Users';
import Notes from './Pages/Notes';
import Home from './Pages/Home';
 function App()  {
    return (
        <div>
            <ResponsiveAppBar />
            <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Users' element={<Users/>}/>
            <Route path='/Notes' element={<Notes/>}/>
            </Routes>
        </div>
    );
};

export default App;

// import "./App.css";
// import Navbar from "./components/Navbar";
// import Notes from "./Pages/Notes";
// import Users from "./Pages/Users";
// import { Route, Routes } from "react-router-dom";
// function App() {
//     return (
//         <>
//             <Navbar />
//             <Routes>
//                 <Route path="/Users" element={<Users />} />
//                 <Route path="Notes" element={<Notes />} />
//             </Routes>
//         </>
//     );
// }

// export default App;
