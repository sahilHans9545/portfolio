import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";


function App() {

  
  useEffect(()=>{
    const menuBar=document.querySelector(".menuBar");
    const leftCont=document.querySelector(".left-section-cont")
    menuBar.addEventListener("click",()=>{
      console.log(leftCont)
        menuBar.classList.toggle("cross-menu");
        leftCont.classList.toggle("show-left")
    })
  },[])

  return (
    <>
    <div className="container-fluid main-cont">
      <div className="menuBar">
        <div></div>
        <div></div>
        <div></div>
      </div>
          <div className="row d-flex">
            <div className="left-section-cont">
                <LeftSection></LeftSection>
            </div>

            <div className="right-section-cont">
                <RightSection></RightSection>
            </div>
          </div>
    </div>
        
    </>
    
  )
}

export default App;
