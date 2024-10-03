import "./App.css";
import { useState } from "react";
import Progress from "./progress";
import BasicInfo from "./basic";
import PasswordPage from "./passwordPage";
import ProfilePage from "./profilePage";
import FinalPage from "./finalPage";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

function App() {
    let [progArr, setProg] = useState([1]);
    let [lineProgArr, setLineProg] = useState([]);

    let updateProg = (arr) => {
        setProg(arr);
    }

    let updateLineProg = (arr) => {
        setLineProg(arr);
    }

    console.log(progArr.length);

    return (
        <div className="main">
          <div className="progress-box">
            <Progress prog={progArr} lineProg={lineProgArr} />
          </div>
          <div className="form">
            {/* <Router>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<BasicInfo update={updateProg} updateLine={updateLineProg}/>}
                    />
                    <Route
                        path="/password"
                        element={<PasswordPage update={updateProg} updateLine={updateLineProg}/>}
                    />
                    <Route
                        path="/profile"
                        element={<ProfilePage update={updateProg} updateLine={updateLineProg}/>}
                    />
                    <Route
                        path="/final"
                        element={<FinalPage update={updateProg} updateLine={updateLineProg}/>}
                    />
                    <Route
                        path="*"
                        element={<Navigate to="/" />}
                    />
                </Routes>
            </Router> */}
            {
                (progArr.length == 1)? <BasicInfo update={updateProg} updateLine={updateLineProg}/>:(
                    progArr.length == 2)? <PasswordPage update={updateProg} updateLine={updateLineProg}/>:(
                        progArr.length == 3)? <ProfilePage update={updateProg} updateLine={updateLineProg}/>:<FinalPage />
                
            }
            {/* / <BasicInfo update={updateProg} updateLine={updateLineProg}/> */}
          </div>
        </div>
    );
}

export default App;