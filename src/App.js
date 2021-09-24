import LeftSection from "./LeftSection";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";


function App() {
  return (
    <>
    <div className="container-fluid main-cont">
          <div className="row">
            <div className="">
                <LeftSection></LeftSection>
            </div>

            <div className="right-section">

            </div>
          </div>
    </div>
        
    </>
    
  )
}

export default App;
