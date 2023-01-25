import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Notes from "./Pages/Notes";
import Users from "./Pages/Users";
import Navbar from "./components/Navbar";

const App = () => {
    let routes = useRoutes([
        { path: "/Users.js", element: <Users /> },
        { path: "/Notes.js", element: <Notes /> },
    ]);
    return routes;
};

const AppWrapper = () => {
    return (
        <Router>
            <Navbar />
            <App />
        </Router>
    );
};

export default AppWrapper;

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
