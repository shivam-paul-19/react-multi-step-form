import "./App.css";
import { useState } from "react";
import Progress from "./progress";
import BasicInfo from "./basic";
import PasswordPage from "./passwordPage";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

function App() {
    let [progArr, setProg] = useState([]);
    let [lineProgArr, setLineProg] = useState([]);

    let updateProg = (arr) => {
        setProg(arr);
    }

    let updateLineProg = (arr) => {
        setLineProg(arr);
    }

    return (
        <div className="main">
          <div className="progress-box">
            <Progress prog={progArr} lineProg={lineProgArr} />
          </div>
          <div className="form">
            <Router>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<h1><BasicInfo update={updateProg} updateLine={updateLineProg}/></h1>}
                    />
                    <Route
                        path="/password"
                        element={<h1><PasswordPage update={updateProg} updateLine={updateLineProg} /></h1>}
                    />
                    <Route
                        path="/contactus"
                        element={<h1>ye contact hai</h1>}
                    />
                    <Route
                        path="*"
                        element={<Navigate to="/" />}
                    />
                </Routes>
            </Router>
          </div>
        </div>
    );
}

export default App;