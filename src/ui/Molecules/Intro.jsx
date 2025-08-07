import React from "react";
import Input from "../Atom/Input";
import ButtonStyle from "../Atom/ButtonStyle";

function Intro(){
    return(
        <>
        <div className="Intro">
        <div className="text-section">
        <p className="data-1"><strong>Trello helps teams move work forward</strong></p>
        <p className="data-2">Collaborate, manage projects, and reach new productivity peaks.<br></br>
From high rises to the home office, the way your team works<br></br> is unique — accomplish it all with Trello.</p>
</div><div className="container-1">
    <div className="Input-feild">
   <Input />
   </div><div className="button-style">
   <ButtonStyle>sign up-its free</ButtonStyle>
   </div>
   </div>
   </div>
   
        </>
    )
}
export default Intro;