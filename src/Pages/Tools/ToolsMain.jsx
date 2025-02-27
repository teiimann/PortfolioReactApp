import React from "react";
import ToolsImg from "../../Images/ToolsImg.jpg"
import "./Tools.css"
import ToolsNav from "./ToolsNav";
import ToolsContent from "./ToolsContent";


const ToolsPage = () => {
    return(
        <div className="parent-div ">
      <div className="instrumentspage-1650 pos-abs">
        <ToolsNav/>
        <section className="maincontent-1693 pos-abs">
         
         <ToolsContent/>
        </section>

        <div className="toolsimg-1676 pos-abs">
          <img
            src={ToolsImg}
            className="pos-abs image-div bg-no-repeat bg-crop nodeBg-1676 "
            alt="1676-ALT"
          />{" "}
        </div>
      </div>
    </div>
    )
}

export default ToolsPage;